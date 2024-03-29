var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const urlAPI = "https://rickandmortyapi.com/api/episode";
printEpTitles(urlAPI);
function printEpTitles(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const epListContainer = document.getElementById("episodeList");
        const epBtn = document.getElementById("epBtn");
        const data = yield fetch(url);
        const JSONdata = yield data.json();
        const episodes = JSONdata.results;
        episodes.forEach((episode) => {
            epListContainer.insertAdjacentHTML("beforeend", `<li class="side-bar__item" id="${episode.id}" epUrl="${episode.url}">${episode.name}</li>`);
            const chargeCharacter = document.getElementById(`${episode.id}`);
            chargeCharacter.addEventListener("click", dispEpContent);
        });
        if (JSONdata.info.next) {
            epBtn.addEventListener("click", () => {
                printEpTitles(JSONdata.info.next);
            }, { once: true });
        }
        else {
            epBtn.remove();
        }
    });
}
function dispEpContent(event) {
    return __awaiter(this, void 0, void 0, function* () {
        const target = event.target;
        const urlEp = target.getAttribute("epUrl");
        const data = yield fetch(urlEp);
        const epData = yield data.json();
        const displEpInfo = `<div class="ep-info">
    <h3 class="ep-info__title">${epData.name}</h3>
    <p>${epData.episode}</p>
    <p>Aired: ${epData.air_date}</p>
    </div>`;
        const sectContainer = document.getElementById("contArea");
        sectContainer.innerHTML = displEpInfo;
        const charsInEp = epData.characters;
        charsInEp.forEach((charUrl) => __awaiter(this, void 0, void 0, function* () {
            const data = yield fetch(charUrl);
            const charInfo = yield data.json();
            const displCharInfo = `<div class="char-card">
        <img class="char-card__img" src="${charInfo.image}">
        <h4 class="char-card__title">${charInfo.name}</h4>
        <p>Status: ${charInfo.status}</p>
        <p>Species: ${charInfo.species}</p>
        <p>Gender: ${charInfo.gender}</p>
        </div>`;
            sectContainer.insertAdjacentHTML("beforeend", displCharInfo);
        }));
    });
}
export {};
//# sourceMappingURL=script.js.map
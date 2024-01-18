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
            const liEpisode = document.createElement("li");
            liEpisode.textContent = episode.name;
            epListContainer.appendChild(liEpisode);
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
export {};
//# sourceMappingURL=script.js.map
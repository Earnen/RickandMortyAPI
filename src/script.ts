import { InfoAPI, Info, Episode, Character, Location} from "./interfaces/interface";

const urlAPI: string = "https://rickandmortyapi.com/api/episode";

printEpTitles(urlAPI);

async function printEpTitles(url:string) {  
    const epListContainer = document.getElementById("episodeList") as HTMLUListElement;
    const epBtn =document.getElementById("epBtn") as HTMLButtonElement;  
    const data = await fetch(url);
    const JSONdata:InfoAPI = await data.json();
    const episodes: Episode[] = JSONdata.results;

    episodes.forEach((episode: Episode) => {
       epListContainer.insertAdjacentHTML("beforeend",
       `<li class="side-bar__item" id="${episode.id}" epUrl="${episode.url}">${episode.name}</li>`);
       const chargeCharacter = document.getElementById(`${episode.id}`) as HTMLLIElement;
       chargeCharacter.addEventListener("click", dispEpContent);
    });
    
    if (JSONdata.info.next) {
        epBtn.addEventListener("click",
            () => {
                printEpTitles(JSONdata.info.next);
            },
            { once: true }        
        );
    } else {
        epBtn.remove();
    }
}

async function dispEpContent(event:MouseEvent) {
    const target = event.target as HTMLUListElement;
    const urlEp = target.getAttribute("epUrl")!;
    const data = await fetch(urlEp);
    const epData:Episode = await data.json();
    const displEpInfo = 
    `<div class="ep-info">
    <h3 class="ep-info__title">${epData.name}</h3>
    <p>${epData.episode}</p>
    <p>Aired: ${epData.air_date}</p>
    </div>`;
    const sectContainer = document.getElementById("contArea") as HTMLDivElement;
    sectContainer.innerHTML = displEpInfo;
    const charsInEp = epData.characters; 
    charsInEp.forEach(async charUrl => {
        const data = await fetch(charUrl);
        const charInfo: Character = await data.json();
        const displCharInfo = 
        `<div class="char-card">
        <img class="char-card__img" src="${charInfo.image}">
        <h4 class="char-card__title">${charInfo.name}</h4>
        <p>Status: ${charInfo.status}</p>
        <p>Species: ${charInfo.species}</p>
        <p>Gender: ${charInfo.gender}</p>
        </div>`;
        sectContainer.insertAdjacentHTML("beforeend", displCharInfo);
    })
}
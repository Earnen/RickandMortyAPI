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
       `<li id="${episode.id}" epUrl="${episode.url}">${episode.name}</li>`);
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

//En esta función 
async function dispEpContent(event:MouseEvent) {
    const target = event.target as HTMLUListElement;
    const urlEp = target.getAttribute("epUrl"/*atributo que haya puesto en cada elemento*/)!;
    const data = await fetch(urlEp);
    const epData:Episode = await data.json();
    const displEpInfo = 
    `<p>${epData.name}</p>
    <p>${epData.air_date}</p>
    <p>${epData.episode}</p>`;
    const sectContainer = document.getElementById("contArea") as HTMLDivElement;
    sectContainer.innerHTML = displEpInfo;
    const charsInEp = epData.characters; /*es un array de urls de cada pj*/
    charsInEp.forEach(async charUrl/*es una url de cada pj*/ => {
        const data = await fetch(charUrl);
        const charInfo: Character = await data.json();
        const displCharInfo = 
        `<p>${charInfo.name}</p>
        <p>${charInfo.status}</p>
        <p>${charInfo.species}</p>
        <p>${charInfo.gender}</p>
        <img src="${charInfo.image}">`;
        sectContainer.insertAdjacentHTML("beforeend", displCharInfo);
    })
}
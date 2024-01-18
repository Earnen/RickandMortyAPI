import { InfoAPI, Info, Episode} from "./interfaces/interface";

const urlAPI: string = "https://rickandmortyapi.com/api/episode";


printEpTitles(urlAPI);

async function printEpTitles(url:string) {  
    const epListContainer = document.getElementById("episodeList") as HTMLUListElement;
    const epBtn =document.getElementById("epBtn") as HTMLButtonElement;  
    const data = await fetch(url);
    const JSONdata:InfoAPI = await data.json();
    const episodes: Episode[] = JSONdata.results;

    episodes.forEach((episode: Episode) => {
        const liEpisode = document.createElement("li");
        liEpisode.textContent = episode.name;
        epListContainer.appendChild(liEpisode);
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


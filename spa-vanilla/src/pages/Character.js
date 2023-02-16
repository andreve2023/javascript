import getHash from "../utils/getHash";
import getdata from "../utils/getData";

const Character = async() => {
    const id = getHash();
    const characters = await getdata(id);
    console.log(characters)
    return `
        <div class="Characters-inner">
            <article class="Characters-card">
                <h2>${characters.name}</h2>
                <img src="${characters.image}" alt="${characters.name}">
            </article>
            <article class="Characters-card">
                <h3>Episodes: <span>${characters.episode.length}</span> </h3>
                <h3>Status: <span>${characters.status}</span> </h3>
                 <h3>Especies: <span>${characters.species}</span></h3>
                <h3>Gender: <span>${characters.gender}</span></h3>
                <h3>Origin: <span>${characters.origin.name}</span></h3>
                <h3>Last Location: <span>${characters.location.name}</span></h3>            
            </article>
        </div>
    `
}

export default Character
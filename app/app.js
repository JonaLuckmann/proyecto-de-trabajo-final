const API_BASE = "https://rickandmortyapi.com/api";
const API_CHARACTERS = "https://rickandmortyapi.com/api/character";

const llamadaAApi = fetch(API_CHARACTERS);

llamadaAApi
    .then((data) => {
        return data.json();
    })

    .then((data) => {
        const $container = document.getElementById("container");
        const characters = data.results;

        console.log(characters.length);
        for (let i = 0; i < characters.length; i++) {
            $container.innerHTML += `
            <div class="item-grid">
            <img 
            src=${characters[i].image}
            alt="imagen de personaje"
            />
            <h2>${characters[i].name}</h2>
            <p>${characters[i].gender}</p>
            <p>${characters[i].species}</p>
            <p>${characters[i].status}</p>
        </div>`;

        }
    })

    .catch((err) => {
        console.log(err);
    });
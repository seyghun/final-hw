let result = document.querySelector("#templates");
function renderCharacter({ name, gender, birth_year }) {
    let charactersTemplate = `
            <div class= "card character_card">
                <img src="./images/characters/${name}.jpg" alt = "!undefined picture!"></img>
                <h1>${name}</h1>
                <p>Gender: ${gender}</p>
                <p>Birth year: ${birth_year}</p>
            </div>
        `;
    result.innerHTML += charactersTemplate;
};

function getCharacter() {
    fetch("https://swapi.dev/api/people")
        .then((response) => {
            return response.json();
        })
        .then((characters) => {
            characters.results.forEach((character) => {
                renderCharacter(character);

            });
        });
};

document.querySelector("#charactersButton").addEventListener("click", (event) => {
    result.innerHTML = '';
    getCharacter(event);
});


function renderFilm({ title, episode_id, director, release_date }) {
    let filmsTemplate = `
            <div class= "card film_card">
                <h1>${title}</h1>
                <img src="./images/films/${title}.jpg" alt = "!undefined picture!"></img>
                <p>Episode: ${episode_id}</p>
                <p>Director: ${director}</p>
                <p>Release date: ${release_date}</p> 
            </div>
        `;
    result.innerHTML += filmsTemplate;
};

function getFilm() {
    fetch("https://swapi.dev/api/films")
        .then((response) => {
            return response.json();
        })
        .then((films) => {
            films.results.forEach((film) => {
                renderFilm(film);

            });
        });
}

document.querySelector("#filmsButton").addEventListener("click", (event) => {
    result.innerHTML = '';
    getFilm(event);
});

function renderPlanet({ name, diameter, climate, gravity }) {
    let planetsTemplate = `
            <div class= "card planet_card">
                <h1>${name}</h1>
                <img src="./images/planets/${name}.jpg" alt = "!undefined picture!"></img>
                <p>Diameter: ${diameter}</p>
                <p>Climate: ${climate}</p>
                <p>Gravity: ${gravity}</p> 
            </div>
        `;
    result.innerHTML += planetsTemplate;
};

function getPlanet() {
    fetch("https://swapi.dev/api/planets")
        .then((response) => {
            return response.json();
        })
        .then((planets) => {
            planets.results.forEach((planet) => {
                renderPlanet(planet);
            });
        });
}

document.querySelector("#planetsButton").addEventListener("click", (event) => {
    result.innerHTML = '';
    getPlanet(event);
});
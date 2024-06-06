function getIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

async function fetchGameById(id) {
    const response = await fetch(`http://127.0.0.1:8000/game/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}


async function showGameDetails() {
    const id = getIdFromUrl();
    if (id) {
        try {
            const game = await fetchGameById(id);
            displayGameDetails(game);
        } catch (error) {
            console.error('Failed to fetch game:', error);
        }
    } else {
        console.error('No ID found in URL');
    }
}

function displayGameDetails(game) {
    const imgGame = document.createElement('img');
    imgGame.setAttribute('src', game.image);
    imgGame.setAttribute('alt', game.title);

    document.getElementById('sellGameTitle').innerText = game.title;
    
    document.getElementById('game-image').appendChild(imgGame); 

    document.getElementById('price-game').innerHTML = " R$ " + game.price;

    document.getElementById('description').innerHTML = game.description;
}

document.addEventListener('DOMContentLoaded', showGameDetails);


/*

const createFreeGame = (games) => {
    const h3Title = "Play games for free";

    const testemunhal = document.createElement('div');
    testemunhal.classList.add('testemunhal');

    const h3 = document.createElement('h3');
    h3.textContent = h3Title;

    const testemunhalContainer = document.createElement('div');
    testemunhalContainer.classList.add('testemunhal-container');

    testemunhal.appendChild(h3);
    testemunhal.appendChild(testemunhalContainer);
    mainContainer.appendChild(testemunhal);

    const gameTitle0 = "Elden Ring";
    const gameImg0 = "assets/images/games/elden-ring-2k-wallpaper.jpg";
    const gameImgAlt0 = "Elden Ring";
    const littleDescrip0 = "Epic RPG adventure";
    const gamePrice0 = "R$ 00";

    const gameTitle1 = "League of Legends";
    const gameImg1 = "assets/images/games/lol-evelyn.jpg";
    const gameImgAlt1 = "League of Legends";
    const littleDescrip1 = "Intense MOBA battles";
    const gamePrice1 = "R$ 00";

    const gameTitle2 = "Counter Strike 2";
    const gameImg2 = "assets/images/games/counter-strike-2-game-2k-wallpaper-uhdpaper.com-222@1@k.jpg";
    const gameImgAlt2 = "Counter Strike 2";
    const littleDescrip2 = "Tactical online shooter";
    const gamePrice2 = "R$ 00";

    CreateGames(testemunhalContainer, gameTitle0, gameImg0, gameImgAlt0, littleDescrip0, gamePrice0);
    CreateGames(testemunhalContainer, gameTitle1, gameImg1, gameImgAlt1, littleDescrip1, gamePrice1);
    CreateGames(testemunhalContainer, gameTitle2, gameImg2, gameImgAlt2, littleDescrip2, gamePrice2)   
}; 


*/

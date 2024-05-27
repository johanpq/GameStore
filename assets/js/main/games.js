const endPoint = "http://127.0.0.1:8000/games/";

function getGames() {
    return fetch(endPoint)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok!");
        }
        return response.json();
    })
    .catch(error => {
        console.log(error);
    });
}

async function showGames() {
    try {
        const games = await getGames();    
        createFreeGame(games);
        console.log(games); 
    }
    catch (error) {
        console.log(error);
    }
}

const main = document.querySelector('main');

const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');

main.appendChild(mainContainer);

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
    const gameImg0 = "assets/images/slider/elden-ring-2k-wallpaper.jpg";
    const gameImgAlt0 = "Elden Ring";
    const littleDescrip0 = "Epic RPG adventure";
    const gamePrice0 = "R$ 00";

    const gameTitle1 = "League of Legends";
    const gameImg1 = "assets/images/slider/lol-evelyn.jpg";
    const gameImgAlt1 = "League of Legends";
    const littleDescrip1 = "Intense MOBA battles";
    const gamePrice1 = "R$ 00";

    const gameTitle2 = "Counter Strike 2";
    const gameImg2 = "assets/images/slider/counter-strike-2-game-2k-wallpaper-uhdpaper.com-222@1@k.jpg";
    const gameImgAlt2 = "Counter Strike 2";
    const littleDescrip2 = "Tactical online shooter";
    const gamePrice2 = "R$ 00";

    CreateGames(testemunhalContainer, gameTitle0, gameImg0, gameImgAlt0, littleDescrip0, gamePrice0);
    CreateGames(testemunhalContainer, gameTitle1, gameImg1, gameImgAlt1, littleDescrip1, gamePrice1);
    CreateGames(testemunhalContainer, gameTitle2, gameImg2, gameImgAlt2, littleDescrip2, gamePrice2);
/*     games.map((game) => {
        CreateGames(testemunhalContainer)
    }) */ 
};

function CreateGames(testemunhalContainer, gameTitle, imgSrc, imgAlt, littleDescrip, gamePrice) {
    const gameCard = document.createElement('div');
    gameCard.classList.add('container-cards');

    const img = document.createElement('img');
    img.setAttribute('src', imgSrc);
    img.setAttribute('alt', imgAlt);

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = gameTitle;

    const littleDescription = document.createElement('div');
    littleDescription.classList.add('little-descrip');
    littleDescription.textContent = littleDescrip;

    const price = document.createElement('div');
    price.classList.add('price');
    price.textContent = gamePrice;

    gameCard.appendChild(img);
    gameCard.appendChild(title);
    gameCard.appendChild(littleDescription);
    gameCard.appendChild(price);

    testemunhalContainer.appendChild(gameCard);
}

/* createFreeGame(); */
showGames();   
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
        createPopularPaidGames(games); 
        console.log(games); 
    } catch (error) {
        console.log(error);
    }
}

const main = document.querySelector('main');

const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');

main.appendChild(mainContainer);

const createPopularPaidGames = (games) => {
    const h3Title = "Popular Games";

    const testemunhal = document.createElement('div');
    testemunhal.classList.add('testemunhal');

    const h3 = document.createElement('h3');
    h3.textContent = h3Title;

    const testemunhalContainer = document.createElement('div');
    testemunhalContainer.classList.add('testemunhal-container');

    testemunhal.appendChild(h3);
    testemunhal.appendChild(testemunhalContainer);
    mainContainer.appendChild(testemunhal);

    games.map((game) => {
        CreateGames(testemunhalContainer, game.id, game.title, game.image, game.title, game.little_description, game.price);
    });
}

function CreateGames(testemunhalContainer, gameId, gameTitle, imgSrc, imgAlt, littleDescrip, gamePrice) {
    const linkSell = document.createElement('a');
    linkSell.setAttribute('target', '_self');
    linkSell.classList.add('linkSell');

    const gameCard = document.createElement('div');
    gameCard.setAttribute('id', gameId);
    gameCard.classList.add('container-cards'); 

    const img = document.createElement('img');
    img.setAttribute('src', imgSrc);
    img.setAttribute('alt', imgAlt);

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = gameTitle;

    const descripAndPrice = document.createElement('div');
    descripAndPrice.classList.add('descrip-and-price');

    const littleDescription = document.createElement('div');
    littleDescription.classList.add('little-descrip');
    littleDescription.textContent = littleDescrip;

    const price = document.createElement('div');
    price.classList.add('price');
    price.textContent = " R$ " + gamePrice;

    linkSell.addEventListener('click', () => {
        const sellPageUrl = `assets/pages/sell.html?id=${gameId}`;
        window.location.href = sellPageUrl; // Redirecionando para a página de venda
    });
    

    testemunhalContainer.appendChild(linkSell); 
    linkSell.appendChild(gameCard);
    gameCard.appendChild(img);
    gameCard.appendChild(title);
    gameCard.appendChild(descripAndPrice);
    descripAndPrice.appendChild(littleDescription);
    descripAndPrice.appendChild(price);
}

showGames(); 

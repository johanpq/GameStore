function getIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

async function fetchGameByIdCart(id) {
    const response = await fetch(`http://127.0.0.1:8000/game/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

async function showGameOnCartPage() {
    const id = getIdFromUrl();
    if (id) {
        try {
            console.log(`Fetching data for game ID: ${id}`);
            const game = await fetchGameByIdCart(id);
            displayGameOnCart(game);
        } catch (error) {
            console.error('Failed to fetch game:', error);
        }
    } else {
        console.error("ID not found in URL");
    }
}

function displayGameOnCart(game) {
    const container = document.querySelector('.testemunhal-container');

    const containerCartGameCards = document.createElement('div');
    containerCartGameCards.classList.add('container-cards');

    const imgCart = document.createElement('img');
    imgCart.setAttribute('src', game.image);
    imgCart.setAttribute('alt', game.title);

    const titleCartGame = document.createElement('div');
    titleCartGame.classList.add('title');
    titleCartGame.textContent = game.title;

    const littleDescriptionCartGame = document.createElement('div');
    littleDescriptionCartGame.classList.add('little-descrip');
    littleDescriptionCartGame.textContent = game.little_description;

    const priceCartGame = document.createElement('div');
    priceCartGame.classList.add('price');
    priceCartGame.textContent = "R$ " + game.price;

    const descripAndPrice = document.createElement('div');
    descripAndPrice.classList.add('descrip-and-price');
    descripAndPrice.appendChild(littleDescriptionCartGame);
    descripAndPrice.appendChild(priceCartGame);

    const buttonBuy = document.createElement('button');
    buttonBuy.classList.add('buy-btn');
    buttonBuy.textContent = 'Buy';

    const buttonRemove = document.createElement('button');
    buttonRemove.classList.add('remove-btn');
    buttonRemove.textContent = 'Remove from the cart';

    containerCartGameCards.appendChild(imgCart);
    containerCartGameCards.appendChild(titleCartGame);
    containerCartGameCards.appendChild(descripAndPrice);
    containerCartGameCards.appendChild(buttonBuy);
    containerCartGameCards.appendChild(buttonRemove);

    container.appendChild(containerCartGameCards);
}

document.addEventListener('DOMContentLoaded', showGameOnCartPage);

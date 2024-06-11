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
            displayGameDetails(game, id);
        } catch (error) {
            console.error('Failed to fetch game:', error);
        }
    } else {
        console.error('No ID found in URL');
    }
}

function displayGameDetails(game, id) {
    const imgGame = document.createElement('img');
    imgGame.setAttribute('src', game.image);
    imgGame.setAttribute('alt', game.title);

    document.getElementById('sellGameTitle').innerText = game.title;
    
    document.getElementById('game-image').appendChild(imgGame); 

    document.getElementById('price-game').innerHTML = " R$ " + game.price;

    document.getElementById('description').innerHTML = game.description;

    document.getElementById('cart-link').addEventListener('click', () => {
        const cartPageUrl = `../pages/cart.html?id=${id}`;
        window.location.href = cartPageUrl; // Redirecting to the cart page
    });
} 

document.addEventListener('DOMContentLoaded', showGameDetails);
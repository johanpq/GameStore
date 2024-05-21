const endPoint = "http://127.0.0.1:8000/games/";

function getGames() {
    return fetch(endPoint)
    .then(response => {
        if(!response.ok) {
            throw new Error("Network reponse was not ok!");
        }
        return response.json();
    })
    .catch(error => {
        console.log(error);
    }) 
}

async function showGames() {
    try {
        const games = await getGames();

        games.forEach((element) => {
            console.log(element.title);
        })
        /* console.log(games); */ 
    }
    catch(error) {
        console.log(error);
    }
}

showGames();
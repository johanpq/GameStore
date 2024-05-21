const endPoint = "http://127.0.0.1:8000/games/";

fetch(endPoint)
    .then(response => {
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("Error with the fetch operation");
    })
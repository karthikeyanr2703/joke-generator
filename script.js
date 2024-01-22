let jokeText = document.getElementById('joke');
let btn = document.getElementById('btn');
document.addEventListener("DOMContentLoaded", getJoke)


btn.addEventListener('click',getJoke);
function getJoke() {
    fetch("https://icanhazdadjoke.com/",{
        headers:{
            "Accept": "application/json"

        }
    }).then(data => data.json())
    .then(obj => jokeText.innerHTML = obj.joke)
}
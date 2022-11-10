const url = `https://api.tvmaze.com/shows`
const input = document.getElementById("show-name")

// document.addEventListener('DOMContentLoaded', () => {
//     loadShows()

//     listform.addEventListener("submit", listform)
// })

// function loadShows() {
//     fetch(url)
//     .then(response => response.json())
//     .then(data => data)
// }

// function listform(e) {
//     e.preventDefault()

//     const showList = document.getElementById("show-name")
//     const li = document.createElement("li")
//     li.textContent = showList

// }

// const showList = document.querySelector("#create-show-list")

document.addEventListener("DOMContentLoaded", () => {

    fetch(url)
    .then(res => res.json())
    .then(shows => {
        const names = shows.map(show => show.name).join("\n");
        input.innerHTML = names
    })
    // showList.addEventListener("submit", submitShow)
});

// function submitShow(e) {
//    e.preventDefault()

//     // const newShow = document.getElementById("show-name").value
//     // const li = document.createElement("li")
//     // li.textContent = newShow
// // }
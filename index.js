const init = () => {
const url = `https://api.tvmaze.com/shows`
const input = document.getElementById("show-name")
const inputForm = document.querySelector('form')

inputForm.addEventListener('submit', (e) => {
    e.preventDefault()


    fetch(url)
    .then(res => res.json())
    .then(shows => {
        
        const names = shows.map(show => show.name).join("\n");
        input.innerHTML = names
        })
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
   // showList.addEventListener("submit", submitShow)
    })
}


document.addEventListener("DOMContentLoaded", init) 
// function submitShow(e) {
//    e.preventDefault()

//     // const newShow = document.getElementById("show-name").value
//     // const li = document.createElement("li")
//     // li.textContent = newShow
// // }
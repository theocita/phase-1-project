
const init = () => {

const inputForm = document.querySelector('form')

inputForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.querySelector("#new-show-name")
  
    fetch(`https://api.tvmaze.com/shows/${input.value}`)
    console.log("input", input.value)
    .then(res => res.json())
    .then(shows => {

        // const name = document.querySelector('show-name')
        // name.innerText = name.title
    

        // const showList = document.getElementById("show-name")
        // const li = document.createElement("li")
        // li.textContent = showList      

        const names = shows.map(show => show.name).join("");
        input.innerHTML = names
     })

    })
}


document.addEventListener("DOMContentLoaded", init) 
// function submitShow(e) {
//    e.preventDefault()

//     // const newShow = document.getElementById("show-name").value
//     // const li = document.createElement("li")
//     // li.textContent = newShow
// // }
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

//     

// }

// const showList = document.querySelector("#create-show-list")
   // showList.addEventListener("submit", submitShow)
 
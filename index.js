
const init = () => {

const inputForm = document.querySelector('form')

    inputForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const input = document.querySelector("#new-show-name")
  
        fetch(`https://api.tvmaze.com/shows/${input.value}`)
        .then(res => res.json())
        .then(data => {
            const name = document.querySelector("#show-name")     
            name.innerText = data.name
        })

    })
}

document.addEventListener("DOMContentLoaded", init) 
 
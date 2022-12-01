
const init = () => {

const inputForm = document.querySelector('form')

    inputForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const input = document.querySelector("#new-show-name")
        const li = document.createElement("li")
        const deleteButton = document.createElement("button")
        deleteButton.textContent = "X"

        deleteButton.addEventListener("click", () => li.remove)
        li.append(deleteButton)
        showname.appendChild(li)
        inputForm.reset()
  
        fetch(`https://api.tvmaze.com/shows/${input.value}`)
        .then(res => res.json())
        .then(data => {
            const name = document.querySelector("#showname")     
            name.innerText = data.name
        })

    })
}

document.addEventListener("DOMContentLoaded", init) 
 
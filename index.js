
const init = () => {

const inputForm = document.querySelector('#create-show-list')

    inputForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const input = document.querySelector("#new-show-name")
        // handletoDo(e.target.new_show_name.value)
       
  
        fetch(`https://api.tvmaze.com/shows/${input.value}`)
        .then(res => res.json())
        .then(data => {
            const li = document.createElement("li")   
            li.innerText = data.name

            const deleteButton = document.createElement("button")
            document.querySelector("#list").appendChild(li)
            deleteButton.addEventListener("click", handleDelete)
            deleteButton.textContent = "X"
            li.appendChild(deleteButton)
            
            
           
            // li.append(deleteButton) 
            // showname.appendChild(li)
            // inputForm.reset()
        }) 
         
    })
}

document.addEventListener("DOMContentLoaded", init) 
 
function handleDelete(e){
    e.target.parentNode.remove()
}
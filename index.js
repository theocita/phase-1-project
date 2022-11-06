const url = 'https://api.tvmaze.com'

document.addEventListener('DOMContentLoaded', () => {
    loadAnimes()
})

function loadAnimes() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}
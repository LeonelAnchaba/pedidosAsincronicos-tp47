
window.onload = function(){
const form = document.getElementById("formulario");
const agregar = document.getElementById("createButton");
  const editar = document.getElementById("editButton")

// Aqui debemos agregar nuestro fetch

agregar.addEventListener("click", function(e) {
    console.log("llegamos al evento para agregar la peli")

    const movie = {
        title: document.querySelector('#title').value,
        rating: document.querySelector('#rating').value,
        awards: document.querySelector('#awards').value,
        release_date: document.querySelector('#release_date').value,
        length: document.querySelector('#length').value,
    };

    fetch('http://localhost:3031/api/movies/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log("Que me responde la segunda promesa?: ", data);
    })
    
 })


editar.addEventListener("click", function (e) {
    console.log("en evento: ", window.location.pathname.match(/\d+$/)[0])
    console.log("hiciste click en editar", e)
    const id = window.location.pathname.match(/\d+$/)[0]

    const movieEdit = {
        title: document.querySelector('#title').value,
        rating: document.querySelector('#rating').value,
        awards: document.querySelector('#awards').value,
        release_date: document.querySelector('#release_date').value,
        length: document.querySelector('#length').value,
    };

    fetch(`http://localhost:3031/api/movies/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movieEdit)
    }).then(response => {
        return response.json()
    }).then(data =>{
        console.log("que es data", data)
    })

})


}

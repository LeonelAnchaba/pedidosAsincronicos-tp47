
const indexController = {
    home: (req,res) => {
        res.render("home.ejs")
    },
    form: (req,res) => {
        res.render("formulario.ejs")
    },
    create: (req, res) => {
        res.render("home.ejs")
    },
    detail: (req, res) => {
        const id = req.params.id
        fetch(`http://localhost:3031/api/movies/${id}`)
        .then(response => {
            return response.json()
        })
        .then(pelicula =>{
            // const date = pelicula.data.release_data

            res.render("formulario.ejs", {pelicula})
            
        })

      
    }
}

module.exports = indexController;
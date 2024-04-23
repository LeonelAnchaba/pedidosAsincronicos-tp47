
const indexController = {
    home: (req,res) => {
        res.render("home.ejs")
    },
    form: (req,res) => {
        res.render("formulario.ejs")
    },
    create: (req, res) => {
        res.render("home.ejs")
    }
}

module.exports = indexController;
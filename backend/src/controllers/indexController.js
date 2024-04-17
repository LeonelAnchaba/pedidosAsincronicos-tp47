const path = require("path");

const indexController = {
    home: (req,res) => {
        res.sendFile(path.join(__dirname,"../../../frontend/views/home.html"));
    },
    form: (req,res) => {
        res.sendFile(path.join(__dirname,"../../../frontend/views/formulario.html"))
    }
}

module.exports = indexController;
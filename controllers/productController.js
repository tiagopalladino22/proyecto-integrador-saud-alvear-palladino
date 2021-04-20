const productos = require("../data/productos")

module.exports = {

    producto: (req, res) => {
        let idProduct = req.params.id
        let miId = productos.porId(idProduct)
        console.log(miId)
        if (miId.length > 0){
            res.render("producto", {miId})
        }

    },

}
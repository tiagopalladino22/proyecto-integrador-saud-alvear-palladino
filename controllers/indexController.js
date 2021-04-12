module.exports = {

    principal: (req, res) => {
        
        return res.render("index")

    },

    login: (req, res) => {

        return res.render("login")
    },

    register: (req, res) => {

        return res.render("register")
    },
    
    perfil: (req, res) => {

        return res.render("perfil")
    },

    editar: (req, res) => {

        return res.render("perfilEditar")

    },
    
    
}
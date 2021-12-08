const userController ={
    register: (req, res) => {
        res.render('register', { title: "Login" })
    },
    login: (req, res) => {
        res.render('login', { title: "Registro" })
    },
}

module.exports = userController
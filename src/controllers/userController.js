const userController ={
    register: (req, res) => {
        res.render('register', { title: "Registro" })
    },
    login: (req, res) => {
        res.render('login', { title: "Login" })
    },
}

module.exports = userController
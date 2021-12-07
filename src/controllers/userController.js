const userController ={
    register: (req, res) => {
        res.render('register')
    },
    login: (req, res) => {
        res.send('login')
    },

}
module.exports= userController
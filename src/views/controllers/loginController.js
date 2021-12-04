const path = require('path')

const loginController ={
    login: (req, res) => {
        res.sendFile(path.join(__dirname,'../login.html'))
    }
}

module.exports = loginController
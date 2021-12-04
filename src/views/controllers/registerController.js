const path = require('path')

const registerController ={
    register: (req, res) => {
        res.sendFile(path.join(__dirname,'../register.html'))
    }
}

module.exports = registerController
const path = require('path')

const mainControllers ={
    index: (req, res) => {
        res.sendFile(path.join(__dirname ,'../index.html'))
    }
}

module.exports = mainControllers
const path = require('path')

const mainControllers ={
    index: (req, res) => {
        res.sendFile(path.join(__dirname ,'../views/index.html'))
    }
}

module.exports = mainControllers
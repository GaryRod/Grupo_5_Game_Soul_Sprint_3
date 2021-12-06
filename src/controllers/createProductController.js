const path = require('path')

const createProductController ={
    createProduct: (req, res) => {
        res.sendFile(path.join(__dirname,'../views/createProduct.html'))
    }
}

module.exports = createProductController
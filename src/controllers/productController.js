const productController = {
    index: (req, res) => {
        res.render('index')
    },
    createProduct: (req, res) => {
        res.render('createProduct')
    },
    productCart: (req, res) => {
        res.render('productCart')
    },
    productDetail: (req, res) => {
        res.render('productDetail')
    },
    editProduct: (req, res) => {
        res.render('editProduct')
    }
}

module.exports = productController
const productController = {
    index: (req, res) => {
        res.render('index')
    },
    createProduct: (req, res) => {
        res.render('createProudct')
    },
    
    productCart: (req, res) => {
        res.render('productCart')
    },
    productDetail: (req, res) => {
        res.render('productDetail')
    }


}
module.exports = productController
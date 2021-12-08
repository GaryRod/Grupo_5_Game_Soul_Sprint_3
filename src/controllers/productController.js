const productController = {
    index: (req, res) => {
        res.render('index', { title: "Home" })
    },
    createProduct: (req, res) => {
        res.render('createProudct', {title: "Crear Producto" })
    },
    productCart: (req, res) => {
        res.render('productCart', {title: "Carrito"})
    },
    productDetail: (req, res) => {
        res.render('productDetail', {title: "Detalles"})
    }
}

module.exports = productController
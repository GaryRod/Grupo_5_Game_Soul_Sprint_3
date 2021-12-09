const productController = {
    index: (req, res) => {
        res.render('index', { title: "Home" })
    },
    createProduct: (req, res) => {
        res.render('createProduct', {title: "Crear Producto" })
    },
    productCart: (req, res) => {
        res.render('productCart', {title: "Carrito"})
    },
    productDetail: (req, res) => {
        res.render('productDetail', {title: "Detalles"})
    },
    editProduct: (req, res) => {
        res.render('editProduct', {title: "Editar producto"})
    }
}

module.exports = productController
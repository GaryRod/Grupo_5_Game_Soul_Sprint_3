const express = require("express");
const app = express();
const productsRoutes = require('./routes/productsRoutes')
const userRoutes = require('./routes/userRoutes')
const path = require('path')


app.use(express.static('public'));
app.set('view engine','ejs')
app.set("views", path.resolve(__dirname, "./views"))






app.use('/',productsRoutes)
app.use('/productDetail',productsRoutes)
app.use('/productCart',productsRoutes)
app.use('/register',userRoutes)
app.use('/login',userRoutes)

app.listen(process.env.PORT || 3000, () => { 
    console.log("Servidor funcionando")
    });

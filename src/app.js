const express = require("express");
const app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () => { 
console.log("Servidor funcionando")
});

const mainRoutes = require('./routes/mainRoutes')

app.use('/',mainRoutes)
app.use('/login',mainRoutes)
app.use('/productCart',mainRoutes)
app.use('/register',mainRoutes)
app.use('/productDetail',mainRoutes)
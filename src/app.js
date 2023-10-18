const express = require('express')
const PORT = process.env.PORT || 3005;
const app = express()
const path = require('node:path')

const mainRouter = require('./router/mainRouter')


//Middlewares
app.use(express.static("public"));


// Configura EJS como motor de plantillas
app.set('view engine', 'ejs'); // Esto configura EJS como motor de plantillas

// Ruta de las vistas
app.set('views', path.join(__dirname, 'views'));

app.listen(PORT , console.log(`El servidos esta corriento http://localhost:${PORT}`))


app.use('/' , mainRouter)
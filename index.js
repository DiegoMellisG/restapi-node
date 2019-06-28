const express = require("express");
const app = express();

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const bookRoutes = require('./routes/BookRoutes.js');

const url = "34.74.215.17"
const port = "80" 


//Conexion a la base de datos

mongoose.connect(`mongodb://${url}:${port}/books`,{ useNewUrlParser: true })
app.use(bodyParser.urlencoded({
   extended: true
}));

app.use(bodyParser.json());

app.use('/books', bookRoutes)

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

module.exports = app;
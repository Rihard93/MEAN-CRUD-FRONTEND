//Librerias, Controladores
const express = require("express"); //Libreria para poder hacer uso del framework express.js
const bodyParser = require("body-parser"); //Libreria para poder hacer un parse de la informacion ingresada en los formularios
const {mongoose} = require('./db.js'); //Archivo de conexion a la base de datos
const app = express(); // Aplicacion de express.js

//Middleware que se encargara de almancenar toda la informacion que se ingrese al sitio.
app.use(bodyParser.json());

//Se establece el puerto en donde se iniciara el sitio web.
app.listen(3000);
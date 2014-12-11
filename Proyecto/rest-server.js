#!/usr/bin/nodejs

var fs = require('fs');
var express=require('express');
var app = express();
var listin = new Array;


/*
    Funcion GET sin parametros. Devuelve la pagina web.
 */
app.get('/', function (req, res) {   
	var response = fs.readFileSync("index.html");
    res.contentType("text/html; charset=iso-8859-15");
    res.send(response);
});


/*
    Funcion PUT para insertar una nueva entrada a la 'base de datos'.
    Antes de realizar la insercion se comprueba si la clave ya existia.
 */
app.put('/:tlf/:nombre', function( req,res ) {
    if (listin[req.params.tlf] == undefined){
        listin[req.params.tlf] = req.params.nombre;
        res.send("\nTelefono " + req.params.tlf + " (con propietario " + listin[req.params.tlf] + ") guardado correctamente\n\n");
    }else{
        res.send("\nError: El numero de telefono " + req.params.tlf + " ya existe\n\n");
    }
});


/*
    Funcion GET para consultar el propietario de un numero de telefono.
    Se comprueba que el numero de telefono exista en la 'base de datos'.
 */
app.get('/:tlf', function (req, res) {
    if (listin[req.params.tlf] != undefined){
        res.send("\nEl numero de telefono " + req.params.tlf + " pertenece a " + listin[req.params.tlf] + "\n\n");
    }else{
        res.send("\nError: El numero de telefono " + req.params.tlf + " no existe\n\n");
    }
});


/*
    Funcion POST para modificar los datos del propetario de un telefono.
    Antes de intentar modificar los datos se comprueba que el numero de telefono exista.
 */
app.post('/:tlf/:nombre', function (req, res) {
    if (listin[req.params.tlf] != undefined){
        listin[req.params.tlf] = req.params.nombre;
        res.send("\nEl nuevo propietario del telefono " + req.params.tlf + " es " + listin[req.params.tlf] + "\n\n");
    }else{
        res.send("\nError: El numero de telefono " + req.params.tlf + " no existe\n\n");
    }
});


app.listen(8088);
console.log('Server running at http://127.0.0.1:8088/');

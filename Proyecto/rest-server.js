#!/usr/bin/node

var fs = require('fs');
var express=require('express');
var app = express();
app.set('port', process.env.PORT || 8088);
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
app.put('/:nombre/:tlf', function( req,res ) {
    if (listin[req.params.nombre] == undefined){
		listin[req.params.nombre] = req.params.tlf;
		res.send('Almacenado el telefono de '+ req.params.nombre );
    }else{
        res.send("\nError: " + req.params.nombre + " ya tiene un telefono asociado\n\n");
    }
});


/*
    Funcion GET para consultar el numero de telefono.
    Se comprueba que la persona exista en la 'base de datos'.
 */
app.get('/:nombre', function (req, res) {
    if (listin[req.params.nombre] != undefined){
		res.send("{" + req.params.nombre + ": " + listin[req.params.nombre] + "}\n");
    }else{
        res.send("\nError: No existe registro telefonico para " + req.params.nombre + "\n\n");
    }
});


/*
    Funcion POST para modificar el telefono de una persona.
    Antes de intentar modificar los datos se comprueba que la persona exista.
 */
app.post('/:nombre/:tlf', function (req, res) {
    if (listin[req.params.nombre] != undefined){
        listin[req.params.nombre] = req.params.tlf;
        res.send("{" + req.params.nombre + ": " + listin[req.params.nombre] + "}\n");
    }else{
        res.send("\nError: No existe registro telefonico para " + req.params.nombre + "\n\n");
    }
});


app.listen(app.get('port'));
console.log('Server running at http://127.0.0.1:8088/');


#!/usr/bin/nodejs

var http=require('http');
var visitas=0;
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    var split_url=req.url.split("/");
    if ( split_url[1] == '' ) {
	    visitas++;
    }
	res.end('Numero de visitas ' + visitas);
}).listen(8088, '127.0.0.1');
console.log('Servidor ejecutándose en http://127.0.0.1:8088/');


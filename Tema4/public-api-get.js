#!/usr/bin/nodejs

var http = require('http');

var options = {
    host: 'api.open-notify.org',
    path: '/iss-now.json',
    method: 'GET',
    headers: {'User-Agent': 'Example-Rest'}
};

var req = http.get(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (datos_JSON) {
	//console.log(datos_JSON);
	var datos=JSON.parse(datos_JSON);
	console.log('\nLa posicion actual de la ISS (International Spacial Station) es: \n\tLongitud: ' + datos.iss_position.longitude + "\n\tLatitud: " + datos.iss_position.latitude + "\n");
    });
});
req.end();

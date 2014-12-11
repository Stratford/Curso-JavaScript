#!/usr/bin/nodejs

var rest = require('restler');
var url = 'http://127.0.0.1:8088/';

if (process.argv[2] == 'GET' && process.argv.length == 4){    // Llamada GET
    rest.get(url + process.argv[3]).on('complete', function(result){
        console.log(result);
    });
}else if (process.argv[2] == 'PUT' && process.argv.length == 5){    // Llamada PUT
    rest.put(url + process.argv[3] + "/" + process.argv[4]).on('complete', function(result){
        console.log(result);
    });
}else if (process.argv[2] == 'POST' && process.argv.length == 5){   // Llamada POST
    rest.post(url + process.argv[3] + "/" + process.argv[4]).on('complete', function(result){
        console.log(result);
    });
}else{  // Si no cumplimos ningun caso anterior, mostramos mensaje de uso del programa
    console.log("\nPara ejecutar el cliente debe usar uno de estos tres metodos:\n\tConsultar propietario del telefono: \'./rest-client.js GET {num telefono}\'\n\tInsertar telefono y propietario: \'./rest-client.js PUT {num telefono} {nombre}\'\n\tModificar propietario del telefono: \'./rest-client.js POST {num telefono} {nombre}\'\n");
}


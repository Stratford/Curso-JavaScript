#!/usr/bin/nodejs

var rest = require('restler');
var url = 'http://127.0.0.1:8080/contador/';
process.argv.forEach(function (val, index, array) {
    if ( index > 1 ) {
	rest.put( url + val ).on('complete', function( data ) {
	    console.log( data );
	} );
    }
});

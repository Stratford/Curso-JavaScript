var max = 50;
var fibonacci = new Object();

// Calculo de la sucesion con 'max' numeros
for (i = 1; i <= max; i++){
	if (i == 1 || i == 2){
		fibonacci["Fibonacci"+i] = 1;
	}else{
		fibonacci["Fibonacci"+i] = fibonacci["Fibonacci"+(i-1)] + fibonacci["Fibonacci"+(i-2)];
	}
}

// Visualizacion de la sucesion calculada
for (j in fibonacci){
	document.writeln("<b>" + j + ":</b> " + fibonacci[j] + "<br>");
}

var max = parseInt(window.location.search.split("=")[1]);	// Obtenemos el numero de iteraciones
var fibonacci = new Object();

fibonacci = fibonacci_calculate(fibonacci, max);
print_succession(fibonacci);


// ======================== Subrutinas ========================
// Calculo de la sucesion con 'n' numeros
function fibonacci_calculate(obj, n){
	for (i = 1; i <= n; i++){
		if (i == 1 || i == 2){
			obj["Fibonacci"+i] = 1;
		}else{
			obj["Fibonacci"+i] = obj["Fibonacci"+(i-1)] + obj["Fibonacci"+(i-2)];
		}
	}
	
	return obj;
}

// Visualizacion de la sucesion calculada
function print_succession(succession){
	for (j in succession){
		document.writeln("<b>" + j + ":</b> " + succession[j] + "<br>");
	}
}

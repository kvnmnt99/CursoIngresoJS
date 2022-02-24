/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

	var dividendo;
	var divisor;
	var operacion;
	var resto;
	var mensaje;

	dividendo = document.getElementById('txtIdNumeroDividendo').value;
	divisor = document.getElementById('txtIdNumeroDivisor').value;

	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);

	operacion = dividendo / divisor;

	resto = dividendo % divisor;

	mensaje = "La división da: " + Math.floor(operacion) + " y el resto es: " + resto;

	alert(mensaje);
}
// txtIdNumeroDividendo

// txtIdNumeroDivisor
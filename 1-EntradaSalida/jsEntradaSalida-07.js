/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var cp1;
	var cp2;
	var resultado;
	var mensaje;

	cp1 = document.getElementById('txtIdNumeroUno').value;
	cp2 = document.getElementById('txtIdNumeroDos').value;

	cp1 = parseInt(cp1);
	cp2 = parseInt(cp2);

	resultado = cp1 + cp2; 

	mensaje = "La suma es " + resultado;
	alert(mensaje);	
}

function restar()
{
	var cp1;
	var cp2;
	var resultado;
	var mensaje;

	cp1 = document.getElementById('txtIdNumeroUno').value;
	cp2 = document.getElementById('txtIdNumeroDos').value;

	cp1 = parseInt(cp1);
	cp2 = parseInt(cp2);

	resultado = cp1 - cp2; 

	mensaje = "La resta es " + resultado;

	alert(mensaje);
}

function multiplicar()
{ 
	var cp1;
	var cp2;
	var resultado;
	var mensaje;

	cp1 = document.getElementById('txtIdNumeroUno').value;
	cp2 = document.getElementById('txtIdNumeroDos').value;

	cp1 = parseInt(cp1);
	cp2 = parseInt(cp2);

	resultado = cp1 * cp2; 

	mensaje = "La multiplicacion es " + resultado;
	alert(mensaje);
}

function dividir()
{
	var cp1;
	var cp2;
	var resultado;
	var mensaje;

	cp1 = document.getElementById('txtIdNumeroUno').value;
	cp2 = document.getElementById('txtIdNumeroDos').value;

	cp1 = parseInt(cp1);
	cp2 = parseInt(cp2);

	resultado = cp1 / cp2; 

	mensaje = "La division es " + resultado;
	alert(mensaje);
}


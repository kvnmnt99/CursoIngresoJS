/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var pruno;
	var prdos;
	var prtres;
	var suma;
	var mensaje;

	pruno = document.getElementById('txtIdPrecioUno').value;
	prdos = document.getElementById('txtIdPrecioDos').value; 
	prtres = document.getElementById('txtIdPrecioTres').value; 

	pruno = parseInt(pruno);
	prdos = parseInt(prdos);
	prtres = parseInt(prtres);

	suma = pruno + prdos + prtres;

	mensaje = "La suma de los tres productos da: " + suma;

	alert(mensaje);


	
}
function Promedio () 
{

	var pruno;
	var prdos;
	var prtres;
	var suma;
	var promedio;
	var mensaje;

	pruno = document.getElementById('txtIdPrecioUno').value;
	prdos = document.getElementById('txtIdPrecioDos').value; 
	prtres = document.getElementById('txtIdPrecioTres').value; 

	pruno = parseInt(pruno);
	prdos = parseInt(prdos);
	prtres = parseInt(prtres);

	suma = pruno + prdos + prtres;

	promedio = suma / 3;

	mensaje = "El promedio es " + promedio;

	alert(mensaje);
	
}
function PrecioFinal () 
{
	

	var pruno;
	var prdos;
	var prtres;
	var suma;
	var mensaje;
	var iva;
	var precioFin;

	pruno = document.getElementById('txtIdPrecioUno').value;
	prdos = document.getElementById('txtIdPrecioDos').value; 
	prtres = document.getElementById('txtIdPrecioTres').value; 

	pruno = parseInt(pruno);
	prdos = parseInt(prdos);
	prtres = parseInt(prtres);

	suma = pruno + prdos + prtres;

	iva = suma * 0.21;

	precioFin = iva + suma;

	mensaje = "El precio final es : " + precioFin;

	alert(mensaje);


}

/* txtIdPrecioUno

txtIdPrecioDos

txtIdPrecioTres*/
/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var porcentaje;
	var totaldescuento;

	importe = document.getElementById('txtIdImporte').value;

	porcentaje = 0.25;

	importe = parseInt(importe);

	totaldescuento = importe - (importe*porcentaje);

	document.getElementById('txtIdResultado').value = totaldescuento;
}
 /*
	importe = 2000

	//primera forma

	porcentaje = importe * 0.25;

	total = importe - porcentaje;

	//segunda forma

	porcentaje = importe * 25/100

	total = importe - porcentaje;

	//tercera forma}

	total = importe - (importe * 0.25);

	//cuarte forma

	total = importe * 0.75;
	alert("ok");
*/

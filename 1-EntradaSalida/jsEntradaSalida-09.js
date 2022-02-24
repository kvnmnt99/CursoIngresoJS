/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe;
	var porcentaje;
	var total;

	importe = document.getElementById('txtIdSueldo').value;
	importe = parseInt(importe);

	porcentaje = importe * 0.1;

	total = importe + porcentaje;

	document.getElementById('txtIdResultado').value = total;

}
/*
	//primera forma

	porcentaje = importe * 0.1;

	total = importe + porcentaje;

	//segunda forma

	porcentaje = importe * 10/100

	total = importe + porcentaje;

	//tercera forma}

	total = importe + (importe * 0.1);

	//cuarte forma

	total = importe * 1.1;
	alert("ok");*/

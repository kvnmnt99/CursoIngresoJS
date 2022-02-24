function mostrar()
{

	var edadIngresada;
	var estadoCiv;
	var mensaje;

	mensaje = "";
	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);
	estadoCiv = document.getElementById('estadoCivil').value;

	if (edadIngresada <18 && estadoCiv != "Soltero" ) {

	mensaje = "Es muy pequeño para NO ser soltero.";

	}

alert(mensaje);


}//FIN DE LA FUNCIÓN

//txtIdEdad
//
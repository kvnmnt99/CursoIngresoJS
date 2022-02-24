function mostrar()
{

	var edadIng;
	var mensaje;

	edadIng = document.getElementById('txtIdEdad').value;
	edadIng = parseInt(edadIng);

	if (edadIng > 17) {

		mensaje="Usted es mayor de edad";
		
	}
	else {
		mensaje="Usted es menor de edad";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
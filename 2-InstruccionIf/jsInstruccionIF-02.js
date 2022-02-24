function mostrar()
{
	var edadIng;
	var mensaje;

	mensaje = "";
	edadIng = document.getElementById('txtIdEdad').value;
	edadIng = parseInt(edadIng);


	if (edadIng > 17) {

		mensaje = "Usted es mayor de edad";
		
	}

	alert(mensaje);
	
	

}//FIN DE LA FUNCIÓN
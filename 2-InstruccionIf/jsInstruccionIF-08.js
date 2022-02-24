function mostrar()
{
	var edad;
	var estadoCiv;
	var mensaje;

	mensaje = "";
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);
	estadoCiv = document.getElementById('estadoCivil').value;
	

	if (edad >17 && estadoCiv == "Soltero") {

		mensaje = "Es soltero y no es menor."

	}

	alert(mensaje);
//txtIdEdad
//estadoCivil

}//FIN DE LA FUNCIÓN
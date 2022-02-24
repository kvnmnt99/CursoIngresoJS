
/*al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días" */

function mostrar()
{

	var edad;
	var mensaje;

	mensaje = ""

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad == 15) 
	{
		mensaje = "niña bonita";
	}

	alert(mensaje);

	//tomo la edad  

}//FIN DE LA FUNCIÓN
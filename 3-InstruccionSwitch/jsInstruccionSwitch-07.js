function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var mensaje;

	switch(destinoIngresado)
	{
		case "Bariloche":
		mensaje = "Oeste";
		break;

		case "Ushuaia":
		mensaje = "Sur";
		break;

		case "Mar del plata":
		mensaje = "Este";
		break;

		default:
		mensaje = "Norte";
		break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN
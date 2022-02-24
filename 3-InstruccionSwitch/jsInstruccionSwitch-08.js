function mostrar()
{
	

	var destinoIngresado =txtIdDestino.value;
	var mensaje;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
		mensaje = "Hace frio";
		break;

		default:
		mensaje = "Hace calor";
		break;
		
	}
	alert(mensaje);
	



}//FIN DE LA FUNCIÓN
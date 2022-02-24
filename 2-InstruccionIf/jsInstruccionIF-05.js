
	function mostrar()
{
	var edadIngresada;
	var mensaje;

	mensaje = "";
	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);
	
	if (edadIngresada <13 || edadIngresada >17) 
	{
		mensaje = "Usted no es adolescente";
	}
	//tomo la edad  
	alert(mensaje);


}
//FIN DE LA FUNCIÓN
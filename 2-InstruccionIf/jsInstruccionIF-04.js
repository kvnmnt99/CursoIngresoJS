function mostrar()
{
	var edadIngresada;
	var mensaje;

	mensaje = "";
	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);
	
	if (edadIngresada >12 && edadIngresada <18) 
	{
		mensaje = "Usted es adolescente";
	}
	//tomo la edad  
	alert(mensaje);


}//FIN DE LA FUNCIÓN
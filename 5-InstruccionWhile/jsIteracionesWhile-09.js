/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var respuesta;
	var banderaPrimerIngreso;
	var maximo;
	var minimo;

	respuesta = true;
	banderaPrimerIngreso = false;

	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un numero ");
		numeroIngresado = parseInt(numeroIngresado);

		if (banderaPrimerIngreso == false) 
		{
			maximo = numeroIngresado;
			minimo = numeroIngresado;
			banderaPrimerIngreso = true;
		}
		else
		{
			if (numeroIngresado >maximo) 
			{
				maximo = numeroIngresado;
			}
			if (numeroIngresado <minimo) 
			{
				minimo = numeroIngresado;
			}
		}


		respuesta = confirm("Desea ingresar otro numero?")
	}
	txtIdMaximo.value = maximo;
	txtIdMinimo.value = minimo;
}//FIN DE LA FUNCIÓN
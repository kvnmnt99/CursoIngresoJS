/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;

	respuesta = "si";

	while(respuesta=="si")
	{

		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

	

		if (numeroIngresado<0) 
		{
			multiplicacionNegativos = numeroIngresado*numeroIngresado;
		}
		else
		{
			sumaPositivos = numeroIngresado++:
		}
	}




	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN
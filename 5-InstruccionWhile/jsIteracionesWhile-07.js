/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numeroIngresado;
	var respuesta;
	var suma;
	var promedio;
	var contador;

	respuesta = "si";
	suma = 0;
	contador = 0;

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero")
		numeroIngresado = parseInt(numeroIngresado);

		while(numeroIngresado >100 || numeroIngresado<100)
		{
			numeroIngresado = prompt("Reingrese numero");
			numeroIngresado = parseInt(numeroIngresado);
		}
		/*para validar el numero*/

		suma += numeroIngresado; //suma = suma + numeroIngresado;

		contador++;

		respuesta = prompt("¿Desea ingresar otro mumero?"); 
		// se puede cambiar por un confirm, la diferencia es: 
		//no espera que ponga texto, mestra dos botones; 
		//habria que cambiar la respuesta por un "true" en vez de "si" (reduce los chances de error)
	}

	promedio = suma/contador;


	txtIdSuma.value=suma;
	txtIdPromedio.value=promedio;

}//FIN DE LA FUNCIÓN
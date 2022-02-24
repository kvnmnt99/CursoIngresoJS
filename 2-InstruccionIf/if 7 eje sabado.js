function mostrar()
{
	
var edadIng;
var estCivil;
var mensaje;
var nombreIngresado;

nombreIngresado = prompt("Ingrese su nombre");
edadIng = document.getElementById('txtIdEdad').value;
edadIng = parseInt(edadIng);
estCivil = document.getElementById('estadoCivil').value;

if (edadIng <13) 
{
	mensaje = "Feliz Dia";

	if (nombreIngresado == "Ricardo") 
		{
			mensaje += " (muy chiquito para ese nombre)";
		}
	}
else 
{
	if (edadIng >12) 
	{	
		if (edadIng <18) {

			mensaje = "Usted es adolescente";
			if (edadIng == 17) 
			{
				mensaje += " (ultimo año)";
			}
			if (nombreIngresado == "Violeta"); 
			{
				mensaje += " como un color";
			}
			if (estCivil == "Divorciado"); 
			{
				mensaje += " toda una vida por delante";
			}	
		}
		
		if (estCivil == "Casado")
		{
			mensaje += " casada quiere casa";
		} 
			

		
	}
	else 
	{
		mensaje = "Tenes edad de laburar";

			if (edadIng == 33) 
			{
				mensaje += ", como cristo";
			}
			else 
			{
				if (edadIng > 60) 
				{
					mensaje += ", a jubilarse";

					if (nombreIngresado == "Alfredo") 
					{
						mensaje += " (como el de QUEEN)"
					}
				}
				else {
					if (edadIng == 88) 
					{
						mensaje += ", lindo numero";
					}
				}
			}
			if (estCivil == "Soltero" && edadIng <60) 
			{
				mensaje += " a salir"
			}
		
	}
}
if (edadIng%2 == 0) 
{
	mensaje += " (Sos numero par)";
}

alert(mensaje);

}
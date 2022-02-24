/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var ingresoGrados;
    var conversionGrados;
    var mensaje;
   
   ingresoGrados = document.getElementById('txtIdTemperatura').value;
   ingresoGrados = parseInt(ingresoGrados);
   conversionGrados = (ingresoGrados-32) * 5/9;
   
   mensaje = ingresoGrados +" grados Fahrenheit son " + conversionGrados.toFixed(2) + " grados Centigrados";

   alert(mensaje);
}

function CentigradosFahrenheit () 
{
	var ingresoGrados;
    var conversionGrados;
    var mensaje;
   
   ingresoGrados = document.getElementById('txtIdTemperatura').value;
   ingresoGrados = parseInt(ingresoGrados);
   conversionGrados = ingresoGrados * 9/5 +32;
   
   mensaje = ingresoGrados +" grados Centigrados son " + conversionGrados.toFixed(2) + " grados Fahrenheit"; 
 
   alert(mensaje);
}
//txtIdTemperatura
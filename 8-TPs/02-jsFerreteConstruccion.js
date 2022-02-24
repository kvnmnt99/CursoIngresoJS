/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var ancho;
	var largo;
	var cantidadAlambre;
	var perimetro;
	var mensaje;

	ancho = document.getElementById('txtIdAncho').value;
	largo = document.getElementById('txtIdLargo').value;

	ancho = parseInt(ancho);
	largo = parseInt(largo);

	perimetro = ancho * 2 + largo * 2;
	cantidadAlambre = perimetro * 3;

	mensaje = "Usted necesita comprar " + cantidadAlambre + " mts. de alambre";

	alert(mensaje);
}
function Circulo () 
{
	var radio;
	var perimetro;
	var alambre;
	var mensaje;

	radio = document.getElementById('txtIdRadio').value;

	radio = parseInt(radio);

	perimetro = radio * Math.PI * 2;
	alambre = perimetro*3;
	mensaje = "Usted necesita comprar " + alambre.toFixed(2) + " mts. de alambre";
	alert(mensaje);
}
function Materiales () 
{
	var ancho;
	var largo;
	var matcem;
	var matcal;
	var resultado;

	ancho = document.getElementById('txtIdAncho').value;
	largo = document.getElementById('txtIdLargo').value;

	ancho = parseInt(ancho);
	largo = parseInt(largo);

	matcem = (ancho * largo)*2;
	matcal = (ancho * largo)*3;

	resultado = ("Usted necesita comprar "+ matcem +" sacos de cemento y "+ matcal +" sacos de cal");
	alert(resultado);


}
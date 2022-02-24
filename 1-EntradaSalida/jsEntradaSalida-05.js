/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;

	nombre = txtIdNombre.value;
	edad = txtIdEdad.value;


//otro metodo: 
 //var nombreIngresado
//var edadIngresada

//nombreIngresado = document.getElementById('txtIdNombre').value;
//edadIngresada = document.getElementById('txtIdEdad').value;

	alert( "Usted se llama" + " " + nombre + " " + "y tiene" + " " + edad + " " + "años" );
}


// Conviene hacer alert( "Usted se llama " + nombre + " y tiene " + edad + " años" );



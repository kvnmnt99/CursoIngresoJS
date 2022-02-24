/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var adduno;
	var adddos;
	var resultado;

	adduno = document.getElementById('txtIdNumeroUno').value;
	adddos = document.getElementById('txtIdNumeroDos').value;
	resultado = parseInt(adduno) + parseInt(adddos); 
 	alert(resultado);
}
/*
    **METODO CORRECTO**
    var adduno;
	var adddos;
	var resultado;

	adduno = document.getElementById('txtIdNumeroUno').value;
	adddos = document.getElementById('txtIdNumeroDos').value;

	adduno = parseInt(adduno);
	adddos = parseInt(adddos);
	
	resultado = adduno + adddos;
	alert(resultado);*/
//txtIdNumeroUno
//txtIdNumeroDos
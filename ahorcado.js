var boton = document.querySelector("#iniciar-juego");
boton.addEventListener("click", iniciarJuego);

var boton_insertar = document.querySelector("#nueva-palabra");
boton_insertar.addEventListener("click", agregarPalabra);

var array_incorrectas = [];
var array_correctas= [];
//var intentos= 0;
var partida = true;

function dibujarLetra (palabra, letra){
	
	if(!array_correctas.includes(letra)){
		x= 412;
		var compara = false;
		for(var i = 0; i < palabra.length; i++){

			if(letra == palabra[i]){
				compara=true;
				pincel.font = "30px Coming Soon, Arial";
				pincel.fillText(palabra[i], x, 495);
				array_correctas.push(letra);
			}
			x = x + 30;
		}

		if(!compara){
			letraIncorrecta(letra,intentos);
		}
		
		if(array_correctas.length == palabra.length) {

			gano(palabra);
			return partida=false;
		}
		x=412;
	}	
}
function letraIncorrecta(letra,partida){
	
	
	if(!array_incorrectas.includes(letra)){
		
		dibujarHorca();	
		array_incorrectas.push(letra);
		

	if(array_incorrectas.length==9){

		perdio(palabra);
		return partida= false;
	}else{

		for(var i = 0; i < array_incorrectas.length; i++){
		
			x= 410 +(30*i);
			pincel.font = "30px Coming Soon, Arial";
			pincel.fillText(array_incorrectas[i], x, 250);
		}
		return;
	}
	}
	return;
}

function agregarPalabra(){
	var input = document.querySelector("#input-nueva-palabra");
	var palabra_agregada = input.value.trim().toUpperCase();
	var expresion = /[A-Z]/;
	var expresion2 = /[0-9]/;
	var comparacion = palabra_agregada.match(expresion);
	var comparacion2 = palabra_agregada.match(expresion2);
	
	if ((comparacion == null) || (comparacion2 != null)) {

		noAceptaPalabra();
		return;
						
	}else{
				
		arrayPalabras.push(palabra_agregada);
		
		siAceptaPalabra();
		
		setTimeout(function(){
    		limpiarSpan();
		}, 3000);
		input.value="";
		return;
	}	
}

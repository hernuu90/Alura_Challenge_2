var mensaje = document.querySelector("#eti-span");

function perdio(palabra){
		pincel.fillStyle = "red";
		pincel.font = "30px Coming Soon, Arial";
		pincel.fillText("USTED HA PERDIDO ", 370, 320);
		pincel.fillText(" EL JUEGO", 430, 350);
		pincel.fillStyle = "black";
		pincel.fillText("LA PALABRA ERA: " + palabra, 370, 385);
		return;
}

function gano(palabra){
		pincel.fillStyle = "green";
		pincel.font = "30px Coming Soon, Arial";
		pincel.fillText("USTED HA GANADO..!! ", 370, 320);
		pincel.fillText(" EL JUEGO", 430, 350);
		pincel.fillStyle = "black";
		pincel.fillText("LA PALABRA ERA: " + palabra, 370, 385);
		return;
}

function noAceptaPalabra(){
	mensaje.classList.remove("aceptada");
	mensaje.classList.add("no-aceptada");
	mensaje.innerHTML="Palabra introducida no es válida, solo se permiten letras mayúsculas";
}

function siAceptaPalabra(){
	mensaje.classList.add("aceptada");
	mensaje.innerHTML="Palabra agregada a la lista";
}

function limpiarSpan(){
	mensaje.innerHTML="";
}
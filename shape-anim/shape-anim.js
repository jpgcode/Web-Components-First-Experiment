//Registramos nuestro custom element
document.registerElement('shape-anim');

var shapeAnim = function(){
	//Creamos el shadow DOM
	var shadow = document.querySelector('shape-anim').createShadowRoot();

	//Sacamos el owner del script para obtener el template del lugar adecuado
	var owner = (document._currentScript || document.currentScript).ownerDocument;

	//Obtenemos el template
	var template = owner.querySelector("#template").content.cloneNode(true);

	//Insertamos el teamplate en el shadow DOM
	shadow.appendChild(template);
}

shapeAnim();
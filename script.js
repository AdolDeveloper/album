/*!
Swaying photo gallery - scroll event
Created on AUGUST 29, 2023
Copyright (c) 2023 by Wakana Y.K. (https://codepen.io/wakana-k/pen/WNLrWMm)
*/
/*
Related works : 
Portforio design @wakana-k - https://codepen.io/wakana-k/pen/BaxKKvE
Swaying photo gallery - hover event @wakana-k - https://codepen.io/wakana-k/pen/oNJxbPw
*/
"use strict";
(function () {
	window.onload = () => {
		const obj = document.querySelector("#gallery");
		const time = 10000;
		function animStart() {
			if (obj.classList.contains("active") == false) {
				obj.classList.add("active");
				setTimeout(() => {
					animEnd();
				}, time);
			}
		}
		function animEnd() {
			obj.classList.remove("active");
			obj.offsetWidth;
		}
		document.addEventListener("scroll", function () {
			// scroll or scrollend
			animStart();
		});
		window.addEventListener("resize", animStart);
		animStart();
	};
})();

document.addEventListener("DOMContentLoaded", function() {
	// Fecha de referencia
	var fechaReferencia = new Date('2022-10-30'); 
  
	// Fecha actual
	var fechaActual = new Date();
  
	// Calcular la diferencia en milisegundos
	var diferenciaMilisegundos = fechaActual - fechaReferencia;
  
	// Convertir la diferencia a días
	var diasTranscurridos = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
  
	// Mostrar el resultado en el div con id "contador"
	var resultadoDiv = document.getElementById('contador');
	resultadoDiv.textContent = diasTranscurridos;
  });
  
  document.addEventListener("DOMContentLoaded", function () {
	var lampContainer = document.getElementById("lampContainer");
	var content = document.getElementById("content");
  
	// Guardar el color de fondo original del body
	var originalBackgroundColor = document.body.style.backgroundColor;
  
	// Guardar el fondo original del body
	var originalBackgroundImage = document.body.style.backgroundImage;
  
	// Cambiar el color de fondo y quitar la imagen de fondo del body
	document.body.style.backgroundColor = "#4e4e4e";
	document.body.style.backgroundImage = "none";
  
	var isLampOn = false;
  
	  if (isLampOn) {
		// Apagar la lámpara y ocultar el contenido
		lampContainer.style.animation = "lampOff 1s forwards";
		content.classList.add("hidden");
  
		// Restaurar el color de fondo y la imagen de fondo originales del body después de apagar la lámpara
		setTimeout(function () {
		  document.body.style.backgroundColor = originalBackgroundColor || "";
		  document.body.style.backgroundImage = originalBackgroundImage || "";
		}, 1000);
  
		isLampOn = false;
	  } else {
		// Encender la lámpara y mostrar el contenido después de 3 segundos
		lampContainer.style.animation = "lamp 3s forwards";
  
		// Cambiar el color de fondo y quitar la imagen de fondo del body
		document.body.style.backgroundColor = "#4e4e4e";
		document.body.style.backgroundImage = "none";
  
		// Mostrar el contenido después de 3 segundos
		setTimeout(function () {
		  content.classList.remove("hidden");
		  document.body.style.backgroundColor = originalBackgroundColor || "";
		  document.body.style.backgroundImage = originalBackgroundImage || "";
		}, 1770);
  
		isLampOn = true;
	  }

	  lampClickArea.addEventListener("click", function () {
		if (isLampOn) {

			content.classList.add("hidden");
	  
			// Cambiar el color de fondo y quitar la imagen de fondo del body
			document.body.style.backgroundColor = "#4e4e4e";
			document.body.style.backgroundImage = "none";
			let bulbElement = document.querySelector(".bulb");
			console.log(bulbElement);


			// Cambiar fill a transparente
			bulbElement.style.fill = "transparent";
			isLampOn = false;
		  } else {
	  
			content.classList.remove("hidden");
			document.body.style.backgroundColor = originalBackgroundColor || "";
			document.body.style.backgroundImage = originalBackgroundImage || "";

			isLampOn = true;
		  }
	  });
  });
  
  
  
  
  
  
  
  
  
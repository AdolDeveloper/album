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
  
  function alternarLuces() {
	var luces = document.getElementById('luces');
	luces.classList.toggle('apagado');
  }
  
/* ==============================
REGLAS PARA NOMBRAR IDENTIFICADORES
============================== */
/* Los signos de ($) (y) _ son nombres validos pero no son comunes usarlo*/

/* Signo de dólar
Suele ser usado como un alias para la 
función principal de selección HTML
En jQuery <code style="color:red;">$
("p");</code> significa "seleccionar todos los elementos p".</p>*/
var $$$ = "Hola mundo";
var $ = 2;
var $miDinero = 5;
document.getElementById("demo-01").innerHTML = $ + $miDinero;

/* Guión bajo
Es usado como un alias para las variables "privadas (ocultas)".*/
var _x = 2;
var _100 = 5;
document.getElementById("demo-02").innerHTML = _x + _100;

/*
var _apellido = "Moreno";
var _x = 2;
var _100 = 5;
document.getElementById("demo-14").innerHTML = _x + _100;
*/

/* ==============
IDENTIFICADORES
=============== */
/* JavaScript distingue entre mayúsculas y minúsculas */
var lastname, lastName;
lastName = "Moreno";
lastname = "Villanueva";
document.getElementById("demo-03").innerHTML = lastName;
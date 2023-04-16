/* ======================
Declaración de variables
====================== */
/* ¿Cómo declarar variables?
Con la palabra reservada var 
declaramos una variable (variable x), 
y con el signo igual le asignamos un 
valor (x = 5)*/

var x; // Declare Variables
x = 5; // Asignar valores
document.getElementById("demo-01").innerHTML = x;

/* ==================================
Declaración en una o en varias líneas
================================== */
/* Una línea
Se permiten declarar muchas variables en una sóla línea con sólo una palabra clave "Var" si estan separados por punto y coma, o coma solámente. */

var persona = "Pepe", carro = "Derby", precio = 200;
document.getElementById("demo-02").innerHTML = carro;

//Otro ejemplo
/*
var a, b, c;
a = 1; b = 2; c = a + b;
console.log(c);
*/

// Varias líneas					
var persona = "Pepe",
carro = "Derby",
precio = 200;
document.getElementById("demo-03").innerHTML = persona;

/* ======================
Volver a declarar variables
====================== */
/*La variable nombreUniversidad sigue teniendo en cuenta el valor de la primera declaración.*/
var nombreUniversidad = "UNAM";
var nombreUniversidad;
document.getElementById("demo-04").innerHTML = nombreUniversidad;
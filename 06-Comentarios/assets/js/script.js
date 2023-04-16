/*COMENTARIOS DE UNA SOLA LÍNEA
En los siguientes ejemplos se utiliza comentarios de 
una sola línea, antes y después de cada línea de 
código.*/

// Cambiar encabezado:
document.getElementById("myH1").innerHTML = "Mi primer título.";
// Cambiar párrafo:
document.getElementById("myP1").innerHTML = "Mi primer párrafo.";

var x = 5; // Declara x, dale el valor de 5
var y = x + 2; // Declara y, dale el valor de x + 2
document.getElementById("demo-1").innerHTML = y;

//============================================

/* COMENTARIOS DE VARIAS LÍNEAS
El código siguiente cambiará el encabezado con id = "myH2" y el párrafo con id = "myP2"*/
document.getElementById("myH2").innerHTML = "Mi primer título.";
document.getElementById("myP2").innerHTML = "Mi primer párrafo.";

//============================================

//USO DE COMENTARIOS PARA EVITAR LA EJECUCIÓN

//Comentario de una sóla línea que evita la ejecución
//document.getElementById("myH3").innerHTML = "Mi primer título.";
document.getElementById("myP3").innerHTML = "Mi primer párrafo.";

/*Comentario multilínea que evita la ejecución*/
/* document.getElementById("myH4").innerHTML = "Otro título";
document.getElementById("myP4").innerHTML = "Otro párrafo.";*/
document.getElementById("myH4").innerHTML = "Mi primer título.";
document.getElementById("myP4").innerHTML = "Mi primer párrafo";




/* ===================
Operador de suma
=================== */
/*Asignar valores a las variables y sumarlos*/  
var b = 5; // asignar el valor 5 a x
var c = 2; // asignar el valor 2 a y
var d = b + c; // sumar los valores de x + y y asignar el resultado a z 
document.getElementById("demo-01").innerHTML = d; // muestra z
				
/* =======================
Operador de multiplicación
======================= */				
var e = 5;
var f = 2;
var g = e * f; // multiplicar los valores de x y y
document.getElementById("demo-02").innerHTML = g;


/* ===================
Operador de asignación
=================== */ 
var a = 10; // asignar el valor 10 a x
document.getElementById("demo-03").innerHTML = a;

	
/* =================
Operadores de cadena
================== */	
// El operador (+) se usa para concatenar cadenas.
var txt1 = "José";
var txt2 = "Luis";
//var txt3 = txt1 + " " + txt2;
document.getElementById("demo-04").innerHTML = txt1 + " " + txt2;
/*document.getElementById("demo-five").innerHTML = txt3;*/

/*El operador (+=) también se usa para concatenar cadenas.*/ 
txt1 = "Que día ";
txt1 += "tan lindo";
document.getElementById("demo-05").innerHTML = txt1;

/* =====================
Sumar cadenas con números
===================== */
/*Sumar una cadena y un número devuelve una cadena.*/
var k = "Hola " + 5;
document.getElementById("demo-06").innerHTML = k;


/* Número entre comillas al inicio.
Si pone un número entre comillas al inicio, el resto de los números se interpretaran como textos y se concatenarán.*/
f = "5" + 5 + 5;
document.getElementById("demo-07").innerHTML = f;

/* Número entre comillas al final
Si pone un número entre comillas al final, no afectará la suma de los primeros números.*/
var g = 5 + 5 + "5";
document.getElementById("demo-08").innerHTML = g;
		

	
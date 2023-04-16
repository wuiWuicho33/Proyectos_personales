/* =============
VALORES
==============*/
/* Existen dos tipos de valores; los fijos tambien llamados literales (números y cadenas) y las variables.
Los números se pueden escribir con o sin decimales, y las cadenas van entre comillas*/

document.getElementById("demo-01").innerHTML = 10.50;

document.getElementById("demo-02").innerHTML = 'Mario';
document.getElementById("demo-03").innerHTML = "Mario";

/* ============= 
EXPRESIONES
==============*/
/*Una expresión es una combinación de 
valores, variables y operadores, que 
se calcula en un valor.
El cálculo se llama evaluación
Por ejemplo, 5 * 10 se evalúa como 50
*/
document.getElementById("demo-04").innerHTML = 5 * 10;

/*Las expresiones pueden contener valores literales (valor con números) y variables.*/

// Valor con literales (números)
var x;
x = 5;
document.getElementById("demo-05").innerHTML = x * 10;
// Valor con cadenas
/*Por ejemplo, "Pepe" + "" + "Wuicho", se evalúa como "Pepe Wuicho":*/
document.getElementById("demo-06").innerHTML = "Pepe" + " " + "Wuicho";
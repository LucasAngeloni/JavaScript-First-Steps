/*******************************
 * Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
 */

let x,y,suma;

x = 3;
y = 4;
suma = x + y;

console.log('x + y = ' + suma);

/*******************************
 * Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
 */

let s1, s2, concat;

s1 = 'Hola ';
s2 = 'Universo';

concat = s1 + s2;
console.log('Cadenas concatenadas: ' + concat);

/*******************************
 * Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado 
 * de la suma en una 3er variable (utilizar length).
 */

let s3, s4, largo;

s3 = 'Harry';
s4 = 'Potter';

largo = s3.length + s4.length;
console.log('La suma del largo de las cadenas es: '+largo);
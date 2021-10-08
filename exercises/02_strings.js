/*******************************
 * Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
 */

let string = 'Soy todo corazón';
console.log('Texto en mayuscula: ' + string.toUpperCase())

/*******************************
 * Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando 
 * el resultado en una nueva variable (utilizar substring).
 */

let cadena, subcadena;

cadena = 'PlayStation';
subcadena = cadena.substring(0,5);

console.log(subcadena);

/*******************************
* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando 
* el resultado en una nueva variable (utilizar substring).
*/

let cadena2, subcadena2;

cadena2 = 'PlayStation';
subcadena2 = cadena2.substring(cadena2.length-3);
 
console.log(subcadena2);

/*******************************
*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y 
las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
*/

let cadena3, subcadena3;

cadena3 = 'hola Mundo!';
subcadena3 = cadena3.substring(0,1).toUpperCase() + cadena3.substring(1).toLowerCase();

console.log(subcadena3);

/*******************************
 *Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del 
 primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/

let cadena4, primerEspacioBlanco;

cadena4 = 'Hola Mundo';
primerEspacioBlanco = cadena4.indexOf(' ');

console.log('El primer espacio en blanco se encuentra en: ' + primerEspacioBlanco);

/*******************************
*Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/

let cadena5, nuevaCadena, posEspacioEnBlanco;

cadena5 = 'microoNdas electriCo';
posEspacioEnBlanco = cadena5.indexOf(' ');

let palabra1, palabra2;
palabra1 = cadena5.substring(0,posEspacioEnBlanco);
palabra2 = cadena5.substring(posEspacioEnBlanco+1);

nuevaCadena = palabra1.substring(0,1).toUpperCase() + palabra1.substring(1).toLowerCase();
nuevaCadena += ' ';
nuevaCadena += palabra2.substring(0,1).toUpperCase() + palabra2.substring(1).toLowerCase();

console.log(nuevaCadena);
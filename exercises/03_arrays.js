/*******************************
*Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
*/

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('Month 5: '+meses[4]+'\nMes 11: '+meses[10]);

/*******************************
*Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*/

let mesesOrdenados = meses.sort();
console.log('Months sorted alphabetically: ' + mesesOrdenados);

/*******************************
*Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/

let precios = [20, 63, 105, 1000];

precios.unshift(10);
precios.push(500);
console.log('Add elements: ' + precios);

/*******************************
*Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/

let pesos = [20, 63, 105, 1000];

pesos.shift();
pesos.pop();
console.log('Remove elements: ' + pesos);

/*******************************
*Invertir el orden del array (utilizar reverse).
*/

let preciosInvertidos = precios.reverse();
console.log('Array inversed: ' + preciosInvertidos);

/*******************************
*Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
*/

meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let mesesGuion = meses.join(' - ');
console.log(mesesGuion);

/*******************************
*Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/

let mesesMayoANoviembre = meses.slice(4,11);
console.log('May - November: ' + mesesMayoANoviembre);
/*******************************
*Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado 
en una variable, mostrando el valor de dicha variable en la consola del navegador.
*/

function suma(x, y){
    return x + y;
}

let s = suma(50,7);
console.log(s);

/*******************************
*A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, 
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
*/

function nSuma(x, y){
    if(typeof x != 'number' || typeof y != 'number'){
        alert('The values must be numbers');
        return NaN;
    }
    return x + y;
}

/*******************************
*Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
*/

function validateInteger(num){
    let r = Math.trunc(num);
    if(r === num) return true;
    else return false;
}

console.log(validateInteger(5.6));

/*******************************
*A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
*/

function nSuma(x,y){
    if(typeof x != 'number' || typeof y != 'number'){
        alert('The values must be numbers');
        return NaN;
    }
    else if(!validateInteger(x)){
        alert('The values must be integers, num = '+x+" can be "+Math.round(x));
        return Math.round(x);
    }
    else if(!validateInteger(y)){
        alert('The values must be integers, num = '+y+" can be "+Math.round(y));
        return Math.round(y);
    }
    else return x + y;
}

console.log(nSuma(50,6.6));

/*******************************
*Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la 
función suma probando que todo siga funcionando igual.
*/

function isNotANumber(num){
    if(typeof num != 'number') return true;
    else return false;
    
}

function nSuma(x,y){
    if(isNotANumber(x) || isNotANumber(y)){
        alert('The values must be numbers');
        return NaN;
    }
    return x + y;
}

console.log(nSuma('50',6));
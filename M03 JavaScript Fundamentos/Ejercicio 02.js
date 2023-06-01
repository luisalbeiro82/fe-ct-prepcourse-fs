/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string
}
//console.log(devolverString("Hola"));

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var resultado = x + y;
   return resultado;
}
//console.log(suma(5,3));

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var resultado = x - y;
   return resultado;
}
//console.log(resta(5,3));

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   var resultado
   if(y === 0){
      return "Error division por 0 ";
   }else{
      resultado = x / y;
   }
   return resultado;
}
//console.log(divide(10,0));

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   return  x * y;
}
//console.log(multiplica(10,3));

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   return  x % y;
}
//console.log(obtenerResto(10,3));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};

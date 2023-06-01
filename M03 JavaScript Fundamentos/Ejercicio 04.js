/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   return Math.pow(num,2);
}
   //console.log(elevarAlCuadrado(9));

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   return Math.pow(num,3);
}
   //console.log(elevarAlCubo(3));
function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   return Math.pow(num,exponent);
}
   //console.log(elevar(2,4));

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   return  Math.round(num);
}
  // console.log(redondearNumero(2.5));

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   //return  Math.round(num);
   return Math.ceil(num);
}
   //console.log(redondearHaciaArriba(2.7));
function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   return  Math.random();
}
   //console.log(numeroRandom());

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};

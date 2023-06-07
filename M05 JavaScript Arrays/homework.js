/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return  array[array.length-1];
}


function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   for(var i =0; i < array.length; i++){
      array[i] = array[i] + 1;
   }
   return array
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
   
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   /*
   var strPalabra="";
   for(var i = 0; i < palabras.length; i++){
      //strPalabra = strPalabra.concat(palabras[i]," ");
      strPalabra = strPalabra + ' ' + palabras[i];
   }
   return strPalabra;
   */
   return palabras.join(' ');
}
//console.log(dePalabrasAFrase(['Henry', 'JavaScript', 'Class']));
function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   for(var i = 0; i < array.length; i++){
      if(array[i] === elemento){
         return true;
      }
   }
   return false;
}
//console.log(arrayContiene([1,2,3,4,5,6],3));
function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma=0;
   for(var i = 0; i < arrayOfNums.length; i++){
      suma = suma + arrayOfNums[i];
   }
   return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let suma=0;
   let contador=0
   for(var i = 0; i < resultadosTest.length; i++){
      suma = suma + resultadosTest[i];
      contador ++;
   }
   return suma/contador;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   /*
   var mayor = 0; 
   for(i = 0; i < arrayOfNums.lenght; i++){
      if (arrayOfNums[i] > mayor) {
         mayor = arrayOfNums[i];
      };
   }
   return mayor;
   */
   
   var mayor = Math.max(...arrayOfNums);
   return mayor;

}
//console.log(numeroMasGrande([9,1,2,3,11,4,5,6,8]));
function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments[0] == undefined) return 0;
   let resultado = 1;
   for (let index = 0; index <= arguments.length - 1; index++) {
      resultado = resultado * arguments[index];
   }
   return resultado;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var nuevoArray = []; 
   cant=0;
   for(i = 0; i < array.length; i++){
      if (array[i] > 18) {
         nuevoArray.push(array[i]);
         cant=cant+1;
      }
   }
   //return nuevoArray;
   return cant;
}
//console.log(cuentoElementos([3,20,25,30,17,18,5,6,8]));
function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia===2 ||numeroDeDia===3 ||numeroDeDia===4 ||numeroDeDia===5 ||numeroDeDia===6 ){
      return "Es dia laboral";
   }else if(numeroDeDia===1 ||numeroDeDia===7){
      
      return "Es fin de semana";
   }
}
   //console.log(diaDeLaSemana(3))
function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
  
   // const  empiezaConNueve = (num) => num.toString()[0] === '9';
   // if(empiezaConNueve){
   //    return true;
   // }
   // return false

   const resp = num.toString(); 
   for(let i = 0; i < resp.length; i++){
      if(resp[i][0] === '9'){//aca verifico que solo valide el primer indice(corrijanme si estoy equivocado)
         return true;
      }else{
         return false;
      }
   }
}
//console.log(empiezaConNueve(625))
function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   const firstElement = array[0];  
   for (const elem of array) {
      if (elem !== firstElement) {
         return false; 
      }
   }
   return true
   
}
//console.log(todosIguales(3,3,3,3))

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let newArray = [];
   for(let i = 0 ; i < array.length; i++){
      if(array[i]==="Enero" || array[i]==="Marzo" || array[i]==="Noviembre" ){
         newArray.push(array[i]);
      }
   }
   if(newArray.length===3)
         return newArray;
   return "No se encontraron los meses pedidos";
}
//console.log(mesesDelAño(["Enero","Marzo","Noviembre"]))
function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let newArreglo=[];
   for(let i = 0; i <= 10; i++){
      newArreglo.push(6 * i);
   }
   return newArreglo;
}
//console.log(tablaDelSeis())
function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   

   let newArray = [];
   let long = array.length;
   for(let i =0; i < long; i++ ){
      if(array[i] > 100){
         newArray.push(array[i]);
      }
   }
   return newArray;
   //opcion 2
   //return array.filter((elemento) => elemento >100);
   
}
//console.log(mayorACien([100,101,125,180,50,11,20]))
/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};

// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  
  return nombre[0].toUpperCase() + nombre.slice(1);   
  
  // let primeraLetra = nombre [0].toUpperCase();
  // let restoNombre = nombre.slice(1); 
  // return primeraLetra + restoNombre;
  
  //pasó de las dos formas
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb (n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  
  // let suma = 0;
  // for (i=0; i<numeros.length; i++){
  //   suma = suma + numeros [i]
  // }
  // return cb (suma);

  let suma = numeros.reduce(function(acumulador, valorActual){
    return acumulador + valorActual
  })
  return cb (suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  // for (i=0; i<array.length; i++){
  //   cb (array[i]);
  // }

array.forEach(function(elemento, indice){
  cb (elemento)
});

// pasó de las dos formas con el bucle for y con el forEach
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  let nuevoArray = [];
   for (i=0; i<array.length; i++){
     nuevoArray.push(cb(array[i]))
   }
   return nuevoArray;

  //let nuevoArray = array.map (function) probar como hacerlo con .map
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  // let nuevoArray = [];
  // for (let i=0; i<array.length; i++){
  //   if (array [i][0] === 'a'){
  //     nuevoArray.push(array[i])
  //   }
  // }
  // return nuevoArray;

  let nuevoArray = [];
  for (key of array){
    if (key[0] === 'a'){
      nuevoArray.push(key)
    }
  }
  return nuevoArray;

  // pasó de las dos formas, con el bucle for convencional y con key
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};

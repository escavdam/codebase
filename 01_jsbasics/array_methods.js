const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach
// Itera sobre cada elemento de la lista
lista.forEach((element) => {
    console.log(element * 2);
});

// map
// Itera sobre cada elemento de la lista y retorna un nuevo array con los resultados

const nuevaLista = lista.map((element) => {
    return element * 2;
});
console.log(nuevaLista);
console.log(lista);

// filter
// Itera sobre cada elemento de la lista y retorna un nuevo array con los elementos que cumplan con la condición
const listaPares = lista.filter(element => element % 2 === 0);
console.log(listaPares);

// find
// Itera sobre cada elemento de la lista y retorna el primer elemento que cumpla con la condición
const primerNumeroMayorQue5 = lista.find(element => element > 5);
console.log(primerNumeroMayorQue5);

// reduce
// Itera sobre cada elemento de la lista junto a un acumulador y retorna un solo valor al final
const sumaLista = lista.reduce((acumulador, element) => {
    return acumulador + element;
}, 0);
console.log(sumaLista);

// some
// Itera sobre cada elemento de la lista y retorna true si al menos un elemento cumple con la condición
const hayNumeroMayorQue5 = lista.some(element => element > 5);

// every
// Itera sobre cada elemento de la lista y retorna true si todos los elementos cumplen con la condición
const todosSonMenoresQue11 = lista.every(element => element < 11);

// includes
// Itera sobre cada elemento de la lista y retorna true si el elemento existe en la lista
const contieneNumero5 = lista.includes(5);

// findIndex
// Itera sobre cada elemento de la lista y retorna el índice del primer elemento que cumpla con la condición
const indiceNumero5 = lista.findIndex(element => element === 5);

// indexOf
// Itera sobre cada elemento de la lista y retorna el índice del primer elemento que sea igual al valor especificado
const indiceNumero5_2 = lista.indexOf(5);

// lastIndexOf
// Itera sobre cada elemento de la lista y retorna el índice del último elemento que sea igual al valor especificado
const lista_aux = [5, 0, 0, 0, 5, 0, 0, 0, 5]
const indiceNumero5_3 = lista_aux.lastIndexOf(5);

// reverse
// Invierte el orden de los elementos de la lista
const listaInvertida = lista.reverse();

// join
// Convierte la lista en un string separado por el valor especificado
const listaString = lista.join(' - ');

// sort
// Ordena los elementos de la lista
// Si no se especifica una función de comparación, los elementos se convierten a strings y se ordenan alfabéticamente
// Si se especifica una función de comparación, los elementos se ordenan según el valor que retorne la función, donde un valor negativo indica que el primer elemento debe ir antes que el segundo, un valor positivo indica que el primer elemento debe ir después que el segundo y un valor 0 indica que los elementos son iguales
// Por ejemplo, para ordenar de menor a mayor: (a, b) => a - b
// Si tenemos un array como [3, 1, 5, 2, 4], el orden sería [1, 2, 3, 4, 5]

const listaDesordenada = [3, 1, 5, 2, 4];
const listaOrdenada0 = listaDesordenada.sort((a, b) => {
    if(a < b) return -1; // a va antes que b
    if(a > b) return 1; // a va después que b
    return 0; // a y b son iguales
})

const listaOrdenada1 = listaDesordenada.sort((a, b) => a - b);
const lista2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const listaOrdenada2 = lista2.sort((a, b)=>{
    if(a % 2 === 0 && b % 2 !== 0) return -1;
    if(a % 2 !== 0 && b % 2 === 0) return 1;
    return 0;
})

console.log(lista2)
console.log(listaOrdenada2)
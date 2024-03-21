// Crear
const array0 = []
const array1 = ["A", "B", "C"]
const array2 = new Array(3)
const array3 = new Array("A", "B", "C")
const array4 = Array.of("A", "B", "C")
const array5 = Array.from("ABC")

// Longitud
console.log(array1.length)

// Leer
console.log(array1[0]) // A
console.log(array1[1]) // B
console.log(array1[2]) // C
console.log(array1[3]) // undefined

// Escribir
console.log(array1[0]) // A
array1[0] = "X"
console.log(array1[0]) // X

// Añadir
array0.push(0)
array0.push(1)
array0.push(2)
console.log(array0) // [0, 1, 2]

// Extraer del final
const element = array0.pop()
console.log(element) // 2
console.log(array0) // [0, 1]

// Añadir al principio
array0.unshift(-1)
console.log(array0) // [-1, 0, 1]

// Extraer del principio
const element2 = array0.shift()
console.log(element2) // -1

// Añadir en medio
array0.splice(1, 0, "A")
console.log(array0) // [0, "A", 1]

// Extraer en medio
const removed = array0.splice(1, 1)
console.log(removed) // ["A"]

// Buscar
console.log(array1.indexOf("B")) // 1
console.log(array1.indexOf("X")) // -1

// Copiar
const copy = array1.slice()

// Invertir
console.log(array1.reverse())

// Ordenar
console.log(array1.sort())

// Desordenar
console.log(array1.sort(() => Math.random() - 0.5))

// Iterar
array1.forEach((element, index, array) => {
  console.log(element, index, array)
})

// Filtrar
const array6 = [0, 1, 2, 3, 4, 5]
const pares = array6.filter(element => element % 2 === 0)
console.log(pares) // [0, 2, 4]

// Mapear
const dobles = array6.map(element => element * 2)
console.log(dobles) // [0, 2, 4, 6, 8, 10]
console.log(array6) // [0, 1, 2, 3, 4, 5]

// Reducir
const suma = array6.reduce((acumulador, valor) => acumulador + valor, 0)
console.log(suma) // 15

// Comprobar si todos cumplen
const todos = array6.every(element => element < 10)
console.log(todos) // true

// Comprobar si alguno cumple
const alguno = array6.some(element => element > 4)
console.log(alguno) // true

// Convertir a string
console.log(array6.toString()) // "0,1,2,3,4,5"
console.log(array6.join()) // "0,1,2,3,4,5"
console.log(array6.join('')) // "012345"
console.log(array6.join(' ')) // "0 1 2 3 4 5"
console.log(array6.join('-')) // "0-1-2-3-4-5"


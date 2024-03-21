console.log("Bucle arbitrario")
for(let i = 0; i < 5; i++) {
    console.log(i)
}
console.log("\n")
console.log("Bucle arbitrario hacia atrás")
for(let i = 5; i >= 0; i--) {
    console.log(i)
}

console.log("\n")
console.log("Iterar array")

//Bucle para iterar un array
const array = [1, 2, 3, 4, 5]

for(let i = 0; i < array.length; i++) {
    console.log(array[i])
}

console.log("\n")
console.log("Iterar array hacia atras")

for(let i = array.length - 1; i >= 0; i--) {
    console.log(array[i])
}

console.log("\n")
console.log("Iterar array con for of")
for(let item of array) {
    console.log(item)
}

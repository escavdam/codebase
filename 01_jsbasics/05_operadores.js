// Operadores de asignación
const A = 5
const B = 2
let C = 0
C += A
C -= B
C *= A
C /= 2
console.log(C) // 7.5

// Operadores aritméticos
console.log(A + B) // 7
console.log(A - B) // 3
console.log(A * B) // 10
console.log(A / B) // 2.5
console.log(A % B) // 1
console.log(A ** B) // 25

// Operadores de comparación
console.log(A === B) // false
console.log(A !== B) // true
console.log(A < B) // false
console.log(A > B) // true
console.log(A <= B) // false
console.log(A >= B) // true

// Operadores lógicos
console.log(false && false) // false
console.log(false && true) // false
console.log(true && false) // false
console.log(true && true) // true
console.log(false || false) // false
console.log(false || true) // true
console.log(true || false) // true
console.log(true || true) // true
console.log(!false) // true
console.log(!true) // false

// Operadores de incremento y decremento
let D = 5
D++
console.log(D) // 6
D--
console.log(D) // 5
++D
console.log(D) // 6
--D
console.log(D) // 5

// Operadores de concatenación
const string1 = "Hola"
const string2 = "mundo"
console.log(string1 + " " + string2) // Hola mundo

// Operadores de tipo
console.log(typeof A) // number
console.log(typeof string1) // string
console.log(typeof true) // boolean
console.log(typeof {}) // object
console.log(typeof []) // object
console.log(typeof null) // object
console.log(typeof undefined) // undefined
console.log(typeof function() {}) // function
console.log(typeof NaN) // number
console.log(typeof Infinity) // number
console.log(typeof -Infinity) // number

// Operadores de igualdad
console.log(5 == "5") // true
console.log(5 === "5") // false
console.log(5 != "5") // false
console.log(5 !== "5") // true

// Operadores de desplazamiento
console.log(5 << 1) // 10
console.log(5 >> 1) // 2

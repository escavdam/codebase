// Crear
const object0 = {}
const object1 = { a: "un valor", b: 2, c: true }
const object2 = new Object()
const object3 = new Object({ a: "un valor", b: 2, c: true })

// Añadir
object0.nombre = "Juan"

// Leer
console.log(object0.nombre) // Juan
console.log(object1.a) // un valor

// Modificar
object0.nombre = "Pedro"

// Eliminar
delete object0.nombre

// Copiar
const copy = Object.assign({}, object1)
const copy2 = { ...object1 }

// Recorrer
for (const key in object1) {
  console.log(key, object1[key])
}

// Longitud
console.log(Object.keys(object1).length)
console.log(Object.values(object1).length)
console.log(Object.entries(object1).length)
console.log(Object.getOwnPropertyNames(object1).length)

// Comparar
const objA = { a: 1 }
const objB = { a: 1 }
console.log(objA === objA) // true
console.log(objA === objB) // false

// Comparar contenido
console.log(JSON.stringify(objA) === JSON.stringify(objB)) // true


// Crear
const mimapa0 = new Map()

mimapa0.set("a", "4")
mimapa0.set("A", "4")
mimapa0.set("e", "3")
mimapa0.set("E", "3")

const mystring = "Aeio"

let newstring = ""
mystring.split("").forEach((char) => {
    mimapa0.has(char) ? newstring += mimapa0.get(char) : newstring += char
});

//los maps son estructuras de datos que nos permiten almacenar pares de valores clave-valor
//similares a los objetos, pero con algunas diferencias:
//1. Los objetos tienen como clave un string o un símbolo, mientras que en los maps puede ser cualquier tipo de dato.

const mimapa1 = new Map()

mimapa1.set(true, "A")
mimapa1.set(1, "B")
mimapa1.set("1", "C")
mimapa1.set({}, "D")
mimapa1.set([], "E")

//2. Los maps tienen un tamaño que podemos obtener con el método size.
console.log(mimapa1.size)

//3. Los maps tienen métodos para añadir, eliminar y buscar elementos.
console.log(mimapa1.get(true))
console.log(mimapa1.has(true))
console.log(mimapa1.delete(true))
console.log(mimapa1.has(true))

//4. Los maps tienen un método clear para eliminar todos los elementos.
mimapa1.clear()
console.log(mimapa1.size)

//5. Los maps tienen un método forEach para recorrer todos los elementos.
mimapa0.forEach((value, key) => {
    console.log(key, value)
})


//6. Los maps tienen un método entries que nos devuelve un iterador con todos los pares clave-valor.

const iterador = mimapa0.entries()
console.log(iterador.next().value)

//7. Los maps tienen un método keys que nos devuelve un iterador con todas las claves.

const iterador2 = mimapa0.keys()
console.log(iterador2.next().value)

//8. Los maps tienen un método values que nos devuelve un iterador con todos los valores.

const iterador3 = mimapa0.values()
console.log(iterador3.next().value)


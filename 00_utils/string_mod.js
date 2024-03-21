const stringModificator = (str, cb) => {
    return str.split("").map(cb).join("")
}

const a = "hola mundo"
const b = (item) => item.repeat(2)

console.log(stringModificator(a, b)) 
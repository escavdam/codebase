const crearUsuario = () => {
    return {
        nombre: ["Pepe", "Juan", "Luis", "Ana", "Maria", "Lola", "Manuel", "Paco", "Luisa", "Rosa"][Math.floor(Math.random() * 10)],
        edad: Math.floor(Math.random() * 100),
        genero: ["hombre", "mujer", "otro"][Math.floor(Math.random() * 3)],
    }
}

const users = Array.from({ length: 200 }, crearUsuario);
const a = users.filter(user => user.edad > 30 && user.edad < 40);

console.log(a);
const now = new Date();
const date = now.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
const date_aux = date.charAt(0).toUpperCase() + date.slice(1)
const hour = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
console.log("//", date_aux, "//" , hour, "//") 
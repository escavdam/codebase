// Crear
const string1 = 'Hola';
const string2 = "mundo";
const string3 = `!`;

// Concatenar
const string4 = 'Hola, ' + 'mundo!';
const string5 = 'Hola, '.concat('mundo!');
const string6 = `${string1}, ${string2}`;

// Longitud
const string7 = string1.length;

// Mayúsculas y minúsculas
const string8 = string1.toUpperCase(); // 'HOLA'
const string9 = string8.toLowerCase(); // 'hola'

// Buscar
const string10 = "un texto cualquiera".indexOf('n'); // 1
const string11 = "un texto cualquiera".indexOf('texto'); // 3

// Extraer
const string12 = "un texto cualquiera a manipular".slice(3, 8); // 'texto'

// Reemplazar
const string13 = "un texto cualquiera".replace('texto', 'string'); // 'un string cualquiera'

// Separar en un array
const string14 = "un texto cualquiera".split(' '); // ['un', 'texto', 'cualquiera']

// Unir un array en un string
const string15 = ["un", "texto", "cualquiera"].join(' '); // 'un texto cualquiera'

// Eliminar espacios en blanco
const string16 = " un texto cualquiera ".trim(); // 'un texto cualquiera'

// Substring (extraer) ??
const string17 = "un texto cualquiera".substring(3, 8); // 'texto'

// Substr (extraer) ??
const string18 = "un texto cualquiera".substr(3, 5); // 'texto'

// Leer caracter
const string19 = "un texto cualquiera"[3]; // 't'
const string20 = "un texto cualquiera".charAt(3); // 't'

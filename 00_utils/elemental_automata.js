const fs = require('fs');

/**Algoritmo para generar un automata celular elemental
 * @namespace Automata Celular Elemental
 */

/**
 * Devuelve los vecinos de un caracter en un string
 * @param {string} string numero completo en binario 
 * @param {*} index posicion del caracter en el string
 * @returns {string} string con los vecinos del caracter
 * 
 * @memberof Automata Celular Elemental
 * 
 * @example
 * getNeighbors("101", 1) // "101"
 * getNeighbors("101", 0) // "001"
 * getNeighbors("101", 2) // "100"
 */
function getNeighbors(string, index){
    const array = string.split("");
    let izq, der, centro;
    centro = array[index]; // el valor del caracter en el centro
    index === 0 ? izq = "0" : izq = array[index-1]; // si estamos al principio del array, el vecino izquierdo es 0, sino, coge el valor del vecino izquierdo
    index === array.length-1 ? der = "0" : der = array[index+1]; // si estamos al final del array, el vecino derecho es 0, sino, coge el valor del vecino derecho
    return izq + centro + der;
}

/**
 * Convierte un numero a binario y rellena con 0s hasta que tenga 8 caracteres
 * @param {Number} num numero a convertir
 * @returns {string} numero convertido a binario
 * 
 * @memberof Automata Celular Elemental
 * 
 * @example
 * 
 * toBinary(30) // "00011110"
 */
function toBinary(num){
    //toString(2) convierte el numero usando base 2
    //padStart(8, "0") rellena el string con 0s hasta que tenga 8 caracteres
    return num.toString(2).padStart(8, "0");
}

/**
 * Crea los casos posibles según el valor de la regla
 * @param {*} rule numero de la regla, de 0 a 255 
 * @returns {Array} array con los diferentes casos de la regla y sus resultados
 * 
 * @memberof Automata Celular Elemental
 * 
 * @example
 * createCases(30) // [{input: "111", output: "0"}, {input: "110", output: "0"}, {input: "101", output: "0"}, {input: "100", output: "1"}, {input: "011", output: "1"}, {input: "010", output: "1"}, {input: "001", output: "1"}, {input: "000", output: "0"}]
 */
function createCases(rule){
    const binary = toBinary(rule); // convierte el numero a binario
    const reglas_inputs = [ // todos los posibles vecinos
        "111",
        "110",
        "101",
        "100",
        "011",
        "010",
        "001",
        "000"
    ]
    const reglas_outputs = binary.split(""); //los resultados de aplicar la regla
    const cases = [] 
    for(let i = 0; i < reglas_inputs.length; i++){
        cases.push({
            input: reglas_inputs[i],
            output: reglas_outputs[i]
        })
    }
    return cases;
}

/**
 * Aplica la regla a un string
 * @param {string} axiom inicio del automata
 * @param {*} rule regla a aplicar
 * @returns {string} string con el resultado de aplicar la regla al automata
 * 
 * @memberof Automata Celular Elemental
 * 
 * @example
 * applyRule("0001000", 30) // "0011100"
 * 
 */
function applyRule(axiom, rule){
    const cases = createCases(rule);
    let newString = "";
    for(let i = 0; i < axiom.length; i++){
        const neighbors = getNeighbors(axiom, i);
        const ruleCase = cases.find(cell => cell.input === neighbors);
        newString += ruleCase.output;
    }
    return newString;
}

/**
 * Genera un automata celular elemental partiendo de una regla y un numero de generaciones
 * @param {number} rule regla a aplicar
 * @param {*} iterations numero de generaciones
 * @returns {Array} array con las generaciones del automata
 * 
 * @memberof Automata Celular Elemental
 * 
 * @example
 * 
 * generate(30, 10) //Genera una lista con 10 generaciones del automata aplicando la regla 30
 */
function generate(rule, iterations){
    const axiom = "0".repeat(iterations) + "1" + "0".repeat(iterations); // crea el inicio del automata (un 1 rodeado de 0s
    let strings = [];
    let newString = axiom;
    strings.push(newString);
    for(let i = 0; i < iterations; i++){
        newString = applyRule(newString, rule);
        strings.push(newString);
    }
    const changed = changeChars(strings, "█", " ");
    let html = "<pre>"
    changed.forEach((string)=>{
        html += string + "\n";
    })
    html += "</pre>"
    
    return {html, json: changed};
}
/**
 * Cambia los caracteres de un array de strings
 * @param {*} array array con strings
 * @param {string} char1 string a cambiar cuando el caracter es 1
 * @param {string} char2 string a cambiar cuando el caracter es 0
 * 
 * @returns {Array} array con los strings cambiados
 * 
 * @memberof Automata Celular Elemental
 * 
 * @example
 * 
 * changeChars(["111", "000"], "█", " ") // ["███", "   "]
 */
function changeChars(array, char1, char2){
    return array.map(string => string.split("").map(char => char === "1" ? char1 : char2).join(""));
}

module.exports = { generate } 

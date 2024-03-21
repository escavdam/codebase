/**
 * 
 * @param {number} input Valor a ser mapeado
 * @param {number} inputMin Valor mínimo del rango de entrada
 * @param {number} inputMax Valor máximo del rango de entrada
 * @param {number} outputMin Valor mínimo del rango de salida
 * @param {number} outputMax Valor máximo del rango de salida
 * @returns {number} Valor mapeado
 * 
 * @example
 * mapValue(5, 0, 10, 0, 100) // 50
 * mapValue(10, 0, 10, 0, 100) // 100
 */
function mapValue(input, inputMin, inputMax, outputMin, outputMax) {
    return ((input - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) + outputMin;
}
/*
function mapValue(valor, entradaMin, entradaMax, salidaMin, salidaMax){
    return ((valor - entradaMin) / (entradaMax - entradaMin)) * ( salidaMax - salidaMin) + salidaMin;
}
*/

module.exports = mapValue;
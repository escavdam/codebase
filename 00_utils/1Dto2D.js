/**Calcula las coordenadas en un plano de dos dimensiones con el mismo ancho y alto a partir de una posición en un arreglo de una dimensión
 * 
 * @param {number} index La posición que ocupa el elemento en 1 dimensión
 * @param {ancho} width ancho total de la matriz de 2 dimensiones
 * @returns {x: number, y: number} coordenadas en 2 dimensiones
 * 
 * @example
 * 
 * const arr1D = "ABCDEFGHI"
 * const coords = coordsFrom1D(4,3) //posición 4 en un array de 3x3
 * arr1D[position] // E
 */
function coordsFrom1D(index, width) {
    if(index === undefined || width === undefined) {
      throw new Error("i and width are required")
    }
    if(index < 0 || width < 0) {
      throw new Error("i and width should be positive")
    }
    if(index >= width * width) {
      throw new Error("i should be less than width * width")
    }
    return {x: index % width, y: Math.floor(index / width)};
  }

  /**
   * 
   * @param {number} x posicion x
   * @param {number} y posicion y
   * @param {ancho} ancho ancho del array o grid
   * @returns {number} posicion en 1 dimensión
   * 
   * @example
   * 
   * const arr1D = "ABCDEFGHI"
   * 
   * const position = positionFromCoords(1,1,3) //posición 1,1 en un array de 3x3
   * arr1D[position] // E
   */
function positionFromCoords(x, y, width) {
  if(x === undefined || y === undefined || width === undefined) {
    throw new Error("x, y and width are required")
  }
  if(x < 0 || y < 0 || width < 0) {
    throw new Error("x, y and width should be positive")
  }
  if(x >= width || y >= width) {
    throw new Error("x and y should be less than width")
  }
  return y * width + x;
}

const arr2D = [
  ["O", "O", "O"],
  ["O", "X", "O"],
  ["O", "O", "O"]
]

const arr1D = arr2D.map(list => list.join("")).join("") 

const position = positionFromCoords(1, 1, 3) //la posición 1,1 en un array de 3x3 es 4
console.log(arr1D[position]) // X

const coords = coordsFrom1D(4, 3) //la posición 4 de un array 1D en un array de 3x3 es 1,1
console.log(arr2D[coords.y][coords.x]) // X
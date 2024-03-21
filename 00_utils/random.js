/**
 * Devuelve un número aleatorio, un número aleatorio en un rango o un elemento aleatorio de un array
 * @param  {...any} args numero, rango o array
 * @returns {any} numero aleatorio, numero aleatorio en un rango o elemento aleatorio de un array
 * 
 * @example
 * random() // 0.123456789
 * random(10) // 5
 * random(10, 20) // 15
 * random([1, 2, 3, 4, 5]) // 3
 */
function random(...args){
    if(args.length === 0){
       return Math.random()
    } else {
      if(args.length === 1 && typeof args[0] === 'number'){
        return Math.floor(Math.random() * args[0])
      } 
      if(args.length === 1 && typeof args[0] === 'object'){
        return args[0][Math.floor(Math.random()*args[0].length)]
      }
      if (args.length === 2){
        return args[0] + Math.floor(Math.random() * (args[1]+1-args[0]))
      }
    }
  }

module.exports = random;
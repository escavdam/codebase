function randomArray(length, value) {
  let arr = []
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * value))
  }
  return arr
}

module.exports = randomArray;

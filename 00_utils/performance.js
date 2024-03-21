function createArray(length, value) {
    let arr = []
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * value))
    }
    return arr
  }
  
console.time("create array");
let lista = createArray(5000000, 100000)
console.timeEnd("create array");

console.time("manual sort");
const r1 = lista.sort((a, b)=>{
    if(a > b) return -1;
    if(a < b) return 1;
    return 0;
})
console.timeEnd("manual sort");
lista = createArray(5000000, 99999)

//count the performance of a sort
console.time("sort");
const r0 = lista.sort((a, b) => a - b);
console.timeEnd("sort");

function grid(rows, cols){
    let arr = [];
    for(let i = 0; i < rows; i++){
        arr[i] = [];
        for(let j = 0; j < cols; j++){
            arr[i][j] = 0;
        }
    }
    return arr;
}

module.exports = grid;
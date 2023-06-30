let construct2DArray = function(original, m, n) {
     if (original.length !== m * n) {
        return []; 
    }
    let result = [];
    for (let i = 0; i < m; i++) {
        let arr = [];
        for (let j = 0; j < n; j++) {
            arr.push(original[(i * n) + j]);
        }
        result.push(arr);
    }
    return result;
};
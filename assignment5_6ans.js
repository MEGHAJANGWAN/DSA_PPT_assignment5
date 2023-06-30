let findDuplicates = function(nums) {
    let obj = {};
    let dupArr = [];
    for(let k of nums) {
        if(obj[k]) {
            dupArr.push(k);
        } else {
            obj[k] = 1;
        }
    }
    return dupArr;
};
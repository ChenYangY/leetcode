/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let results = []
    let candidates = []
    // 确定边界
    for(let i=1; i<=9; i++) {
        candidates[i] = i;
    }
   
    pick(candidates, n, k, results, [])
    return results 
};


function pick(candidates, target, k, results, array) {
    let sumNum = sum(array)
    if(sumNum > target || k < 0) return
    if(k === 0 && sumNum === target) {
        let result = array.map(function(item) {
            return item
        })
        results.push(result)
        return
    }
    let curIdx = array.length
    candidates.forEach(function (item, index) {
        // 去重
        if(index > 0 && item == candidates[index-1]) return 
        if(item < array[curIdx-1]) return 
        array.push(item)
        pick(candidates.slice(index+1), target, k - 1, results, array)
        array.splice(curIdx)
    })
}

function getMin(candidates) {
    let min = candidates[0]
    candidates.forEach(function(item) {
        if(min <= item) return
        min = item
    });
    return min
}

function sum(array) {
    let sum = 0
    array.forEach(function(item) {
        sum += item
    })
    return sum
}


// let result = combinationSum3(3, 9)
// console.log(result)
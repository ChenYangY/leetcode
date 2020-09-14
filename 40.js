/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let results = []
    // 确定边界
    let minNum = getMin(candidates)
    let maxF = Math.floor(target/minNum)
    candidates.sort(function(a,b) {
        return a-b;
    })
    while(maxF) {
        pick(candidates, target, maxF, results, [])
        maxF--
    }
    console.log(results)
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

combinationSum2([10,1,2,7,6,1,5], 8)
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let results = []
    // 确定边界
    let minNum = getMin(candidates)
    let maxF = Math.floor(target/minNum)

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
    candidates.forEach(function (item) {
        // 去重
        if(item < array[curIdx-1]) return 
        array.push(item)
        pick(candidates, target, k - 1, results, array)
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


combinationSum([2,3,6,7], 7)
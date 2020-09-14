/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let results = [];
    let map = []
    for(let i=1; i<=n; i++) {
        map[i] = i
    }
    
    for(let i = 1; i <= n ; i++) {
        map[i-1] = 0
        pick(i+1, n,k - 1, map, results)
        map[i-1] = -1
    }
    return results
};

function pick(cur, n, k, map, results) {
    if(k == 0) {
        let result = []
        map.forEach(function (item, index) {
            if(item == 0) result.push(index + 1)
        });
        results.push(result)
        return
    }
    for(let i=cur; i<=n; i++) {
        map[i-1] = 0
        pick(i+1, n,k - 1, map, results)
        map[i-1] = i
    }
}



let all =  combine(1, 1)
console.log(all)
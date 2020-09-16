/**
 * @param {number[]} nums
 * @return {number}
 */
var splitArray = function(nums) {
    let splitCount = dfs(nums)
    return splitCount
};

function dfs(nums) {
    let start = 0;
    let len = nums.length
    let min = 0;
    let right, left
    // console.log(nums)
    while(start < len) {
        let count = start + 1;
        while(count < len) {
            let g = gcd(nums[start], nums[count])
            // console.log(start, count)
            if(g > 1) {
                if(start - 1 >= 0) {
                    left = dfs(nums.slice(0, start))
                }
                else left = 0;
                if(count + 1 <= len -1) {
                    right = dfs(nums.slice(count + 1, len))
                }
                else {
                    right = 0;
                }
                if(min === 0 || min > (left + right + 1)) {
                    min = left + right + 1;
                }
            }
            count ++;
        }
       
        start ++ 
    }
    // console.log(min)
    if(min === 0) {
        min = nums.length;
    }
    return min;
}


function gcd(a, b) {
    if(a<b) {
        temp = a;
        a = b;
        b = temp;
    } 
    num = a/b;
    let mod = a%b;
    if(mod === 0) return b;
    return gcd(b, mod)
}

// let number = splitArray([2,3,3,2,3,3])
let number = splitArray([2,3,5,7])


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let result = binaryOder(root, [])
    return result
};

function binaryOder(root, result) {
    let deep = 0;
    while(1) {
        let numbers = getOrderPositionNumbers(root, deep)
        if(numbers.length <= 0) break;
        let number = averageNumber(numbers);
        result.push(number);
        deep ++;
    }
    return result
}

function getOrderPositionNumbers(root, deep) {
    let leftNumbers = []
    let rightNumbers = []
    if(deep === 0 ) return [root.val]
    if(root.left) leftNumbers = getOrderPositionNumbers(root.left, deep - 1);
    if(root.right) rightNumbers = getOrderPositionNumbers(root.right, deep - 1);
    return leftNumbers.concat(rightNumbers)
}

function averageNumber(arr) {
    let len = arr.length;
    let sum = 0;
    arr.forEach(function(item) {
        sum += item;
    });
    return sum/len;
}


// let root = {
//     val: 3,
//     left: {
//         val: 9
//     },
//     right: {
//         val: 20,
//         left: {
//             val: 15
//         },
//         right: {
//             val: 7
//         }
//     }
// }


// let results = averageOfLevels(root)
// console.log(results)


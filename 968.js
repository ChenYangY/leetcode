/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var minCameraCover = function(root) {
    let num = 0
    if(!root) return num;
    if(dfs(root) === 0) num ++;
    return num

    function dfs(node) {
        if(!node) return 1;
        let left = dfs(node.left)
        let right = dfs(node.right)
        if(left === 0 || right === 0) {
            num ++;
            return 2;
        }
        else if(left === 2 || right === 2) return 1
        else if(left === 1 || right === 1) return 0;
        else return 1
    }
};
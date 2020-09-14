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
var inorderTraversal = function(root) {
      let result = []
      dfs_inorder(root, result)
};


function dfs_inorder(node, result) {
    if(!node) return
    dfs_inorder(node.left, result)
    result.push(node.val)
    dfs_inorder(node.right, result)
}

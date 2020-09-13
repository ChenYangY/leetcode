/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let map = []
    let row = board.length;
    let col = board[0].length;
    formatMap(map, row, col)
    for(let i=0;i<row;i++) {
        for(let j=0;j<col;j++) {
            let flag = dfs(board, i, j, map, word, 0)
            if(flag) return flag;
        }
    }
    return false;
}


function dfs(board, i, j, map, word, deep) {
    let flag
    if(i < 0 || j < 0 || i >= board.length || j>= board[0].length) return false;
    if(map[i][j] === 1) return false;
    if(board[i][j] !== word[deep] ) return false;
    if(deep === word.length - 1) return true;
    map[i][j] =  1;
    flag = dfs(board, i+1, j, map, word, deep + 1)
    if(flag) return flag;
    flag = dfs(board, i - 1, j, map, word, deep + 1)
    if(flag) return flag;
    flag = dfs(board, i, j + 1, map, word, deep + 1)
    if(flag) return flag;
    flag = dfs(board, i , j - 1, map, word, deep + 1)
    if(flag) return flag;
    map[i][j] = 0;
    return false;
}

function formatMap(map, row, col) {
    for(i=0;i<row;i++) {
        if(!map[i]) map[i] = [];
        for(j=0;j<col;j++) {
            map[i][j] = 0;
        }
    }
}

let flag = exist([
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ], "SEE")
 
console.log(flag)

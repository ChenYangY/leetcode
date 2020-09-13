/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {

    dfs(board)
    // console.log(flag)
    // console.log(board)
    
};

function dfs(board) {
    let flag = false
    for(let i=0; i<9; i++) {
        // console.log(board)
        let lastLen = 0;
        for(let j = 0; j < 9; j++) {
            if(board[i][j] !== '.') continue
            let last = getLast(board, i, j)
            // console.log(i,j)
            // console.log(last)
            lastLen = last.length;
            if(lastLen <= 0) return false;
            for(let k = 0; k < lastLen; k++ ) {
                board[i][j] = last[k];
                flag = dfs(board)
                if(flag) return true;
            }
            if(!flag) {
                board[i][j] = '.'
                return false;
            }
        }   
    }
    return true;
}

function getLast(board, i, j) {
    let k;
    let last = ['1','2','3','4','5','6','7','8','9']
    let index
    for(k = 0; k < 9; k++) {
        index = findNumber(last, board[i][k])
        if(index >= 0) last.splice(index, 1)
        index = findNumber(last, board[k][j])
        if(index >= 0) last.splice(index, 1)
    }
    let rowStart = Math.floor(i/3)*3;
    let colStart = Math.floor(j/3)*3;
    for(n=rowStart; n<(rowStart+3);n++) {
        for(m=colStart; m<(colStart+3); m++) {
            index = findNumber(last, board[n][m])
            if(index >= 0) last.splice(index, 1)
        }
    }
    return last;
}

function findNumber(arr, num) {
    let len = arr.length
    let i ;
    let index = -1;
    for(i=0; i<len;i++) {
        if(arr[i] === num) {
            index = i;
            break;
        }
    }
    return index;
}

// solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]])



var isValidSudoku = function(board) {
    const boxes = {}

    for(let i=0; i < 9; i++){
        const currentRow = {}
        const currentCol = {}
        for(let j=0; j < 9; j++){
            const rowVal = board[i][j]

            if(rowVal !== "."){
                if(currentRow[rowVal]) return false
                currentRow[rowVal] = true

                const key = `${Math.floor(i/3)}-${Math.floor(j/3)}`
                if(!boxes[key]) boxes[key] = {}
                if(boxes[key][rowVal]) return false
                boxes[key][rowVal] = true
            }

            const colVal = board[j][i]
            if(colVal !== '.'){
                if(currentCol[colVal]) return false
                currentCol[colVal] = true
            }
        }
    }
    return true
};
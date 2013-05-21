var GameOfLife1 = {

    render : function (board) {
        return board.map(function (row) {
           return row.map(function(column) {
                return column ? "*" : " ";
            });
        });
    },

    advance : function (board) {

        function countNeighbors(board, x, y) {
            var count = 0;
            if (y > 0) {
                count += board[y - 1][x - 1] ? 1 : 0;
                count += board[y - 1][x] ? 1 : 0;
                count += board[y - 1][x + 1] ? 1 : 0;
            }
            count += board[y][x - 1] ? 1 : 0;
            count += board[y][x + 1] ? 1 : 0;
            if (y < board.length - 1) {
                count += board[y + 1][x - 1] ? 1 : 0;
                count += board[y + 1][x] ? 1 : 0;
                count += board[y + 1][x + 1] ? 1 : 0;
            }
            return count;
        }

        var x, y, row, count;
        var newBoard = [];

        for (y = 0; y < board.length; y++) {
            row = board[y];
            newBoard.push([]);
            for (x = 0; x < row.length; x++) {
                count = countNeighbors(board, x, y);
                if (count < 2) {
                    // Any live cell with fewer than two live neighbours dies, as if caused by under-population.
                    newBoard[y][x] = false;
                } else if (board[y][x]) {
                    // Any live cell with more than three live neighbours dies, as if by overcrowding.
                    // Any live cell with two or three live neighbours lives on to the next generation.
                    newBoard[y][x] = count <= 3;

                } else { // must be dead cell
                    // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
                    newBoard[y][x] = count === 3;
                }
            }
        }
        return newBoard;
    }
};



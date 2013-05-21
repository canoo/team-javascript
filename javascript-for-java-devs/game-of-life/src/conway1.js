// This is a very rough first draft of implementing a game of life in JavaScript and HTML5

var GameOfLife1 = {

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

        // live cell with < 2 live neighbours dies
        // live cell with > 3 live neighbours dies
        // live cell with 2 or 3 live neighbours lives
        // dead cell with exactly 3 live neighbours becomes alive
        function cellState(cell, neighbors) {
            if (neighbors < 2) {
                return false;
            } else if (cell) {
                return neighbors <= 3;
            } else { // must be dead cell
                return neighbors === 3;
            }
        }

        var x, y, row, count;
        var newBoard = [];

        for (y = 0; y < board.length; y++) {
            row = board[y];
            newBoard.push([]);
            for (x = 0; x < row.length; x++) {
                count = countNeighbors(board, x, y);
                newBoard[y][x] = cellState(board[y][x], count);
            }
        }
        return newBoard;
    }
};



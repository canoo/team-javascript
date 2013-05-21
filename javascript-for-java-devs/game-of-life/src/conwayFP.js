
// An attempt at an Functional Programming version of the Game of Life
var createGame = function() {

    function countNeighbors(board, x, y) {
        var neighbors = [];
        if (y > 0) {
            neighbors.push(board[y - 1][x - 1]);
            neighbors.push(board[y - 1][x]);
            neighbors.push(board[y - 1][x + 1]);
        }
        neighbors.push(board[y][x - 1]);
        neighbors.push(board[y][x + 1]);
        if (y < board.length - 1) {
            neighbors.push(board[y + 1][x - 1]);
            neighbors.push(board[y + 1][x]);
            neighbors.push(board[y + 1][x + 1]);
        }
        return neighbors.reduce(function(prev, curr) { return prev + (curr ? 1 : 0); });
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

    return function(board) {
        return board.map(function(row, y) {
            return row.map(function(cell, x) {
                var count = countNeighbors(board, x, y);
                return cellState(cell, count);
            });
        });
    };
};




// This is an implementation that follows Douglas Crawford's Function Inheritance Pattern

var createGameFI = function(initialBoard) {

    var gameBoard = initialBoard;

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

    return {
        render: function () {
            return gameBoard;
        },
        advance: function () {
            gameBoard = gameBoard.map(function (row, y) {
                return row.map(function (cell, x) {
                    var count = countNeighbors(gameBoard, x, y);
                    return cellState(cell, count);
                });
            });
        }
    };
};



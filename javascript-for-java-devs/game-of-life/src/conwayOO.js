// This is an OO version of Game of Life

function GameOfLife(initialState) {

    this.board = [];
    var x, y, row, count;

    // game board arrives as a 2d array of booleans, convert to board structure
    for (y = 0; y < initialState.length; y++) {
        row = initialState[y];
        this.board.push([]);
        for (x = 0; x < row.length; x++) {
            this.board[y][x] = new Cell(x, y, row[x]);
        }
    }
}

GameOfLife.prototype.render = function() {
    var y, x, row, cell;
    var result = [];
    for (y = 0; y < this.board.length; y++) {
        row = this.board[y];
        result.push([]);
        for (x = 0; x < row.length; x++) {
            cell = row[x];
            result[y][x] = !!cell.state; // coerce to boolean
        }
    }
    return result;
};

GameOfLife.prototype.getNeighbors = function (cell) {

    var result = [];
    var y = cell.y;
    var x = cell.x;
    if (y > 0) {
        result.push(this.board[y - 1][x - 1]);
        result.push(this.board[y - 1][x]);
        result.push(this.board[y - 1][x + 1]);
    }
    result.push(this.board[y][x - 1]);
    result.push(this.board[y][x + 1]);
    if (y < this.board.length - 1) {
        result.push(this.board[y + 1][x - 1]);
        result.push(this.board[y + 1][x]);
        result.push(this.board[y + 1][x + 1]);
    }
    return result;
};

GameOfLife.prototype.advance = function() {
    var newBoard = [];
    var y, x, row, cell;

    for (y = 0; y < this.board.length; y++) {
        row = this.board[y];
        newBoard.push([]);
        for (x = 0; x < row.length; x++) {
            cell = row[x];
            newBoard[y][x] = new Cell(cell.x, cell.y, cell.getNextState(this.getNeighbors(cell)));
        }
    }
    this.board = newBoard;
};

function Cell(x, y, state) {
    this.x = x;
    this.y = y;
    this.state = state;
}

// live cell with < 2 live neighbours dies
// live cell with > 3 live neighbours dies
// live cell with 2 or 3 live neighbours lives
// dead cell with exactly 3 live neighbours becomes alive
Cell.prototype.getNextState = function(neighbors) {

    var i, count = 0;
    for (i = 0; i < neighbors.length; i++) {
        if (neighbors[i] !== undefined && neighbors[i].state) {
            count = count + 1;
        }
    }
    if (count < 2) {
        return false;
    } else if (this.state) {
        return count <= 3;
    } else { // must be dead cell
        return count === 3;
    }
};

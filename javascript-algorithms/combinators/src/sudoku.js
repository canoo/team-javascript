var sudoku = (function() {

    function findCenterPoint(x, y) {
        function center(num) {
            if (num == 0 || num == 3 || num == 6) {
                return num + 1;
            } else if (num == 2 || num == 5 || num == 8) {
                return num - 1;
            } else {
                return num;
            }
        }
        return {x : center(x), y: center(y) };
    }

    function possibleValues(x, y, matrix) {
        var foundValues = [];
        // what are the numbers in this row?
        matrix[y].forEach(function(value) {
            if (value) {
                foundValues.push(value);
            }
        });
        // what are the possibilities in this column?
        matrix.forEach(function(row){
            var value = row[x];
            if (value) {
                foundValues.push(value);
            }
        });

        var centerPoint = findCenterPoint(x, y);
        var surroundings = [
            matrix[centerPoint.y - 1][centerPoint.x - 1],
            matrix[centerPoint.y - 1][centerPoint.x],
            matrix[centerPoint.y - 1][centerPoint.x + 1],
            matrix[centerPoint.y][centerPoint.x - 1],
            matrix[centerPoint.y][centerPoint.x + 1],
            matrix[centerPoint.y + 1][centerPoint.x - 1],
            matrix[centerPoint.y + 1][centerPoint.x],
            matrix[centerPoint.y + 1][centerPoint.x + 1]
        ];
        surroundings.forEach(function (value) {
            if (value) {
                foundValues.push(value);
            }
        });
        var possibilities = [];
        for (var count = 1; count <= 9; count++) {
            if (foundValues.lastIndexOf(count) == -1) {
                possibilities.push(count);
            }
        }
        return possibilities;
    }

    function findBestGuessLocation(matrix) {
        var bestX, bestY, bestValues = [];
        matrix.forEach(function(row, rowNumber){
            row.forEach(function(cellValue, columnNumber) {
                if (cellValue === 0) {
                    var possibilities = possibleValues(columnNumber, rowNumber, matrix);
                    if (bestValues.length == 0 || possibilities.length < bestValues.length) {
                        bestX = columnNumber;
                        bestY = rowNumber;
                        bestValues = possibilities;
                    }
                }
            });
        });
        return  {x: bestX, y: bestY, candidates: bestValues};
    }

    function isSolved(matrix) {
        return matrix.every(function(row){
            return row.every(function(cell){
                return cell !== 0
            });
        });
    }
    var solve = function solve(matrix, guessCallback, backtrackCallback, waitTime) {

        waitTime = waitTime || 0;
        if (isSolved(matrix)) {
            return; // Some idiot might submit a solved matrix. Better guard for that.
        }

        var paramStack = [
            findBestGuessLocation(matrix)
        ];

        var inner_solve = function() {
            if (paramStack.length > 0) {
                var currentStack = paramStack[paramStack.length - 1];
                var currentX = currentStack.x;
                var currentY = currentStack.y;
                var currentCandidates = currentStack.candidates;

                if (currentCandidates.length == 0) {
                    // this frame was a dead end
                    matrix[currentY][currentX] = 0;
                    paramStack.pop();
                    backtrackCallback(currentX, currentY, 0);
                } else {
                    var candidate = currentCandidates.pop();
                    guessCallback(currentX, currentY, candidate);
                    matrix[currentY][currentX] = candidate;
                    if (isSolved(matrix)) {
                        return;
                    }
                    paramStack.push(findBestGuessLocation(matrix));
                }
            }
            if (paramStack.length > 0) {
                setTimeout(inner_solve, waitTime);
            }
        };

        inner_solve();
    };

    /**
     * This is a beautiful recursive backtracking implementation, but will fail
     * on larger trees because of too many stack frames (seems ok in chrome & firefox though).
     */
    var solve_recur = function solve_recur(matrix, guessCallback, backtrackCallback) {

        var nextMove = findBestGuessLocation(matrix);
        for (var i = 0; i < nextMove.candidates.length; i++) {
            matrix[nextMove.y][nextMove.x] = nextMove.candidates[i];
            guessCallback(nextMove.x, nextMove.y, nextMove.candidates[i]);
            solve_recur(matrix, guessCallback, backtrackCallback);
            if (isSolved(matrix)) {
                return;
            } else {
                matrix[nextMove.y][nextMove.x] = 0;
                backtrackCallback(nextMove.x, nextMove.y, nextMove.candidates[i]);
            }
        }
    };

    return {
        solve: solve,
        solve_recur: solve_recur,
        easy : [
            [0, 3, 8, 6, 0, 0, 0, 0, 5],
            [7, 6, 0, 0, 0, 0, 0, 0, 2],
            [0, 0, 4, 0, 2, 0, 0, 0, 0],
            [0, 0, 3, 8, 0, 9, 0, 2, 6],
            [0, 7, 1, 2, 5, 6, 3, 8, 0],
            [6, 8, 0, 1, 0, 4, 9, 0, 0],
            [0, 0, 0, 0, 8, 0, 5, 0, 0],
            [4, 0, 0, 0, 0, 0, 0, 7, 8],
            [8, 0, 0, 0, 0, 5, 6, 9, 0]
        ],

        medium : [
            [0, 0, 9, 2, 5 ,0, 0, 0, 0],
            [2, 3, 0, 9, 6 ,0, 1, 4, 0],
            [0, 7, 1, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0, 0, 0, 0],
            [5, 8, 0, 0, 7, 0, 0, 2, 1],
            [0, 0, 0, 0, 0, 0, 0, 7, 0],
            [0, 0, 0, 0, 0, 0, 7, 1, 0],
            [0, 2, 3, 0, 1 ,8, 0, 9, 6],
            [0, 0, 0, 0, 3 ,9, 5, 0, 0]
        ],

        hard : [
            [0, 0, 0, 0, 9, 0, 0, 0, 0],
            [0, 7, 0, 0, 0, 0, 0, 0, 2],
            [4, 2, 0, 0, 0, 0, 5, 6, 1],
            [0, 0, 0, 0, 7, 8, 0, 9, 0],
            [0, 5, 7, 9, 0, 1, 4, 8, 0],
            [0, 9, 0, 5, 3, 0, 0, 0, 0],
            [9, 1, 2, 0, 0, 0, 0, 7, 6],
            [3, 0, 0, 0, 0, 0, 0, 2, 0],
            [0, 0, 0, 0, 6, 0, 0, 0, 0]
        ],

        evil : [
            [6, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 3, 0, 2, 0, 8, 0, 7],
            [0, 0, 0, 3, 7, 6, 0, 0, 5],
            [0, 3, 0, 1, 0, 0, 0, 7, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [4, 2, 0, 0, 0, 5, 0, 3, 0],
            [9, 0, 0, 2, 4, 1, 0, 0, 0],
            [3, 0, 6, 0, 9, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 9]
        ]
    };
}());
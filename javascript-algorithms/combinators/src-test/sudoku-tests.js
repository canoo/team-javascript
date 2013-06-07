SudokuTestCase = TestCase("SudokuTestCase");

SudokuTestCase.prototype.testSolveEasy = function () {

    var guessCallback = function(x, y, value, proceed) {
        console.log("Guessing " + x + "," + y + " " + value);
    };

    var backtrackCallback = function(x, y, value, proceed) {
        console.log("Backtracking on " + x + "," + y + " " + value);
    };

    sudoku.solve(sudoku.easy, guessCallback, backtrackCallback);
};

SudokuTestCase.prototype.testSolveMedium = function () {

    var guessCallback = function(x, y, value, proceed) {
        console.log("Guessing " + x + "," + y + " " + value);
    };

    var backtrackCallback = function(x, y, value, proceed) {
        console.log("Backtracking on " + x + "," + y + " " + value);
    };

    sudoku.solve(sudoku.medium, guessCallback, backtrackCallback);
};

SudokuTestCase.prototype.testSolveHard = function () {

    var guessCallback = function(x, y, value, proceed) {
        console.log("Guessing " + x + "," + y + " " + value);
    };

    var backtrackCallback = function(x, y, value, proceed) {
        console.log("Backtracking on " + x + "," + y + " " + value);
    };

    sudoku.solve(sudoku.hard, guessCallback, backtrackCallback);
};

SudokuTestCase.prototype.testSolveEvil = function () {

    var guessCallback = function(x, y, value, proceed) {
        console.log("Guessing " + x + "," + y + " " + value);
    };

    var backtrackCallback = function(x, y, value, proceed) {
        console.log("Backtracking on " + x + "," + y + " " + value);
    };

    sudoku.solve(sudoku.evil, guessCallback, backtrackCallback);
};

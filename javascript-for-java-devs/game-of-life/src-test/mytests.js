MyTestCase = TestCase("MyTestCase");

MyTestCase.prototype.render = function (board) {
    return board.map(function (row) {
        return row.map(function(column) {
            return column ? "*" : " ";
        });
    });
};

MyTestCase.prototype.testRender = function () {
    var board = [
        [true, false, true, false, true],
        [true, false, true, true, false],
        [false, false, true, false, true],
        [true, false, true, true, false]
    ];
    var table = this.render(board);
    assertEquals("cell failed", ['*', ' ', '*', ' ', '*'], table[0]);
    assertEquals("cell failed", ['*', ' ', '*', '*', ' '], table[1]);
    assertEquals("cell failed", [' ', ' ', '*', ' ', '*'], table[2]);
    assertEquals("cell failed", ['*', ' ', '*', '*', ' '], table[3]);
};

MyTestCase.prototype.testRev1_1 = function () {
    var board = [
        [true, false, true, false, true],
        [true, false, true, true, false],
        [false, false, true, false, true],
        [true, false, true, true, false]
    ];
    board = GameOfLife1.advance(board);
    var table = this.render(board);
    assertEquals("cell failed", [' ',  ' ', '*', ' ', ' ' ], table[0]);
    assertEquals("cell failed", [' ',  ' ', '*', ' ', '*' ], table[1]);
    assertEquals("cell failed", [' ',  ' ', ' ', ' ', '*' ], table[2]);
    assertEquals("cell failed", [' ',  '*', '*', '*', ' ' ], table[3]);

    board = GameOfLife1.advance(board);
    table = this.render(board);
    assertEquals("cell failed", [' ', ' ', ' ', '*', ' ' ], table[0]);
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' ' ], table[1]);
    assertEquals("cell failed", [' ', '*', ' ', ' ', '*' ], table[2]);
    assertEquals("cell failed", [' ', ' ', '*', '*', ' ' ], table[3]);
};

MyTestCase.prototype.testRev1_2 = function () {
    // Any live cell with fewer than two live neighbours dies, as if caused by under-population.
    var board = [
        [true,  false, false, true,  true],
        [true,  false, false, false, false],
        [false, false, false, false, false],
        [true,  false, false, false, true]
    ];
    board = GameOfLife1.advance(board);
    table = this.render(board);
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' '], table[0]);
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' '], table[1]);
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' '], table[2]);
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' '], table[3]);

};


MyTestCase.prototype.testFPVersion_1 = function () {

    var game = createGame();
    var board = [
        [true, false, true, false, true],
        [true, false, true, true, false],
        [false, false, true, false, true],
        [true, false, true, true, false]
    ];

    board = game(board);
    var table = this.render(board);
    assertEquals("cell failed", [' ',  ' ', '*', ' ', ' ' ], table[0]);
    assertEquals("cell failed", [' ',  ' ', '*', ' ', '*' ], table[1]);
    assertEquals("cell failed", [' ',  ' ', ' ', ' ', '*' ], table[2]);
    assertEquals("cell failed", [' ',  '*', '*', '*', ' ' ], table[3]);

    table = this.render(game(board));
    assertEquals("cell failed", [' ', ' ', ' ', '*', ' ' ], table[0]);
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' ' ], table[1]);
    assertEquals("cell failed", [' ', '*', ' ', ' ', '*' ], table[2]);
    assertEquals("cell failed", [' ', ' ', '*', '*', ' ' ], table[3]);
};

MyTestCase.prototype.testFPVersion_2 = function () {

    var game = createGame();
    var board = [
        [true,  false, false, true,  true],
        [true,  false, false, false, false],
        [false, false, false, false, false],
        [true,  false, false, false, true]
    ];
    var table = this.render(game(board));
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' '], table[0]);
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' '], table[1]);
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' '], table[2]);
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' '], table[3]);

};


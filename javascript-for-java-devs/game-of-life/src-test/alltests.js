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
    var game = createGameFI();
    var board = [
        [true, false, true, false, true],
        [true, false, true, true, false],
        [false, false, true, false, true],
        [true, false, true, true, false]
    ];
    board = game.advance(board);
    var table = this.render(board);
    assertEquals("cell failed", [' ',  ' ', '*', ' ', ' ' ], table[0]);
    assertEquals("cell failed", [' ',  ' ', '*', ' ', '*' ], table[1]);
    assertEquals("cell failed", [' ',  ' ', ' ', ' ', '*' ], table[2]);
    assertEquals("cell failed", [' ',  '*', '*', '*', ' ' ], table[3]);

    board = game.advance(board);
    table = this.render(board);
    assertEquals("cell failed", [' ', ' ', ' ', '*', ' ' ], table[0]);
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' ' ], table[1]);
    assertEquals("cell failed", [' ', '*', ' ', ' ', '*' ], table[2]);
    assertEquals("cell failed", [' ', ' ', '*', '*', ' ' ], table[3]);
};

MyTestCase.prototype.testRev1_2 = function () {
    var game = createGameFI();
    var board = [
        [true,  false, false, true,  true],
        [true,  false, false, false, false],
        [false, false, false, false, false],
        [true,  false, false, false, true]
    ];
    board = game.advance(board);
    table = this.render(board);
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' '], table[0]);
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' '], table[1]);
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' '], table[2]);
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' '], table[3]);

};


MyTestCase.prototype.testFPVersion_1 = function () {

    var game = createGameFP();
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

    var game = createGameFP();
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

MyTestCase.prototype.testOOVersion_initialState = function () {

    var game = new GameOfLife([
        [true, false, true, false, true],
        [true, false, true, true, false],
        [false, false, true, false, true],
        [true, false, true, true, false]
    ]);

    var table = this.render(game.render());
    assertEquals("cell failed", ['*',  ' ', '*', ' ', '*' ], table[0]);
    assertEquals("cell failed", ['*',  ' ', '*', '*', ' ' ], table[1]);
    assertEquals("cell failed", [' ',  ' ', '*', ' ', '*' ], table[2]);
    assertEquals("cell failed", ['*',  ' ', '*', '*', ' ' ], table[3]);
};

MyTestCase.prototype.testOOVersion_1 = function () {

    var game = new GameOfLife([
        [true, false, true, false, true],
        [true, false, true, true, false],
        [false, false, true, false, true],
        [true, false, true, true, false]
    ]);

    game.advance();
    var table = this.render(game.render());
    assertEquals("cell failed", [' ',  ' ', '*', ' ', ' ' ], table[0]);
    assertEquals("cell failed", [' ',  ' ', '*', ' ', '*' ], table[1]);
    assertEquals("cell failed", [' ',  ' ', ' ', ' ', '*' ], table[2]);
    assertEquals("cell failed", [' ',  '*', '*', '*', ' ' ], table[3]);

    game.advance();
    table = this.render(game.render());
    assertEquals("cell failed", [' ', ' ', ' ', '*', ' ' ], table[0]);
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' ' ], table[1]);
    assertEquals("cell failed", [' ', '*', ' ', ' ', '*' ], table[2]);
    assertEquals("cell failed", [' ', ' ', '*', '*', ' ' ], table[3]);
};

MyTestCase.prototype.testOOVersion_2 = function () {
    var game = new GameOfLife([
        [true,  false, false, true,  true],
        [true,  false, false, false, false],
        [false, false, false, false, false],
        [true,  false, false, false, true]
    ]);

    game.advance();
    var table = this.render(game.render());
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' '], table[0]);
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' '], table[1]);
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' '], table[2]);
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' '], table[3]);

};


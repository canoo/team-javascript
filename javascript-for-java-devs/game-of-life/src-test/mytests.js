MyTestCase = TestCase("MyTestCase");

MyTestCase.prototype.testA = function () {
    var board = [
        [true, false, true, false, true],
        [true, false, true, true, false],
        [false, false, true, false, true],
        [true, false, true, true, false]
    ];
    var table = GameOfLife1.render(board);
    assertEquals("cell failed", ['*', ' ', '*', ' ', '*'], table[0]);
    assertEquals("cell failed", ['*', ' ', '*', '*', ' '], table[1]);
    assertEquals("cell failed", [' ', ' ', '*', ' ', '*'], table[2]);
    assertEquals("cell failed", ['*', ' ', '*', '*', ' '], table[3]);

    board = GameOfLife1.advance(board);
    table = GameOfLife1.render(board);
    assertEquals("cell failed", [' ',  ' ', '*', ' ', ' ' ], table[0]);
    assertEquals("cell failed", [' ',  ' ', '*', ' ', '*' ], table[1]);
    assertEquals("cell failed", [' ',  ' ', ' ', ' ', '*' ], table[2]);
    assertEquals("cell failed", [' ',  '*', '*', '*', ' ' ], table[3]);

    board = GameOfLife1.advance(board);
    table = GameOfLife1.render(board);
    assertEquals("cell failed", [' ', ' ', ' ', '*', ' ' ], table[0]);
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' ' ], table[1]);
    assertEquals("cell failed", [' ', '*', ' ', ' ', '*' ], table[2]);
    assertEquals("cell failed", [' ', ' ', '*', '*', ' ' ], table[3]);

    // Any live cell with fewer than two live neighbours dies, as if caused by under-population.
    // Any live cell with two or three live neighbours lives on to the next generation.
    // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
    // Any live cell with fewer than two live neighbours dies, as if caused by under-population.

};

MyTestCase.prototype.testRule1 = function () {
    // Any live cell with fewer than two live neighbours dies, as if caused by under-population.
    var board = [
        [true,  false, false, true,  true],
        [true,  false, false, false, false],
        [false, false, false, false, false],
        [true,  false, false, false, true]
    ];
    board = GameOfLife1.advance(board);
    table = GameOfLife1.render(board);
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' '], table[0]);
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' '], table[1]);
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' '], table[2]);
    assertEquals("cell failed", [' ', ' ', ' ', ' ', ' '], table[3]);

}


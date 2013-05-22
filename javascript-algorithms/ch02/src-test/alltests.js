var MyTestCase = TestCase("FactorialTestCase");
var AsynchronousTest = AsyncTestCase('FactorialAsyncTestCase');

MyTestCase.prototype.runFactorialTests = function (factorialFunction) {
    assertEquals(undefined, factorialFunction(null));
    assertEquals(undefined, factorialFunction('abc'));
    assertEquals(undefined, factorialFunction(undefined));
    assertEquals(undefined, factorialFunction(-1));
    assertEquals(1, factorialFunction(0));
    assertEquals(1, factorialFunction(1));
    assertEquals(2, factorialFunction(2));
    assertEquals(6, factorialFunction(3));
    assertEquals(24, factorialFunction(4));
    assertEquals(24, factorialFunction('4'));
    assertEquals(2432902008176640000, factorialFunction(20));
    assertEquals(8.15915283247898e+47, factorialFunction(40));
    assertEquals(9.332621544394418e+157, factorialFunction(100));
    assertEquals(7.257415615308004e+306, factorialFunction(170)); // past this and number overflows
};

MyTestCase.prototype.testFactorial_iterative= function () {
    this.runFactorialTests(factorial_iterative);
};

MyTestCase.prototype.testFactorial_recursive = function () {
    this.runFactorialTests(factorial_recursive);
};

AsynchronousTest.prototype.assertAsyncFactorial = function (queue, expected, input) {
    var result;

    queue.call('Run the factorial', function (callbacks) {
        var instrumentedCallback = callbacks.add(function (value) {
            result = value;
        });
        factorial_async(input, instrumentedCallback);
    });

    queue.call('Verify the result', function () {
        assertEquals('factorial gave wrong result', expected, result);
    });
};

AsynchronousTest.prototype.testFactorial_async = function (queue) {

    this.assertAsyncFactorial(queue, undefined, null);
    this.assertAsyncFactorial(queue, undefined, 'abc');
    this.assertAsyncFactorial(queue, undefined, undefined);
    this.assertAsyncFactorial(queue, undefined, -1);
    this.assertAsyncFactorial(queue, 1, 0);
    this.assertAsyncFactorial(queue, 1, 1);
    this.assertAsyncFactorial(queue, 2, 2);
    this.assertAsyncFactorial(queue, 6, 3);
    this.assertAsyncFactorial(queue, 24, 4);
    this.assertAsyncFactorial(queue, 24, '4');
    this.assertAsyncFactorial(queue, 2432902008176640000, 20);
    this.assertAsyncFactorial(queue, 8.15915283247898e+47, 40);
    this.assertAsyncFactorial(queue, 9.332621544394418e+157, 100);
    this.assertAsyncFactorial(queue, 7.257415615308004e+306, 170);
};


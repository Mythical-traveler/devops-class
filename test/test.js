var main = require('../index');
var assert = require('assert');
describe('Regular fibonacci value', function() {
    it('should return 5 for Fib(5)', function() {
        assert.strictEqual(main.fibonacci(5), 5);
      });
});

describe('Negative', function() {
  it('should return underfined', function() {
      assert.strictEqual(main.fibonacci(-1), undefined);
    });
});
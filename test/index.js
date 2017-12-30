var assert = require('assert');
var trim = require('../index')

var obj = {
    a: '  1 2  '
}

describe('trim', () => {
    it('', () => {
        assert.equal(trim(obj).a, '1 2');
    });
});

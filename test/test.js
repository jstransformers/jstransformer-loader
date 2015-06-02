var assert = require('assert');
var test = require('testit');

test('basic.octet', function () {
  test('should render with locals', function() {
    var result = require('../?octet&name=World!./fixtures/basic.octet');
    assert.equal('Hello, World!', result);
  });
});

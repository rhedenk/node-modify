var modify = require('./index'),
    assert = require('assert');

var head = { a: 1, b: 2 };

var modifiers = [
  function (head, next) {
    head.a *= 2;
    return next();
  },
  function (head, next) {
    head.c = head.a + head.b;
    return next();
  }
];

modify(head, modifiers, function (err) {
  assert.equal(head.a, 2);
  assert.equal(head.c, 4);
});


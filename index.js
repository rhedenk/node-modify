var modify = function (head, modifiers, callback, i) {
  if (i == modifiers.length) return callback(null);

  var modifier = modifiers[i];

  var next = function (err) {
    if (err) return callback(err);

    modify(head, modifiers, callback, i + 1);
  };

  return modifier.call(null, head, next);
};

module.exports = function (head, modifiers, callback) {
  if (!modifiers.length) return callback(null);

  return modify(head, modifiers, callback, 0);
};

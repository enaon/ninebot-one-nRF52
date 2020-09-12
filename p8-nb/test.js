require("Storage").write("answer",`
exports.get = function() {
  return 42;
};`)
print(require("answer").get());
// prints 42

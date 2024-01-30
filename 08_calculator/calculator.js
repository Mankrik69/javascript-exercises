const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, value) => sum + value, 0);
};

const multiply = function (arr) {
  return arr.reduce((product, value) => product * value);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let product = 1;
  for (let i = 1; i <= a; i++) {
    if (a === 0) return 1;

    product *= i;
  }

  return product
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

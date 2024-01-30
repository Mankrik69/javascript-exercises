const fibonacci = function(n) {
    if (n < 0) return "OOPS";

    let current = 0;
    let next = 1;

    for (let i = 0; i < n; i++) {
        let tmp = next
        next += current;
        current = tmp;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;

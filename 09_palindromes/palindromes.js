const palindromes = function (str) {
    const delim = [" ", ",", ".", "!"];
    str = str.toLowerCase();

    for (char of delim) {
        if (str.includes(char)) {
            str = str.split(char);
            str = str.join("");
        }
    }

    return str === str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;

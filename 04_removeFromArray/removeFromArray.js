const removeFromArray = function (array, ...remove) {
    return array.filter(elem => !(remove.includes(elem)));
};

// Do not edit below this line
module.exports = removeFromArray;

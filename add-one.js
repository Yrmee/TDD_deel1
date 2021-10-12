// Functie 1 - addOne

const addOne = function(array) {
    const newArray = [];
    array.forEach(number => {
        newArray.push(number +1);
    });
    return newArray;
}

module.exports = addOne;

// Functie 2 - getWordLengths

const getWordLengths = function(array) {
    return array.map(string => {
        return string.length;
    });  
};

module.exports = getWordLengths;
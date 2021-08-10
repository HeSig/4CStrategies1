'use strict';

console.log("Results = " + GenerateAndReturnByFifteen() + " of the values are divideable by 15.");

function GenerateAndReturnByFifteen() {
    var divideableByFifteen = 0;

    let numberArray = [];

    for (let i = 0; i < 16; i++) {
        numberArray.push(Math.floor(Math.random() * 2200) - 1000);
    }
    numberArray.sort(function (a, b) { return b - a });
    for (let i = 0; i < numberArray.length; i++) {
        console.log(numberArray[i]);
        if (numberArray[i] % 15 == 0) {
            divideableByFifteen++;
        }
    }
    return divideableByFifteen;
}



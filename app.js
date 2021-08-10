'use strict';

console.log("Results = " + GenerateAndReturnByFifteen() + " of the values are divideable by 15.");

function GenerateAndReturnByFifteen() {
    var divideableByFifteen = 0;

    let numberArray = [];

    //Generate values into the array
    for (let i = 0; i < 16; i++) {
        numberArray.push(Math.floor(Math.random() * 2200) - 1000);
    }

    //Sort the array descending
    numberArray.sort(function (a, b) { return b - a });
    for (let i = 0; i < numberArray.length; i++) {
        //Print value of current index
        console.log(numberArray[i]);
        //If the value is divideable by 15, increment the return value by 1
        if (numberArray[i] % 15 == 0) {
            divideableByFifteen++;
        }
    }
    return divideableByFifteen;
}



import minimist from 'minimist';
//Importing the functions
import {coinFlips, countFlips} from "./modules/coin.mjs";
//Get command line
const args = minimist(process.argv.slice(2)) || 1;
//if no arguement is given, flip once
if(args.number == null){
    var oneCoinFlip = coinFlips(1);
    console.log(oneCoinFlip);
    if (oneCoinFlip ==  ['tails']) {
        console.log('{ tails: 1 }');
    } else {
        console.log('{ heads: 1 }');
    }
}
//print out the array of flips and the count of heads and tails
let result = '['
if (args.number != null){
    function print(numberOfFlips){
        //go through the number of flips
        for (let iterator = 0; iterator < numberOfFlips.length; iterator++){
            //as long as there's an input
            if (iterator!= 0) {
              result += (`,`)
            }
            //add the result
            result +=(`'${numberOfFlips[iterator]}'`)
          }
    //close the result
    result += `]`
    //return the print array
    return result;
    }
//get the result
var flipResut = coinFlips(args.number);
//print the statements
console.log(print(flipResut))
console.log(countFlips(flipResut)) 
}


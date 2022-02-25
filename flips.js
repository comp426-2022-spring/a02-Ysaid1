import minimist from 'minimist';
//Importing the functions
import {coinFlips, countFlips} from "./modules/coin.mjs";
//Get command line
const args = minimist(process.argv.slice(2)) || 1;
//if no arguement is given, flip once
if(args.number == null){
    var oneCoinFlip = coinFlips(1);
    console.log(oneCoinFlip);
    if (oneCoinFlip ==  'tails') {
        console.log('{ tails: 1 }');
    } else {
        console.log('{ heads: 1 }');
    }
}
//print out the array of flips and the count of heads and tails
else {
    var flipResut = coinFlips(args.number);
    console.log(flipResut)
    console.log(countFlips(flipResut)) 
}


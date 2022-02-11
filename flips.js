import minimist from 'minimist';
//Importing the functions
import {coinFlips, countFlips} from "./modules/coin.mjs";
//Get command line
const args = minimist(process.argv.slice(2)) || 1;
//if no arguement is given, flip once
if(args.number == null || args.number == ''){
    var oneCoinFlip = coinFlips(1);
    if (oneCoinFlip ==  'tails' ) {
        delete oneCoinFlip['tails'];
        console.log(oneCoinFlip);
    } else {
        delete oneCoinFlip['heads'];
        console.log(oneCoinFlip);
    }
}
//print out the array of flips and the count of heads and tails
else {
    var flipResut =  coinFlips(args.number);
    console.log(flipResut)
    console.log(countFlips(flipResut)) 
}


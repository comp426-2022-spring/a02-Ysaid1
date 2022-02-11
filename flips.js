import minimist from 'minimist';
import { createRequire } from 'module';
//Importing the functions
import {coinFlips, countFlips} from "./modules/coin.mjs";
//Get command line
const require = createRequire(import.meta.url);
const args = require('minimist')(process.argv.slice(2));
args['number']
const numberToBeSelected = args.number;
//if no arguement is given, flip once
if (numberToBeSelected== null){
    //set the number of arguements to one
    args.number = 1;
}
//create an array to hold the number of flips given by command line
var arrayForFlips = coinFlips(args.number);
//print out the array of flips and the count of heads and tails
console.log(arrayForFlips)
console.log(countFlips(arrayForFlips))
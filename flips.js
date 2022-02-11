import minimist from 'minimist';
//Importing the functions
import {coinFlips, countFlips} from "./modules/coin.mjs";
//Get command line
const args = minimist(process.argv.slice(2))
//if no arguement is given, flip once
if (args.number == undefined){
    //set the number of arguements to one
    args.number = 1;
}
if (args.number == null || args.number ==''){
    console.log("Error: no input.");
}
//create an array to hold the number of flips given by command line
var arrayForFlips = coinFlips(args.number);
//print out the array of flips and the count of heads and tails
console.log(arrayForFlips)
console.log(countFlips(arrayForFlips)) 
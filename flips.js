import minimist from 'minimist';
//Importing the functions
import {coinFlips, countFlips} from "./modules/coin.mjs";
//Get command line
const args = minimist(process.argv.slice(2))
//create an array to hold the number of flips given by command line
var arrayForFlips = coinFlips(args.number);
//if no arguement is given, flip once
if (args.number == ''){
    //set the number of arguements to one
    args.number = 1;
}
    //print out the array of flips and the count of heads and tails
if (args.number == undefined || isNaN(args.number) == true){
    console.log("Error: no input.");
    console.log("Usage: node flips --call=(heads?|tails?)");
}
else { 
    console.log(arrayForFlips)
    console.log(countFlips(arrayForFlips)) 
}

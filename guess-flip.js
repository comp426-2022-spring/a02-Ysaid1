import minimist from 'minimist';
// Import the coinFlip function from your coin.mjs file
import { flipACoin } from "./modules/coin.mjs";
// Call the coinFlip function and put the return into STDOUT

//take command line input
const args = minimist(process.argv.slice(2))
//if arguement is not heads or tails or it is undefined or nothing print out an error
if (args.call != 'tails' && args.call != 'heads'){
    //set the number of arguements to one
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails]");
    //exit from the program
}
//if the command line is anything else check the result of the coin loss
else{
    //print out the result of the coin toss
    console.log(flipACoin(args.call))
}
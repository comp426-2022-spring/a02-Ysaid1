import minimist from 'minimist';
import { createRequire } from 'module';
// Import the coinFlip function from your coin.mjs file
import { flipACoin } from "./modules/coin.mjs";
// Call the coinFlip function and put the return into STDOUT
const require = createRequire(import.meta.url);
const args = require('minimist')(process.argv.slice(2));
args['number']
const flipCall = args.number;
//if arguement is not heads or tails or it is undefined or nothing print out an error
if ( flipCall == null || (flipCall!= 'tails' && flipCall != 'heads')){
    //set the number of arguements to one
    console.log("Error: Input incorrect or not present.\nUsage: node guess-flip --call=[heads|tails]")
    //exit from the program
    process.exit()
}
//if the command line is anything else check the result of the coin loss
else{
    //print out the result of the coin toss
    console.log(flipACoin(args.call))
}

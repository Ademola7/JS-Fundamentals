// This script expects two arguments to be passed when executed, e.g., node script.js arg1 arg2

// Access the command-line arguments.
// process.argv is an array where the first element is 'node',
// the second is the script file path, and subsequent elements are the arguments.
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Print the arguments in the format "arg1 is arg2" using template literals.
console.log(`${arg1} is ${arg2}`);

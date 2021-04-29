/* 
main.js: input integer to string form version program.
input (on argv): sequence of integers separated by comma (assuming correctly formatted and is a valid integer).
output (on stdOut): a sequence of words with each integer digit converted to its corresponding word form.

EX 1: 
input (on commandline): node main.js 3 25 209
output (on stdOut): Three,TwoFive,TwoZeroNine

EX 2:
input (on commandline): node main.js 10 300 5
output (on stdOut): OneZero,ThreeZeroZero,Five

Created by Guangchuan Tom Shang
*/

/*
Takes in a list of strings each corresponding to valid integers and prints those integers->stringName to stdOut.
Input: (Array) inputList: list of strings corresponding to valid integers.
Output: (stdOut) None: prints the string name of each integer digit.

EX:
main(["3", "25", "209"]) => (stdOut) "Three,TwoFive,TwoZeroNine" (automatically with no quotes when using .str)
main(["10", "300", "5"]) => (stdOut) "OneZero,ThreeZeroZero,Five" (automatically with no quotes when using .str)
*/
function main(inputList) {
    var output = ""; 
    for (var i = 0; i < inputList.length; i++) {
        // add a comma in between each word!
        if (i) {
            output += ","
        }
        output += helper(inputList[i]);
    }
    console.log(output);
}

/*
Takes in a string of digits and returns the string name of that string of digits.
Input: (String) inputString: string of digits.
Output: (String) string name of inputString.

EX: 
helper("3") => "Three"
helper("25") => "TwoFive"
helper("209") => "TwoZeroNine"
*/
function helper(inputString) {
    var output = "";
    for (var i = 0; i < inputString.length; i++) {
        output += intMap.get(inputString[i]);
    }
    return output;
}

/* Initializes global map object to translate a string integer to its respective word. */
let intMap = new Map();
intMap.set("0", "Zero");
intMap.set("1", "One");
intMap.set("2", "Two");
intMap.set("3", "Three");
intMap.set("4", "Four");
intMap.set("5", "Five");
intMap.set("6", "Six");
intMap.set("7", "Seven");
intMap.set("8", "Eight");
intMap.set("9", "Nine");

/* Uses stdIn and launches main funtion to execute program with appropriate array slice. */
main(process.argv.slice(2));
/*
Usage: Use else if or switch statements

Collect the a number between 1 and 100 from the user.
Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100 are accepted.
If the score is between 60 and 69, write out “You received a D” into the console.
If the score is between 70 and 79, write out “You received a C” into the console.
If the score is between 80 and 89, write out “You received a B” into the console.
If the score is between 90 and 100, write out “You received an A” into the console.
If the score is less than 60, write out “You received an F” into the console.

*/

let pickNum = parseInt(prompt("Pick a number from 1-100: "));

if (pickNum >= 90 &&  pickNum <= 100) {
    console.log('You received an A');
} else if (pickNum >= 80 &&  pickNum <= 89) {
    console.log('You received a B');
} else if (pickNum >= 70 &&  pickNum <= 79) {
    console.log('You received a C');
} else if (pickNum >= 60 &&  pickNum <= 69) {
    console.log('You received a D');
} else if (pickNum < 60) {
    console.log('You received an F');
} else {
    console.log('Unknown grade. Please pick a number between 1 and 100.');
}


//switch statement version

// let pickNum = parseInt(prompt("Pick a number from 1-100: "));


// switch (true) {
//     case (pickNum >= 90 &&  pickNum <= 100):
//         console.log('You received an A');
//         break;
//     case (pickNum >= 80 &&  pickNum <= 89):
//         console.log('You received a B');
//         break;
//     case (pickNum >= 70 &&  pickNum <= 79):
//         console.log('You received a C');
//         break;
//     case (pickNum >= 60 &&  pickNum <= 69):
//         console.log('You received a D');
//         break;
//     case (pickNum < 60):
//         console.log('You received an F');
//         break;
//     default:
//         console.log('Unknown grade. Please pick a number between 1 and 100');
// }


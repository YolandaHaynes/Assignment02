/*
Usage: Use simple conditional statements

Create an application that accepts two integers within two separate prompts. 
Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.

*/

let num1= parseInt(prompt("Enter the first number: "));

let num2= parseInt(prompt("Enter the second number: "));

if (num1 > num2) {
    document.write('The first number \"' + num1 + '\"is the largest number');
} else if (num2 > num1) {
    document.write('The second number \"' + num2 + '\"is the largest number');
} else {
    document.write('Both numbers \"' + num1 + "\" and \"" + num2 + '\"are equal numbers');
}




// // IF…ELSE & ELSE IF STATEMENT, 
// // TESTING SET OF CONDITIONS 

// //Assignment # 12-13
// /* 1. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).  */

// let char = prompt("Enter a character: ");

// let asciiCode = char;

// if (asciiCode >= 48 && asciiCode <= 57) {
//   document.write( char," is a digit ");
// } else if (asciiCode >= 65 && asciiCode <= 90) {
//     document.write( char, " is an uppercase letter.");
// } else if (asciiCode >= 97 && asciiCode <= 122) {
//     document.write( char," is a lowercase letter.");
// } else {
//     document.write(char," is a special character.");
// }

// /* ------------------------------------------------------------*/

// /*2. Write a JavaScript program that accept two integers and 
// display the larger. Also show if the two integers are equal. */

// let num1 = parseInt(prompt("Enter first integer: "));
// let num2 = parseInt(prompt("Enter second integer: "));

// if (num1 > num2) {
//   document.write( num1," is larger.");
// } else if (num1 < num2) {
//   document.write(num2," is larger.");
// } else {
//   document.write("Both integers are equal.");
// }

// /* ------------------------------------------------------------*/

// /* 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero. */

// let num = parseInt(prompt("Enter a number: "));

// if (num > 0) {
//     document.write(num , " is a positive number.");
// } else if (num < 0) {
//     document.write(num," is a negative number.");
// } else {
//     document.write(num ," is zero.");
// }
// /* ------------------------------------------------------------*/

// /*  Write a program that takes a character (i.e. string of 
// length 1) and returns true if it is a vowel, false otherwise */

// let char = prompt("Enter a character: ").toLowerCase();

// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//   console.log("True");
// } else {
//   console.log("False");
// }

// /* ------------------------------------------------------------*/
//  /*5. Write a program that 
// a. Store correct password in a JS variable. 
// b.  Asks user to enter his/her password 
// c.  Validate the two passwords: 
// i. 
// Check if user has entered password. If not, then 
// give message “ Please enter your password” 
// ii. 
// Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.*/

// let Password = "password123";
// let userInput = prompt("Enter your password: ");

// if (userInput === null || userInput === "") {
//   alert("Please enter your password");
// } else if (userInput === Password) {
//   alert("Correct! The password you entered matches the original password");
// } else {
//   alert("Incorrect password");
// }

/*-----------------------------------------------------------------------------*/

/*6. This if/else statement does not work. Try to fix it: 
var greeting; 
var hour = 13; 
if (hour < 18) { 
greeting = "Good day"; 
else 
greeting = "Good evening"; 
} */
// let greetInput = prompt("Enter a Greeting Hour: ")
// let greetHours = 13;

// if(greetHours < 18 ){
//     document.write("Good day"); 
// }
// else {
//     "Good evening"
// }

/* ------------------------------------------------------------------------------*/

/*7. Write a program that takes time as input from user in 24 
hours clock format like: 1900 = 7pm. Implement the 
following case using if, else & else if statements */


let time = prompt("Enter time in 24 hours format (HHMM): ");

if ( time == 1900){
    document.write(time , " = 7pm")
}
else if (time == 1300){
    document.write(time , " =  1pm")
}
else if (time == 1400){
    document.write(time , " = 2pm")
}
else if (time == 1500){
    document.write(time , " = 3pm")
}
else if (time == 1600){
    document.write(time , " = 4pm")
}
else if (time == 1700){
    document.write(time , " = 5pm")
}
else if (time == 1800){
    document.write(time , " = 6pm")
}
else if (time == 2000){
    document.write(time , " = 8pm")
}
else if (time == 2100){
    document.write(time , " = 9pm")
}
else if (time == 2200){
    document.write(time , " = 10pm")
}
else if (time == 2300){
    document.write(time , " = 11pm")
}
else if (time == 2400){
    document.write(time , " = 12am")
}
else{
    document.write("invalid time")
}
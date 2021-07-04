// Assignment code here
function generatePassword() {

}

// make array of all characters to be used
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

//array place holders
var responseArray = [];

var clientArray = [];

// Password generator specificty

var amountCharacters = prompt("How many numbers between 8 and 128 do you want in your passowrd?");
var numberAmount = confirm("Would you like numbers included in your password?");
var upperCase = confirm("Would you like uppercase characters in your password?");
var lowerCase = confirm("Would you like lower case characters in your password?");
var specialCharacters = confirm("Would you like Special Characters in your password?");




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
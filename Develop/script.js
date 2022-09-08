// Skylar's Password generator will provide passwords with lengths from 8 charcters to 128 the user specifies length and complexity.

// event listner for when is button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

//  Arrays of characters 
var numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var superspecialChar = ["$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$","$"];
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// declare variables
var confirmLength = "";
var confirmUpperCase;
var confirmLowerCase;
var confirmSpecCharacter;
var confirmSuperSpecialCharacter;
var confirmNumericCharacter;


 // verify user is crazy 
 alert(`You're using a password generator created by a fourth week DU coding bootcamp student. apply passwords at your own risk`);
// prompt for length
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain? any 8 to 128. I would use as many charecters as you're allowed."));

  // Loop if answer to small or large
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters please try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

      // verify legth 
      alert(`You've chosen ${confirmLength} characters!`);

    // password options verification 
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters"); 
    var confirmSpecCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var confirmSuperSpecialCharacter = confirm("Click OK to confirm if you would like to include Super special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
      // Loop if  has no options selected
     
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecCharacter === false && confirmSuperSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters"); 
        var confirmSpecCharacter = confirm("Click OK to confirm if you would like to include special characters");
        var confirmSuperSpecialCharacter = confirm("Click OK to confirm if you would like to include Super special characters");
        var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
    } 
    // Loop if only superSpecialchar is selected
    while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecCharacter === false && confirmSuperSpecialCharacter === true && confirmNumericCharacter === false) {
      alert("That is very cash money of you but, you should choose at least one more parameter");
      var confirmSpecCharacter = confirm("Click OK to confirm if you would like to include special characters");
      var confirmSuperSpecialCharacter = confirm("Click OK to confirm if you would like to include Super special characters");
      var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
      var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
      var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
  } 


      // Assign an action to the password parameters
      var passwordCharacters = []
      
    if (confirmSpecCharacter) {
      passwordCharacters = passwordCharacters.concat(specChar)
    }

    if (confirmSuperSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(superspecialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(numerals)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(letterLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(letterUpper)
    }

      console.log(passwordCharacters)

      // for loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// show password in #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowers = 'abcdefghijklmnopqrstuvwxyz';
var nums = '0123456789';
var specials = '@%+\/!#$^?:(){}[]~-_.';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  
  var passlength = prompt("Password length between 8 and 128");
  while ((passlength < 8)  || (passlength > 128) || (isNaN(passlength))){
    passlength = prompt("Invalid length selected.  Password length between 8 and 128");
  }
  var categories = 0;

  var lowercase = confirm("Lowercase characters required true/false");
  if(lowercase == true)
    categories++;

  var uppercase = confirm("Uppercase characters required true/false");
  if(uppercase == true)
    categories++;

  var numero = confirm("Numeric characters required true/false");
  if(numero == true)
    categories++;

  var special = confirm("Special characters required true/false");
  if(special == true)
    categories++;

  var allocated = Math.floor(passlength/categories);
  let passphrase = '';
  var mystart = 0;
  
  if(lowercase == true){
    for(let k = mystart; k < allocated; k++){
      passphrase += lowers.charAt(Math.floor(Math.random() * lowers.length));
    }
    mystart += allocated;
    if((uppercase == false) && (numero == false) && (special == false)){
      for(let m = mystart; m < passlength; m++)
      {
        passphrase += lowers.charAt(Math.floor(Math.random() * lowers.length));
      }
    }
  }

  if(uppercase == true){
    for(let n = mystart; n < (allocated + mystart); n++){
      passphrase += uppers.charAt(Math.floor(Math.random() * uppers.length));
    }
    mystart += allocated;
    if((numero == false) && (special == false)){
      for(let p = mystart; p < passlength; p++)
      {
        passphrase += uppers.charAt(Math.floor(Math.random() * uppers.length));
      }
    }
  }

  if(numero == true){
    for(let q = mystart; q < (allocated + mystart); q++){
      passphrase += nums.charAt(Math.floor(Math.random() * nums.length));
    }
    mystart += allocated;
    if(special == false){
      for(let r = mystart; r < passlength; r++)
      {
        passphrase += nums.charAt(Math.floor(Math.random() * nums.length));
      }
    }
  }

  if(special == true){
    for(let t = mystart; t < passlength; t++){
      passphrase += specials.charAt(Math.floor(Math.random() * specials.length));
    }
  }
  return passphrase;
}

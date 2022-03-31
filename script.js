// Start your code ***HERE*** =========
password=document.getElementById("password");
function genPassword() {
// create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable
let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// create a global variable called "pwLength" with a number between 10 and 18
let passwordLength = 12;
    let password = "";
    for (let i = 0; i <= passwordLength; i++) {
// Using the above array and password length variable, create a random password using a for loop inside of a function called "addNewPassword" either saved as an arrow function variable or a traditional function
let randomNumber = Math.floor(Math.random() * chars.length);
password += chars.substring(randomNumber, randomNumber +1);
}
  document.getElementById("password").value = password;

}// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
    document.getElementById("password").value = addNewPassword();
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======


    
    
     
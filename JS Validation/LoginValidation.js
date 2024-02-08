//Validation Switch
CheckReqs = (Boolean,classList) => {
  if(Boolean === true){
    classList.remove("invalid");
    classList.add("valid");
}else {
    classList.remove("valid");
    classList.add("invalid");
}
}

//USERNAME CHECK
let myUsername = document.getElementById("username");
let noSpecial = document.getElementById("noSpecial");
let uLength = document.getElementById("uLength");

myUsername.onkeyup = function() {
  noSpecial.classList = 'valid';
  uLength.classList = 'invalid';

  //Special Char Validation
  const specialChars = /[`!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/g;
  myUsername.value.match(specialChars) ? CheckReqs(false,noSpecial.classList) : CheckReqs(true,noSpecial.classList);

  //Length Validation
  myUsername.value.length >= 6 ? CheckReqs(true,uLength.classList) : CheckReqs(false,uLength.classList);
}

// When the user clicks on the username field, show the message box
myUsername.onfocus = () => document.getElementById("uMessage").style.display = "block";

// When the user clicks outside of the username field, hide the message box
myUsername.onblur = () => document.getElementById("uMessage").style.display = "none";


//PASSWORD CHECK
let myInput = document.getElementById("psw");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let special = document.getElementById("special");
let length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = () => document.getElementById("message").style.display = "block";

// When the user clicks outside of the password field, hide the message box
myInput.onblur = () => document.getElementById("message").style.display = "none";

myInput.onkeyup = function() {
  letter.classList = 'invalid';
  number.classList = 'invalid';
  special.classList = 'invalid';
  capital.classList = 'invalid';
  length.classList = 'invalid';
    for (let i = 0; i < myInput.value.length; i++) {
        const char = myInput.value[i];

        //Uppercase Validation
        if (char >= 'A' && char <= 'Z') {
          CheckReqs(true,capital.classList);
        } 

        //Lowercase Validation
        else if (char >= 'a' && char <= 'z') {
          CheckReqs(true,letter.classList);
        } 
        
        //Number Validation
        else if (char >= '0' && char <= '9') {
          CheckReqs(true,number.classList);
        } 
        
        //Special Char Validation
        else {
          CheckReqs(true,special.classList);
      }

      if (myInput.value.length >= 8) CheckReqs(true,length.classList);
    }
}

// CheckUsername = username => {
//   for (let i = 0; i < username.length; i++) {
//     const char = username[i];
//     if (char >= 'A' && char <= 'Z') {
//       hasUppercase = true;
//     } else if (char >= 'a' && char <= 'z') {
//       hasLowercase = true;
//     } else if (char >= '0' && char <= '9') {
//       hasNumber = true;
//     } else {
//       hasSpecialCharacter = true;
//     }
//   }
// }


/*
// When the user starts to type something inside the password field
myInput.onkeyup = () => {
  // Validate lowercase letters
  const lowerCaseLetters = /[a-z]/g;
    myInput.value.match(lowerCaseLetters) ? CheckReqs(true,letter.classList) : CheckReqs(false,letter.classList);
  
  // Validate capital letters
  const upperCaseLetters = /[A-Z]/g;
    myInput.value.match(upperCaseLetters) ? CheckReqs(true,capital.classList) : CheckReqs(false,capital.classList);

  // Validate numbers
  const numbers = /[0-9]/g;
  myInput.value.match(numbers) ? CheckReqs(true,number.classList) : CheckReqs(false,number.classList);

  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
  myInput.value.match(specialChars) ? CheckReqs(true,special.classList) : CheckReqs(false,special.classList);

  // Validate length
  myInput.value.length >= 8 ? CheckReqs(true,length.classList) : CheckReqs(false,length.classList);
}
*/

let userList = new Set();
let Users = [[" "],[" "]];
let userInput = "";

//Arrow Function to ADD User
document.getElementById("addButton").addEventListener("click", () =>
{
    userInput = myUsername.value;
    if(letter.classList=="invalid" || number.classList=="invalid" || capital.classList=="invalid" || special.classList=="invalid" || length.classList=="invalid")
    {
        alert("Password Invalid. Please try again.");
    }
    else if (uLength.classList=="invalid" || noSpecial.classList=="invalid")
    {
      alert("Username Invalid. Please try again.");
  }
    else if((userList.size < userList.add(userInput).size) &&  (uLength.classList=="valid" && noSpecial.classList=="valid")  && (letter.classList=="valid" && number.classList=="valid" && special.classList=="valid" && capital.classList=="valid" && length.classList=="valid"))
    {
        userList.add(userInput);
        for (let a = 0; a<Users[0].length; a++)
        {
            if (a===0)
            Users[a].push(userInput);
            else if (a===1)
            Users[a].push(myInput.value);
        }
        alert ("User Added");
    }
    else
    {
        alert("Username Already Taken. Please Try Again.")
    }

        let allUsers = userList.values();
        let names = "";
        for (let uname of allUsers) 
        {
            names += uname + ", ";
        }

    document.getElementById("userlist").textContent = names;
});

//Arrow Function to VALIDATE User
document.getElementById("validateButton").addEventListener("click", () =>
{
    userInput = myUsername.value;
    var index;
    for (var e of Users[0])
    {
        if(e === userInput)
        index = Users[0].indexOf(e);
    }

    if((userList.has(userInput))&&(userInput===Users[0][index])&&(myInput.value===Users[1][index]))
    alert ("User is VALID. ^^d")

    else if (!(userList.has(userInput)))
    alert ("User DOES NOT EXIST! T^T")
    else
    alert ("Incorrect Password! >.<")
});

//Arrow Function to CLEAR textbox
document.getElementById("clearButton").addEventListener("click", () =>
{
    myUsername.value = "";
    myInput.value = "";
    letter.classList = 'invalid';
    number.classList = 'invalid';
    special.classList = 'invalid';
    capital.classList = 'invalid';
    length.classList = 'invalid';
    myUsername.value = "";
    noSpecial.classList = 'invalid';
    uLength.classList = 'invalid'
});
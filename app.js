/*
Create an application that generates a random password based on user-selected criteria. 
This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code.
The user will be prompted to choose from the following password criteria:

Length (must be between 8 and 128 characters)

Character type:
    Special characters (see examples)
    Numeric characters
    Lowercase characters
    Uppercase characters
*/

// global variables

var password = "";

const specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const numericChars = "0123456789";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


// TODO => BUG:
// if "<", "%", or any HTML code is at the beginning/middle of the password then gets replaced in innerHTML,
// the browser engine will recognize it as an unfinished HTML tag/code which it will display nothing => Bug
function generateRandPassword() {
    var length = prompt("How many characters should the Passwor be", "8-128");
    while(length < 8) {
        window.alert("Enter a number larger than 8");
        length = prompt("How many characters should the Passwor be", "8-128");
    }

    console.log("Length is ", length);

    /*
    Generate password based on criterias:
        special, numeric, lowercase, uppercase chars
    */
    var subChar = 0;
    for(var i = 0; i < length; i++) {
        var rand = getRandomInt(4);
        console.log("random number is", rand, "in iteration", i);
        switch(rand){
            // special char
            case 0:
                subChar = getRandomInt(specialChars.length + 1);
                password += specialChars.charAt(subChar);
                break;
            // numeric char
            case 1:
                subChar = getRandomInt(numericChars.length + 1);
                password += numericChars.charAt(subChar);
                break;
            // lowercase char
            case 2:
                subChar = getRandomInt(lowercaseChars.length + 1);
                password += lowercaseChars.charAt(subChar);
                break;
            // uppercase char
            case 3:
                subChar = getRandomInt(uppercaseChars.length + 1);
                password += uppercaseChars.charAt(subChar);
                break;
            default:
                console.error("Something went wrong");
                throw "Error: rand is generating numbers bigger than 3";
        }
    }
    
    console.log("The password is", password); 

    document.getElementById("passwordText").innerHTML = password.toString();
    
}

function getRandomInt(maxNum) {
    return Math.floor(Math.random() * Math.floor(maxNum));
}

function copyText(){
    var cpText = document.getElementById("passwordText");
    /*selects text to copy*/
    console.log(cpText.innerHTML);
    cpText.select();
    //cpText.setSelectionRange(0, 99999); //for mobile

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + cpText.value);
}
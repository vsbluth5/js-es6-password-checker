console.log("RUNNING");

const basicPasswordCheck = password => {
  if (password.length < 10) {
    return `${password} is too short`;
  } else {
    return `${password} is valid`;
  }
};

console.log(basicPasswordCheck("hello")); // Returns "This password is too short"
console.log(basicPasswordCheck("thisisalongpassword")); // Returns "This is a valid password"

const confirmUncommonPassword = password => {
  password = password.toLowerCase();
  if (password.includes("abcd1234") || password.includes("password")) {
    return false;
  }
  return true;
};

console.log(confirmUncommonPassword("abcd1234")); // Returns false
console.log(confirmUncommonPassword("Password123")); // Returns false
console.log(confirmUncommonPassword("UniqueElephant7")); // Returns true

const confirmSamePasswords = (password1, password2) => {
  return password1 == password2;
};

console.log(confirmSamePasswords("donut2AreDeliciou3!", "donut2AreDeliciou3!")); // Returns true
console.log(confirmSamePasswords("Dogs&CatsRGr8", "IlikePeanutButter")); // Returns false

/*
function called checkInvalidCharacters that checks 
to see if a string contains any of the following 
invalid characters: (a space), !, @, #, or $. 
If the string contains one of those characters, 
it should return true. If the string doesn't 
contain one of those characters, it should return false.
*/
const checkInvalidCharacters = password => {
  return (
    password.includes(" ") ||
    password.includes("!") ||
    password.includes("@") ||
    password.includes("#") ||
    password.includes("*") ||
    password.includes("(") ||
    password.includes(")")
  );
};

console.log(checkInvalidCharacters("batman and robin")); // Returns true
console.log(checkInvalidCharacters("jokerAndPenguin")); // Returns false

const requireSpecialCharacters = password => {
  const specials = "!@#$%^_ -";
  let count = 0;
  for (const symbol of password) {
    for (const special of specials) {
      if (symbol == special) {
        count += 1;
      }
    }
  }
  console.log(count)
  return count >= 2;
};

console.log(requireSpecialCharacters("mighty-Morphin_p0wer Rangers!")); // Returns true
console.log(requireSpecialCharacters("hereWeG0!")); // Returns false
console.log(requireSpecialCharacters("ohnoanotherbadguy")); // Returns false

/*
a function called mediumPasswordGenerator that g
enerates a random password and takes in two arguments: 
  the total length of the password and the number of special characters 
  (see #5) the password should have. 
If the second argument is greater than the first, the function should return false.
*/
const shuffle = (myString) => {
  let newString = myString;
  for (let k = myString.length-1; k > 0; k--){
    const pos = Math.floor(Math.random()*(k-1))
    newString = newString.substring(0,pos)+newString[k]+newString.substring() 
  }
}


const mediumPasswordGenerator = (num, numSpecials) => {
  const alphanums = "abcdefghijklmnopqrstuvwxyz0123456789"
  const specials = "!@#$%^_ -";
  if (numSpecials > num) {
    return false;
  }
  for (let i = 0; i < num; i++) {
    
  }
  
} 

mediumPasswordGenerator(5, 2) 
// Returns "a&g$c" or "BU#7!" or "^%876" or any other 5 character string with two special characters.
mediumPasswordGenerator(7, 10) // Returns false
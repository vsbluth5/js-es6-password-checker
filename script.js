console.log("RUNNING")

const basicPasswordCheck = (password)=> {
  if (password.length < 10) {
    return `${password} is too short`
  } else {
    return `${password} is valid`
  }
}

console.log(basicPasswordCheck("hello")) // Returns "This password is too short"
console.log(basicPasswordCheck("thisisalongpassword")) // Returns "This is a valid password"


const confirmUncommonPassword=(password)=>{
  password = password.toLowerCase()
  if (password.includes("abcd1234") || password.includes("password")){
    return false
  }
  return true;
}

console.log(confirmUncommonPassword("abcd1234")) // Returns false
console.log(confirmUncommonPassword("Password123")) // Returns false
console.log(confirmUncommonPassword("UniqueElephant7")) // Returns true

const confirmSamePasswords = (password1, password2)=>{
  return password1==password2
}


console.log(confirmSamePasswords("donut2AreDeliciou3!", "donut2AreDeliciou3!")) // Returns true
console.log(confirmSamePasswords("Dogs&CatsRGr8", "IlikePeanutButter")) // Returns false

/*
function called checkInvalidCharacters that checks 
to see if a string contains any of the following 
invalid characters: (a space), !, @, #, or $. 
If the string contains one of those characters, 
it should return true. If the string doesn't 
contain one of those characters, it should return false.
*/
const checkInvalidCharacters = (password) => {
  if (password.co)
}

console.log(checkInvalidCharacters("batman and robin")) // Returns true
console.log(checkInvalidCharacters("jokerAndPenguin")) // Returns false
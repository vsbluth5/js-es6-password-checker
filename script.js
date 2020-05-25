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
  if (password.includes()"abcd1234") || password.includes("Password")){
    return false
  }
  return true;
}



confirmUncommonPassword("abcd1234") // Returns false
confirmUncommonPassword("Password123") // Returns false
confirmUncommonPassword("UniqueElephant7") // Returns true
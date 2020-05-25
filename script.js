console.log("RUNNING")

const basicPasswordCheck = (password)=> {
  if (password.length <= 5) {
    return `${password} is too short`
  } else {
    return `${password} is too short```
  }
}


console.log(basicPasswordCheck("hello")) // Returns "This password is too short"
basicPasswordCheck("thisisalongpassword") // Returns "This is a valid password"
function isPalindrome(word) {
  // Write your algorithm here
  const arrayOfString = word.split('')
  let stringReversed = arrayOfString[arrayOfString.length - 1]
  debugger
  for (let i = arrayOfString.length - 2; i > -1; i--){
    stringReversed += arrayOfString[i]
    debugger
  }

  if (word === stringReversed){
    return true
  }
  else{
    console.log(stringReversed)
    return false
  }


}
isPalindrome("racecar")
/* 
  Add your pseudocode here
  split string into array
  for loop counting down by the length of the array{
    take last element of array, and push it into a new string until fully populated
  }
  check if new string matches old string
  return true/false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    //Use for loop to iterate over each item
    //n steps 
    const comp = target - array[i]
    //for the current number, look for compliment that adds up to targer num (comp = target - current num)
    //n * n steps (nested loop)
    for (let j = i + 1; j < array.length; j++) {
      //iterate through rest of the array
      if (array[j] === comp) {
        return true
      }
    }
  }
  // 1 step
  return false
}

/* 
  O(n^2) time complexity
  O(n) space complexity
*/

/* 
Use for loop to iterate over each item
  for the current number, look for compliment that adds up to targer num (comp = target - current num)
  iterate through rest of the array
    check if num is the compliment
    if so, return true
    else, return false

*/

/*
  The code will return true if any pair of the numbers will add up to the target number.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: false")
  console.log("=>", hasTargetSum([5, 10, 15, 20], 32))
}

module.exports = hasTargetSum;

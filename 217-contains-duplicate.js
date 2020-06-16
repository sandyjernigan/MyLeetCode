/**
 * @param {number[]} nums
 * @return {boolean}
 * 
  Example 1:

  Input: [1,2,3,1]
  Output: true

  Example 2:

  Input: [1,2,3,4]
  Output: false

  Example 3:

  Input: [1,1,1,3,3,4,3,2,4,2]
  Output: true
 */
let nums = []

nums = [1,2,3,1]
var containsDuplicate = function(nums) {
  // interate over array
  while (nums.length > 0) {
      // pop item off array
      let checkNum = nums.shift()
      // is popped item still in array
      if (nums.includes(checkNum)) { return true }
  }
  return false
};
console.log(containsDuplicate(nums))

// Another Solution

nums = [1,2,3,1]
var containsDuplicate2 = function(nums) {
  // Get length of array
  // Check length against the size of the Set (set will only display unique values)
  return !(nums.length == new Set(nums).size);
};
console.log(containsDuplicate2(nums))



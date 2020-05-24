/*
  1. Two Sum
  Easy

  Given an array of integers, return indices of the two numbers such that they add up to a specific target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Example:

  Given nums = [2, 7, 11, 15], target = 9,

  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1].

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 
var twoSum = function(nums, target) {
  // return 2 numbers from array to add up to target
  // interate over the array of numbers for the first number
  for (i = 0; i < (nums.length - 1); i++) {
    // interate again for the second number (cannot be the same as i)
    for (j = i + 1; j < nums.length; j++) {
      // get 2 numbers, check if equal to target
      if (nums[i] + nums[j] == target) {
        return [nums[i], nums[j]]
      }
    }
  }
  // no result will return undefined
};


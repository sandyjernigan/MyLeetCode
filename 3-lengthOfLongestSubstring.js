/*  Code from leetcode.com - Please visit leetcode to test your own skills!
    https://leetcode.com/problems/longest-substring-without-repeating-characters/ 
    
    3. Longest Substring Without Repeating Characters
    Medium

    Given a string, find the length of the longest substring without repeating characters.

    Example 1:

    Input: "abcabcbb"
    Output: 3 
    Explanation: The answer is "abc", with the length of 3. 

    Example 2:

    Input: "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

    Example 3:

    Input: "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3. 
                Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

/**
 * @param {string} s
 * @return {number}
 */

 // Test cases
example1 = "abcabcbb" // excepted output 3
example2 = "bbbbb" // excepted output 1
example3 = "pwwkew" // excepted output 3
example4 = " " // excepted output 1 -- space is counted as a character?
example5 = "" // excepted output 0
example6 = "dvdf" // excepted output 3

var lengthOfLongestSubstring = function(s) {

  // This returns a subsequence not substring
  // let newString = new Set(s)
  // return newString.size

  // Start and end substring pointers
  let start = 0
  // variable for string
  let newString = s.charAt(0)
  // variable for string to check
  let checkString = s.charAt(0)

  // Loop thru String
  for (i = 1; i < (s.length); i++) {

    // Get the string to check
    checkString = s.substring(start, i)

    console.log(start + " " + i + " " + checkString)
    console.log(s.charAt(i))

    // Check if character to check is in the test string
    if (checkString.includes(s.charAt(i))) {
      start = i
      checkString = s.charAt(i)
    } else {
      checkString = s.substring(start, i + 1)
      console.log(checkString)
    }

    // check if longest string    
    if (newString.length < checkString.length) {
      newString = checkString
      console.log (newString)
    }
  }

  // Return the length of the longest substring
  return newString.length

};

// console.log(lengthOfLongestSubstring(example1))
// console.log(lengthOfLongestSubstring(example2))
// console.log(lengthOfLongestSubstring(example3))
// console.log(lengthOfLongestSubstring(example4))
// console.log(lengthOfLongestSubstring(example5))
console.log(lengthOfLongestSubstring(example6))
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
example7 = "aab" // excepted output 2

var lengthOfLongestSubstring = function(s) {
  // variables
  let start = 0
  let checkString = s.charAt(0)
  // let checkArray = []
  let checkSet = new Set()
  let longestString = ""

  // Check if initial string has any characters
  if (s.length == 0) { return 0 }

  // Loop thru String
  for (i = 1; i < (s.length + 1); i++) {
    // Get the string to check
    checkString = s.substring(start, i)
    checkSet = new Set (checkString)
    // Check String to see if all characters are unique
    if (checkString.length != checkSet.size) {
      // if not unique move start up 1 character
      start += 1
    } else {
      // check if longest
      if (longestString.length < checkString.length) {
        longestString = checkString
      }
      // push all unique strings to array
      // checkArray.push(checkString)
    }
  }

  // Check array of unique strings for longest
  // let longestString = checkArray.reduce((r, e) => r.length < e.length ? e : r);
  console.log(longestString)

  // Return the length of the longest substring
  return longestString.length

};

console.log(lengthOfLongestSubstring(example1)) // excepted output 3
console.log(lengthOfLongestSubstring(example2)) // excepted output 1
console.log(lengthOfLongestSubstring(example3)) // excepted output 3
console.log(lengthOfLongestSubstring(example4)) // excepted output 1
console.log(lengthOfLongestSubstring(example5)) // excepted output 0
console.log(lengthOfLongestSubstring(example6)) // excepted output 3
console.log(lengthOfLongestSubstring(example7)) // excepted output 2
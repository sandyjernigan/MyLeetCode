/*
  2. Add Two Numbers
  Medium

  You are given two non-empty linked lists representing two non-negative integers. 
  The digits are stored in reverse order and each of their nodes contain a single digit. 
  Add the two numbers and return it as a linked list.

  You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  Example:

  Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
  Output: 7 -> 0 -> 8
  Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 
var addTwoNumbers = function(l1, l2, remainder = 0, resultsNode = null) {
    
  // Set values
  let val1 = 0
  let val2 = 0
  if (l1 != null) { val1 = l1.val }
  if (l2 != null) { val2 = l2.val }
  
  // Get sum of the 2 values in the list node
  let sum = val1 + val2 + remainder

  // reset remainder 
  remainder = 0

  // if sum is 2 digits, get remainder
  if (sum >= 10) {
      remainder =  Math.floor(sum / 10)
      sum = sum - (remainder * 10)
  }

  // add new List Node to results Node
  let newNode = new ListNode(sum, null)

  // find last node
  let lastNode = null
  
  // check if resultsNode is not null
  if (resultsNode != null) {        
      // get last node
      lastNode = resultsNode
      while (lastNode.next != null) {
          lastNode = lastNode.next
      }
      lastNode.next = newNode
  } else {
      // if results is null, then setup first node
      resultsNode = newNode
  }

  // Go to next list item in both lists
  let nextNode1 = null
  if (l1 != null) { nextNode1 = l1.next }
  
  let nextNode2 = null
  if (l2 != null) { nextNode2 = l2.next }
      
  if (nextNode1 != null || nextNode2 != null) {
      addTwoNumbers(nextNode1, nextNode2, remainder, resultsNode)
  } else {
      // if at last node, check if remainder exists
      if (remainder > 0) {
          newNode.next = new ListNode(remainder, null)
      }
  }
  
  return resultsNode
  
};
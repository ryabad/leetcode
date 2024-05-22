/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
    (img/206/1.png)
    Input: head = [1,2,3,4,5]
    Output: [5,4,3,2,1]

Example 2:
    (img/206/2.png)
    Input: head = [1,2]
    Output: [2,1]

Example 3:
    Input: head = []
    Output: []

Constraints:
    The number of nodes in the list is the range [0, 5000].
    -5000 <= Node.val <= 5000
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function reverseList(head) {
  let current = head;
  let prev = null;

  while (current) {
    let saveNext = current.next;
    current.next = prev;
    prev = current;
    current = saveNext;
  }

  return prev;
}

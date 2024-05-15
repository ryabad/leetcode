/*
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.

Example 1:
    (img/876/1.png)
    Input: head = [1,2,3,4,5]
    Output: [3,4,5]
    Explanation: The middle node of the list is node 3.

Example 2:
    (img/876/2.png)
    Input: head = [1,2,3,4,5,6]
    Output: [4,5,6]
    Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

Constraints:
    The number of nodes in the list is in the range [1, 100].
    1 <= Node.val <= 100
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
function middleNode(head) {
  let counter = 0;
  let current = head;

  while (current) {
    counter++;
    current = current.next;
  }

  let middle = counter % 2 !== 0 ? Math.ceil(counter / 2) : counter / 2 + 1;

  current = head;
  counter = 0;
  while (current) {
    counter++;
    if (counter === middle) {
      return current;
    }

    current = current.next;
  }
}

//2nd solution
function middleNode2nd(head) {
  var slow = head;
  var fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

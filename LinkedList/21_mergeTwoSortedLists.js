/*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Example 1:
    (img/21/1.png)
    Input: list1 = [1,2,4], list2 = [1,3,4]
    Output: [1,1,2,3,4,4]

Example 2:
    Input: list1 = [], list2 = []
    Output: []

Example 3:
    Input: list1 = [], list2 = [0]
    Output: [0]
 
Constraints:
    The number of nodes in both lists is in the range [0, 50].
    -100 <= Node.val <= 100
    Both list1 and list2 are sorted in non-decreasing order.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function mergeTwoLists(list1, list2) {
  let dummy = new ListNode();
  let mergedList = dummy;

  let current1 = list1;
  let current2 = list2;

  while (current1 && current2) {
    if (current1.val < current2.val) {
      mergedList.next = current1;
      current1 = current1.next;
    } else {
      mergedList.next = current2;
      current2 = current2.next;
    }

    mergedList = mergedList.next;
  }

  if (current1) {
    mergedList.next = current1;
  }

  if (current2) {
    mergedList.next = current2;
  }

  return dummy.next;
}

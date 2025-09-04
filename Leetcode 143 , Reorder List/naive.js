/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head.next || !head.next.next) return head;
    let t = head;
    let arr = [];
    while (t) {
        arr.push(t);
        t = t.next;
    }
    let i = 0;
    let j = arr.length - 1;
    let newHead = head;
    newHead.next = arr[j];
    i++;
    j--;
    let newTemp = newHead.next;
    while (i <= j) {
        newTemp.next = arr[i];
        newTemp = newTemp.next;
        newTemp.next = arr[j];
        newTemp = newTemp.next;
        i++;
        j--;
    }
    newTemp.next = null;//to avoid list making cycles as new last node is not the orignal list's last node
};
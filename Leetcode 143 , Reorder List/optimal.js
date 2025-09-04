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
function reverse(head) {
    if (!head || !head.next) return head;
    let t = head;
    let p = null;
    let n = head.next;
    while (n) {
        t.next = p;
        p = t;
        t = n;
        n = n.next;
    }
    t.next = p;
    return t;
}
var reorderList = function (head) {
    if (!head.next || !head.next.next) return head;
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    //now slow is at mid
    //reverse from slow.next to tail
    let newHead = reverse(slow.next);
    slow.next = null;
    let t = head;
    let n = head.next;
    let t2 = newHead;
    let n2 = newHead.next;
    while (n && n2) {
        t.next = t2;
        t2.next = n;
        t = n;
        n = n.next;
        t2 = n2;
        n2 = n2.next;
    }
    //join the remaining t2 node
    t.next = t2;
    t2.next = n;
    return head;
};
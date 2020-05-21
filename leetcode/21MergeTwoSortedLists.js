// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4
var mergeTwoLists = function(l1, l2) {
let res = new ListNode() 
    let curr = res
    
    while(l1 && l2) {
        if (l1.val >= l2.val) {
            curr.next = l2
            l2 = l2.next
        } else if (l2.val > l1.val) {
            curr.next = l1
            l1 = l1.next
        }
        curr = curr.next
    }
    curr.next = l1 === null ? l2 : l1
    return res.next
    
};
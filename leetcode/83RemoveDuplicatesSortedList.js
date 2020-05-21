//Given a sorted linked list, delete all duplicates such that each element appear only once.

// Example 1:

// Input: 1->1->2
// Output: 1->2


var deleteDuplicates = function(head) {
    
  let p1 = head
  
  if (!p1 || !p1.next) return head
  
  // Input: 1 -> 2 -> 2 -> 3
  
  while(p1.next) {
      if (p1.val == p1.next.val) {
          p1.next = p1.next.next
      } else {
          p1 = p1.next
      }
  }
  return head


};
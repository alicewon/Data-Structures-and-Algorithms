var Node = function(data) {
  this.data = data
  this.next = null
}

function insertNodeAtTail(head, data) {

  if(head === null) {
      return new Node(data)
  }

  let current = head
  while (current.next !== null) {
      current = current.next

  } 
  current.next = new Node(data)
  return head
}
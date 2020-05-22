function printLinkedList(head) {
  if (head == null) {
      return
  }

  while (head !== null) {
      console.log(head.data)
      head = head.next
  }
return
}
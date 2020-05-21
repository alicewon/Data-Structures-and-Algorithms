/** Class representing a Linked List */

class LinkedList {

  constructor(value) {
    this.head = {value, next: null}
    this.tail = this.head
  }
  /*
  * Inserts a new value to the end of the linked list
  * @param {*} value - the value to insert
  */
  insert(value) {
    //update tail as needed
    const node = {value, next: null}
    //sets tail's next value to newly created node:
    this.tail.next = node
    // sets this list's tail to the truly last node. previous tail is not the tail anymore:
    this.tail = node 

  }
  /*
  * Deletes a node
  * @param {*} node - the node to remove
  * @return {*} value - the deleted node's value
  */
  remove() {

  }
  /*
  * Removes the value at the end of the linked list
  * @return {*} - the removed value
  */
// {
//   head: {value: 1, next: {value: 2, next: null}}
//   tail: {value: 2, next: null}
// }
  removeTail() {
    //loop and find node before tail
    // node.next === this.tail
    let currentNode = this.head
    while(currentNode.next !== this.tail){
      currentNode = currentNode.next
    }
    currentNode.next = null
    this.tail = currentNode
    // delete the last node
    // set the now-true tail's next: null
    // re assign tail
    
  }
  /*
  * Searches the linked list and returns true if it contains the value passed
  * @param {*} value - the value to search for
  * @return {boolean} - true if value is found, otherwise false
  */
  contains(value) {
    //check for value, not node
    let currentNode = this.head
    while(currentNode.value !== value){
      currentNode = currentNode.next
    }
    return currentNode.value === value
  }  
  /*
  * Checks if a node is the head of the linked list 
  * @param {{prev:Object|null, next:Object|null}} node - the node to check
  * @return {boolean} - true if node is the head, otherwise false
  */
  isHead(node) {
    return node === this.head
  }
  /*
  * Checks if a node is the tail of the linked list 
  * @param {{prev:Object|null, next:Object|null}} node - the node to check
  * @return {boolean} - true if node is the tail, otherwise false
  */
  isTail(node) {
    return node === this.tail
  }
}

const myList = new LinkedList(1); //initiate?


// {
//   head: {value: 1, next: null}
//   tail: {value: 1, next: null}
// }

myList.insert(2)

// {
//   head: {value: 1, next: {value: 2, next: null}}
//   tail: {value: 2, next: null}
// }

myList.insert(3)


// {
//   head: {value: 1, next: {value: 2, next: {value: 3, next: null}}}
//   tail: {value: 3, next: null}
// }

// console.log(myList);
// myList.removeTail();
// console.log(myList);
// myList.removeNext(prevNode)

function removeNext(list, prevNode) {

}
// {
//   head: {value: 1, next: {value: 2, next: null}}
//   tail: {value: 2, next: null}
// }
myList.removeTail()
console.log(myList)
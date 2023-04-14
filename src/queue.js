const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.list = []
  }

  getUnderlyingList() {
    let ListNode = {}
    function createLinkedList(array, obj) {
        if (array.length !== 0) {
            obj['value'] = array[0]
            array.length === 1 ? obj['next'] = null : obj['next'] = {}
            array = array.slice(1)
            obj = obj.next
            createLinkedList(array, obj)
        }
    }
    
    createLinkedList(this.list, ListNode)
    return ListNode
  }

  enqueue(element) {
    this.list.push(element)
    return this
  }

  dequeue() {
    let firstElement = this.list[0]
    this.list.splice(0, 1)
    return firstElement
  }
}

module.exports = {
  Queue
};

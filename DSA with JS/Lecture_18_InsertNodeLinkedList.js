// Insertion_of_a_node_in_Linked_List

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertAtHead(data) {
    const newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  insertAtTail(data) {
    const newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  insertAfterNode(prevNode, newNodeData) {
    if (prevNode == null) {
      console.log('Previous node cannot be null');
      return;
    }
    const newNode = new Node(newNodeData);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
  }

  printList() {
    let current = this.head;
    let list = '';
    while (current) {
      list += current.data + ' ';
      current = current.next;
    }
    console.log(list);
  }
}

const list = new LinkedList();
list.insertAtTail(10);
list.insertAtTail(20);
list.insertAtTail(30);
list.insertAtTail(40);
list.insertAtTail(50);
console.log('Insertion of nodes at the end of the Linked List:');
list.printList();
console.log();
list.insertAfterNode(list.head.next, 25);
console.log('Insertion of nodes after second node of the linked list:');
list.printList();

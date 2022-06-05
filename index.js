class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  //inserts a number into the tree. Returns the entire tree.
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    const rnLoop = true;
    while (rnLoop) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  //finds the given number and returns it. If its not found, returns `null` or `undefined`.
  find(value) {
    if (!this.root) return null;
    let current = this.root;
    const rnLoop = true;
    while (rnLoop) {
      if (!current) return undefined;
      if (value === current.value) return current;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }
  //checks if a given number exists in the tree. If its in the tree, returns `true`, otherwise `false`
  contains(value) {
    if (!this.root) return null;
    let current = this.root;
    const rnLoop = true;
    while (rnLoop) {
      if (!current) return false;
      if (value === current.value) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }
}

const BST = new BinarySearchTree();
BST.insert(10); //returns the entire list
BST.insert(6); //returns the entire list
BST.insert(2);
BST.insert(20);
BST.insert(34);
BST.insert(69);
BST.insert(4);
BST.find(4); //returns `Node {value: 2, right: Node, left: null}`
BST.find(20);
BST.find(123); //returns `undefined`
BST.contains(6); //returns `true`
BST.contains(123); //returns `false`
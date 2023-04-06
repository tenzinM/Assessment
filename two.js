// RECURSION
// Recursion is a technique where a function calls itself repeatedly until a certain condition is met. Recursion is often used when a problem can be broken down into smaller sub-problems of the same kind.
// Demonstration of a recursive function in JavaScript that calculates the factorial of a number:

function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
const result=factorial(5);
console.log(result); // 120

//the function calls itself repeatedly, each time with a smaller value of n, until n reaches 0 and the base case is met. Then, the function returns the product of all the values of n that it multiplied together.


// BINARY SEARCH TREE
// A binary search tree is a type of binary tree where the left subtree of a node contains only nodes with values less than the node's value, and the right subtree contains only nodes with values greater than the node's value.
// Demonstration of binary search tree in JavaScript:

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this._insertNode(this.root, newNode);
      }
    }
  
    _insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this._insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this._insertNode(node.right, newNode);
        }
      }
    }
  
    search(value) {
      return this._searchNode(this.root, value);
    }
  
    _searchNode(node, value) {
      if (node === null) {
        return false;
      }
      if (value < node.value) {
        return this._searchNode(node.left, value);
      } else if (value > node.value) {
        return this._searchNode(node.right, value);
      } else {
        return true;
      }
    }
  }

// In this code, the Node class represents a node in the tree. Each node has a value, a left child node, and a right child node. The BinarySearchTree class represents the binary search tree itself. It has a root property that stores the root node of the tree.

// The insert method adds a new node to the tree. If the tree is empty, it sets the new node as the root. Otherwise, it calls the private _insertNode method to find the correct place to insert the new node based on its value.
// The _insertNode method is a private method that is called recursively to insert the new node. If the value of the new node is less than the current node's value, it recursively calls itself on the current node's left child. If the value of the new node is greater than the current node's value, it recursively calls itself on the current node's right child.
// The search method searches the tree for a node with a given value. It calls the private _searchNode method to perform the search.
// The _searchNode method is a private method that is called recursively to search the tree. If the current node is null, it returns false. If the value being searched for is less than the current node's value, it recursively calls itself on the current node's left child. If the value being searched for is greater than the current node's value, it recursively calls itself on the current node's right child. If the value being searched for is equal to the current node's value, it returns true.

// CLOSURES
// In JavaScript, a closure is a function that has access to variables in its outer (enclosing) function's scope, even after the outer function has returned. 
// Demonstration of a closure in JavaScript:

function outerFunction() {
    const name = "John";
  
    function innerFunction() {
      console.log(`Hello ${name}!`);
    }
  
    return innerFunction;
  }
  
  const greeting = outerFunction();
  
  greeting(); // Output: Hello John!

//  In this example, outerFunction returns innerFunction, which is a closure. innerFunction has access to the name variable in outerFunction's scope, even though outerFunction has already returned. This is possible because innerFunction is still referencing the name variable, which is stored in memory as part of the closure.
//  When we call outerFunction, it returns innerFunction. We store this returned function in the greeting variable. When we call greeting(), it executes innerFunction, which logs "Hello John!" to the console. innerFunction has access to the name variable in outerFunction's scope because it's part of the closure that's created when outerFunction is called.



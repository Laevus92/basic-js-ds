const { NotImplementedError, ListNode } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {
  
constructor () {
  this.rootNode = null
}

  root() {
    return this.rootNode
  }

  add(data) {
    this.rootNode = addDataInside(this.rootNode, data)

    function addDataInside(node, data) {
      if (!node) {
        return new Node (data)
      }

      if (node.data === data) {
        return node
      }

      if (node.data > data) {
        node.left = addDataInside(node.left, data)
      } else {
        node.right = addDataInside(node.right, data)
      }

      return node
    }
  }

  has(data) {

    return searchInside(this.rootNode, data)

    function searchInside(node, data) {
      if(!node) {
        return false
      }

      if (node.data === data) {
        return true
      }

      return data > node.data ? 
      searchInside (node.right, data) : 
      searchInside (node.left, data)
      
    }
    
  }

  find(data) {
    return searchInside(this.rootNode, data)

    function searchInside(node,data) {
      if(!node) {
        return null
      }

      if (node.data === data) {
        return node
      }
      
      return data > node.data ? 
      searchInside (node.right, data) : 
      searchInside (node.left, data)
    }
  }

  remove(data) {
    this.rootNode = removeData(this.rootNode, data);

    function removeData (node, data) {
      if (!node) {
        return null
      }

      if (data < node.data) {
        node.left = removeData(node.left, data)
        return node
      } else if (data > node.data) {
        node.right = removeData(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }

        if (!node.left) {
          node = node.right
          return node
        }

        if (!node.right) {
          node = node.left
          return node
        }

        let minFromRight = node.right
        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data
        node.right = removeData(node.right, minFromRight.data)

        return node
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return;
    }
    let node = this.rootNode;
    while(node.left) {
      node = node.left
    }

    return node.data
  }

  max() {
    if (!this.rootNode) {
      return;
    }
    let node = this.rootNode;
    while(node.right) {
      node = node.right
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree
};
// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
// Do not change this
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        // Your code here
        this.root = null
    }

    insert(val, currentNode = this.root) {
        // Your code here
        const newNode = new TreeNode(val)

        if (this.root === null) {
            this.root = new TreeNode(val)
            return;
        }

        if (val < currentNode.val) {
            if (currentNode.left === null) {
                currentNode.left = new TreeNode(val);
            } else {
                this.insert(val, currentNode.left)
            }
            return;
        }

        if (currentNode.right === null) {
            currentNode.right = new TreeNode(val)
        } else {
            this.insert(val, currentNode.right)
        }
    }

    search(val, currentNode = this.root) {
        // Your code here
        if (currentNode === null) return false;

        if (currentNode.val === val) return true;

        if (val < currentNode.val) {
            return this.search(val, currentNode.left)
        }
        if (val > currentNode.val) {
            return this.search(val, currentNode.right)
        }
    }

    preOrderTraversal(currentNode = this.root) {
        // Your code here
        console.log(currentNode.val);

        if (currentNode.left) {
            this.preOrderTraversal(currentNode.left)
        }
        if (currentNode.right) {
            this.preOrderTraversal(currentNode.right)
        }
    }


    inOrderTraversal(currentNode = this.root) {
        // Your code here
        if (currentNode === null) return;

        if (currentNode.left) {
            this.inOrderTraversal(currentNode.left)
        }
        console.log(currentNode.val)
        if (currentNode.right) {
            this.inOrderTraversal(currentNode.right)
        }
    }

    postOrderTraversal(currentNode = this.root) {
        // Your code here
        if (currentNode.left) {
            this.postOrderTraversal(currentNode.left)
        }
        if (currentNode.right) {
            this.postOrderTraversal(currentNode.right)
        }
        console.log(currentNode.val)
    }

    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
        // your code here
        const queue = [this.root]
        let node;

        while (queue.length) {
            node = queue.shift()
            console.log(node.val)

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
        // your code here
        const stack = [this.root]
        let node;

        while (stack.length) {
            node = stack.pop()
            console.log(node.val)

            if (node.left) stack.push(node.left)
            if (node.right) stack.push(node.right)
        }
    }
}

module.exports = { BinarySearchTree, TreeNode };

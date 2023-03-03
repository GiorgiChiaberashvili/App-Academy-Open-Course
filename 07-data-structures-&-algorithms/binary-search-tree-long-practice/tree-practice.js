const { on } = require('chai-spies');
const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  // Your code here
  return rootNode.left === null ? rootNode.val : findMinBST(rootNode.left)
}

function findMaxBST(rootNode) {
  // Your code here
  return rootNode.right === null ? rootNode.val : findMaxBST(rootNode.right)
}

function findMinBT(rootNode) {
  // Your code here
  if (rootNode === null) return Infinity;

  return Math.min(rootNode.val, findMinBT(rootNode.left), findMinBT(rootNode.right))
}
function findMaxBT(rootNode) {
  // Your code here
  if (rootNode === null) return -Infinity;

  return Math.max(rootNode.val, findMaxBT(rootNode.left), findMaxBT(rootNode.right))
}

function getHeight(rootNode) {
  // Your code here
  if (rootNode == null) return - 1;

  return Math.max(getHeight(rootNode.left), getHeight(rootNode.right)) + 1;
}

function balancedTree(rootNode) {
  // Your code here
  if (rootNode == null) return true

  let left = getHeight(rootNode.left);
  let right = getHeight(rootNode.right);

  return Math.abs(left - right) <= 1 &&

    balancedTree(rootNode.left) == true &&
    balancedTree(rootNode.right) == true;
}

function countNodes(rootNode) {
  // Your code here
  if (rootNode === null) return 0;

  return 1 + countNodes(rootNode.left) + countNodes(rootNode.right)
}

function getParentNode(rootNode, target) {
  // Your code here
  if (rootNode === null) return undefined;

  if (rootNode.val === target) return null;

  if (rootNode.left && rootNode.left.val === target ||
    rootNode.right && rootNode.right.val === target) return rootNode;

  return getParentNode(rootNode.left, target) ||
    getParentNode(rootNode.right, target);
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
  if (rootNode === null) return null;

  if (target <= rootNode.val) {
    return inOrderPredecessor(rootNode.left, target)
  }
  return inOrderPredecessor(rootNode.right, target) || rootNode.val
}


function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST
}

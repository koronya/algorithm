// https://leetcode.com/problems/binary-search-tree-iterator
// Runtime: 148 ms, faster than 40.70% of JavaScript online submissions for Binary Search Tree Iterator.
// Memory Usage: 48 MB, less than 100.00% of JavaScript online submissions for Binary Search Tree Iterator.
var BSTIterator = function(root) {
  this.nodeArr = []
  const preOrder = node => {
    if (node === null) {
      return
    }
    this.nodeArr.push(node)
    preOrder(node.left)
    preOrder(node.right)
  }
  preOrder(root)
  this.nodeArr.sort((a, b) => a.val - b.val)
}

BSTIterator.prototype.next = function() {
  return this.nodeArr.shift().val
}

BSTIterator.prototype.hasNext = function() {
  return this.nodeArr.length > 0
}

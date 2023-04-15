const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');


/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this.tree = null
  }
  root() {
    return this.tree
  }

  add(data){
    return this.tree = addNodeInTree(this.tree , data)
    
    function addNodeInTree(node , data){
      if(!node){
        return new Node(data)
      }
      if(node.data === data){
        return node
      }
      if(node.data > data) {
        node.left = addNodeInTree(node.left , data)
      }
      if(node.data < data) {
        node.right = addNodeInTree(node.right , data)
      }
      return node
    }  
    
  }
  has(data){
    return searchNode(this.tree , data)

    function searchNode(node , data) {
      if(!node) {
        return false
      }
      if(node.data === data) {
        return true
      }
      if(node.data > data ){
        return searchNode(node.left , data)
      }
      if(node.data < data) {
        return searchNode(node.right , data)
      }
    }
  }
  find(data) {
    return searchNode(this.tree , data)

    function searchNode(node , data) {
      if(!node) {
        return null
      }
      if(node.data === data) {
        return node
      }
      if(node.data > data ){
        return searchNode(node.left , data)
      }
      if(node.data < data) {
        return searchNode(node.right , data)
      }
    }
  }
  min() {
    
    return searchMin(this.tree)
    function searchMin (node) {
      if(!node) {
        return null
      }
      else{
        if(node.left){
          return searchMin(node.left)
        }
      }
      return node.data
    }
  }
  max(){
    return searchMax(this.tree)
    function searchMax (node) {
      if(!node) {
        return null
      }
      else{
        if(node.right){
          return searchMax(node.right)
        }
      }
      return node.data
    }
  }
  remove(data){
    this.tree = removeNodeInTree(this.tree , data);

    function removeNodeInTree(node,data){
      if(!node) {
        return null
      }else{
        if(node.data > data) {
          node.left = removeNodeInTree(node.left , data)
          return node
        }
        if(node.data < data) {
          node.right = removeNodeInTree(node.right , data)
          return node
        }
        else{
          if(!node.right && !node.left) {
            return null
          }
          if(!node.left){
            return node.right
          }
          if(!node.right){
            return node.left
          }

          let minNodeRight = node.right;
          while(minNodeRight.left){
            minNodeRight = minNodeRight.left
          }
          node.data = minNodeRight.data
          node.right = removeNodeInTree(node.right , minNodeRight.data)
          return node
        }
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};
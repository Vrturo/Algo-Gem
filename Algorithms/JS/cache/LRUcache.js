// Implement LRU Cache in JavaScript

// LRU which is short for least recently used is a popular algorithm in cache.
// The basic idea is always put your items in order of used time, and when you insert new item into the fullfilled cache,
// remove the least recently used item in your memory.


class LRUcache {
  constructor(memory) {
    this.memory = memory;
    this.size = 0;
    this.cache = {};
  }

  get(key) {
    if (this.cache[key]) {
      return this.cache[key]
    } else {
      return -1;
    }
  }

  put(key, val) {

  }

}



// Logic

// O(1)

// If we reconstruct the LRUCache with a map and a bunch of nodes, we can implement the LRUCache with O(1).
// (Since we need to get the value by key, so it has to be a hashtable)
// Why? Since we can save the key and value in the node, and save all key-node pairs in the hashtable,
// and now we can get the value by key using hashtable,
// and we also have a list of nodes with order of last used time and the update on a linked list can be O(1).


/*
 * Illustration of the design:
 *
 *       entry             entry             entry             entry
 *       ______            ______            ______            ______
 *      | tail |.newer => |      |.newer => |      |.newer => | head |
 *      |  A   |          |  B   |          |  C   |          |  D   |
 *      |______| <= older.|______| <= older.|______| <= older.|______|
 *
 */


var LRUCache = function(capacity){
  this.capacity = capacity
  this.length = 0
  this.map = {}
  // save the head and tail to can update easily
  this.head = null
  this.tail = null
}

LRUCache.prototype.node = function(key,value){
  this.key = key
  this.val = value
  this.newer = null
  this.older = null
}

LRUCache.prototype.get = function(key){
  if(this.map.hasOwnProperty(key)){
    this.updateKey(key)
    return this.map[key].val
  }else{
    return -1
  }
}
LRUCache.prototype.updateKey = function(key){
  var node = this.map[key]
  // break the chain and reconnect with newer and older
  if(node.newer){
    node.newer.older= node.older
  }else{
    this.head = node.older
  }

  if(node.older){
    node.older.newer = node.newer
  }else{
    this.tail = node.newer
  }

  // replace the node into head - newest
  node.older = this.head
  node.newer = null
  if(this.head){
    this.head.newer = node
  }
  this.head = node

  // if no items in the bucket, set the tail to node too.
  if(!this.tail){
    this.tail = node
  }
}

LRUCache.prototype.set = function(key,value){
  var node = new this.node(key,value)
  // update the value for exist entries
  if(this.map.hasOwnProperty(key)){
    this.map[key].val = value
    this.updateKey(key)
    return
  }
  if(this.length >= this.capacity){
    // remove the least recently used item
    var dKey = this.tail.key
    this.tail = this.tail.newer
    if(this.tail){
      this.tail.older = null
    }
    delete this.map[dKey]
    this.length --
  }

  // insert node into the head
  node.older = this.head
  // if have head, we need re-connect node with other nodes older than head
  if(this.head){
    this.head.newer = node
  }
  this.head = node
  // if no tail which means first insert, set the tail to node too
  if(!this.tail){
    this.tail = node
  }
  this.map[key] = node
  this.length ++
}




// O(n)

// constructor
class LRUCache {
  constructor(capacity) {
    // save all key-value pairs in this hashtable
    this.cache = {};
    // save all keys in the stack with the order of last used time
    this.keys = [];
    this.capacity = capacity;
    this.size = 0;
  }

  updateKey(key) {
    // update the position of this key in keys
    const keyIndex = this.keys.indexOf(key);
    this.keys[keyIndex] = undefined;
    // update the key to the head of the stack
    this.keys.push(key);
  }

  get(key) {
    if (this.cache[key]) {
      this.updateKey(key);
      return this.cache[key];
    } else {
      return -1;
    }
  }

  set(key, value) {
    if (this.capacity <= 0) return "no memory to save 1 item";
    // update exist item
    if (this.cache[key]) {
      this.cache[key] = value;
      this.updateKey(key);
      return;
    }

    // if the cache is fullfilled, remove the least recently used item
    if (this.size >= this.capacity) {
      let removedKey = this.keys.shift();
      while (!removedKey) {
        // if the dKey is undefined, shift() again
        removedKey = this.keys.shift();
      }
      delete this.cache[removedKey];
    }

    // add new item and update the size
    this.cache[key] = value;
    this.keys.push(key);
    this.size += 1;
  }
}

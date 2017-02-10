// Implement LRU Cache in JavaScript

// LRU which is short for least recently used is a popular algorithm in cache.
// The basic idea is always put your items in order of used time, and when you insert new item into the fullfilled cache,
// remove the least recently used item in your memory.

// It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present.
//                   When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:

// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

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

class Node {
  constructor(key, value) {
    this.k = key;
    this.val = value;
    this.newer = null;
    this.older = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.map = {};
    // save the head and tail to can update easily
    this.head = null;
    this.tail = null;
  }


  get(key) {
    if (this.map[key]) {
      this.updateKey(key);
      return this.map[key].val;
    } else {
      return -1;
    }
  }

  updateKey(key) {
    const node = this.map[key];
    // break the chain and reconnect with newer and older
    node.newer ? node.newer.older = node.older : this.head = node.older;

    node.older ? node.older.newer = node.newer : this.tail = node.newer;

    // replace the node into head - newest
    node.older = this.head;
    node.newer = null;
    if (this.head) this.head.newer = node;
    this.head = node

    // if no items in the bucket, set the tail to node too.
    if (!this.tail) this.tail = node;
  }

  put(key, value) {
    const node = new Node(key,value);
    // update the value for exist entries
    if (this.map[key]) {
      this.map[key].val = value;
      this.updateKey(key);
      return;
    }
    if (this.size >= this.capacity) {
      // remove the least recently used item
      const deletedKey = this.tail.key;
      this.tail = this.tail.newer;
      if (this.tail) this.tail.older = null;
      delete this.map[deletedKey];
      this.size -= 1;
    }

    // insert node into the head
    node.older = this.head;
    // if have head, we need re-connect node with other nodes older than head
    if (this.head) this.head.newer = node;
    this.head = node;

    // if no tail which means first insert, set the tail to node too
    if(!this.tail) this.tail = node;
    this.map[key] = node;
    this.size += 1;
  }
}

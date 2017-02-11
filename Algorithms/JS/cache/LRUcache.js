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


// SOLUTIONS --------------------------------------------------------

// Hash / Stack of keys approach - Logic - O(n)

// LRUCache constructor
  // capacity - lets us know how many items we can have in our cache at a time
  // cache - hash used to keep track of key value pairs
  // keys - array that keeps track of existing keys in cache and keeps order
  // size - integer used to keep track of the amount of keys that have gone through our cache
  //        size property is made to let us know when capacity is met

// updateKey function
  // Everytime our LRUcache get() and put() functions are called we run updateKey
  // updateKey takes in a key parameter
  // with the key parameter we can find at what index our key is located in our keys property
  // using the index location, the current location of key is set to undefined in keys array
  // key is then pushed to the end of the keys array
  // being at the end of keys array means it was the last key used

// get function
  // get function takes a key paramter and is intended to return the value of our key IF EXISTS
  // if key exists in cache,
    // call updateKey function on key to declare it the most recent used
    // once key is updated, return value of key in cache
  // if key doesnt not exist
    // return -1

// put function
  // put function takes a key and value parameter and
    // is intended to create a new key and value pair in cache, as well as delete oldest pair
  // if key that's passed exists in cache
    // set the parameter value as the value of the key in cache
    // once value is stored, call updateKey function on key to declare it the most recent used
    // we can now return out of the function because we dont need to create a new key
  // if key that's passed DOES NOT exist in cache
    // check to if capacity has been met
      // if capacity has been met we can remove our oldest key by calling shift on keys array
      // (last used key always gets pushed to tend of array so oldest key is in the front)
        // if item returns undefined we keep shifting until we get a key
      // once key is returned we use it to delete key and value pair from cache
      // once key and value pair from cache are deleted we set new pair in cache
      // push the newest key into key array
      // increase size since key is new

class LRUCacheOne {
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

  put(key, value) {
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
        // ex. [ undefined, undefined, undefined, 4, 3 ]
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

const cache = new LRUCacheOne( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
// cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
// cache.put(4, 4);
// cache.put(4, 4);
cache.get(4);
cache.put(4, 4);
cache.put(4, 4);
cache.put(4, 4);
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

console.log(cache);

// Logic

// O(1)

// If we reconstruct the LRUCache with a map and a bunch of nodes, we can implement the LRUCache with O(1).
// Since we can save the key and value in the node, and save all key-node pairs in the hashtable,
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


// reference: http://taoalpha.github.io/blog/2015/11/02/tech-javascript-lru-cache/

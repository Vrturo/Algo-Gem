// Hash

// Hashing is designed to solve the problem of needing to efficiently find or store an item in a collection.

// If we have a list of 10,000 words of English and we want to check if a given word is in the list,
// it would be inefficient to successively compare the word with all 10,000 items until we find a match.
// Hashing is a technique to make things more efficient by effectively narrowing down the search at the outset.

// What is hashing?

// Hashing means using some function or algorithm to map object data to some representative integer value.
// This so-called hash code (or simply hash) can then be used as a way to narrow down our search when looking
// for the item in the map.

class Hash {
  constructor() {
    this.keys = [];
    this.values = [];
    this.length = 0;
  }

  hasOwnProperty(key) {
    for (let i = 0; i < this.keys.length; i += 1) {
      if (key === this.keys[i]) return true;
    }
    return false;
  }

  setItem(key, value) {
    if (this.hasOwnProperty(key)) {

    } else {
      this.keys.push(key);
      this.value.push(value);
      this.length += 1;
    }
  }

  getItem(key) {

  }

}

const map = new Hash();


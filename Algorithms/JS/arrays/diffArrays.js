// Diff Two Arrays

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.

// Ex.
// Input:

// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]
// ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]

// Output:

// ["pink wool"]
// []
// [4]
// ["piglet", 4]

/**
 * @param {array[], array[]} arr1 arr2
 * @return {array}
 */

// create array to return unique objects, if any
// create object to keep track of unique elements
// loop through first arr
	// save every element to map and set as true, as in it is true it is unique
// loop through second array
	// if the item exists, set it to false because it is no longer unique
	// if the item doesnt exists, create it and set it to true
// loop through the map's keys
	// push every item into our final array
		// if the key can be a Number push it in as one, else its a string
// return array at the end

function diffArray(arr1, arr2) {
  const newArr = [];
  const map = {};
  for (let i = 0; i < arr1.length; i += 1) {
    map[arr1[i]] = true;
  }
  for (let j = 0; j < arr2.length; j += 1) {
    map[arr2[j]] ? map[arr2[j]] = false : map[arr2[j]] = true;
  }
	Object.keys(map).forEach((k) => {
		if (map[k]) Number(k) ? newArr.push(Number(k)) : newArr.push(k);
	});

  return newArr;
}

console.log(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]));

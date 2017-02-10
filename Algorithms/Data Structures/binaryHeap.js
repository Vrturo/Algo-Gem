class BinaryHeap {
  constructor(scoreFunction) {
    this.content = [];
    this.scoreFunction = scoreFunction;
  }

  push(element) {
    // Add the new element to the end of the array.
    this.content.push(element);
    // Allow it to bubble up.
    this.bubbleUp(this.content.length - 1);
  }

  pop() {
    // Store the first element so we can return it later.
    const result = this.content[0];
    // Get the element at the end of the array.
    const end = this.content.pop();
    // If there are any elements left, put the end element at the
    // start, and let it sink down.
    if (this.content.length > 0) {
      this.content[0] = end;
      this.sinkDown(0);
    }
    return result;
  }

  remove(node) {
    const length = this.content.length;
    // To remove a value, we must search through the array to find it.
    for (let i = 0; i < length; i += 1) {
      if (this.content[i] !== node) continue;
      // When it is found, the process seen in 'pop' is repeated to fill up the hole.
      const end = this.content.pop();
      // If the element we popped was the one we needed to remove we're done.
      if (i === length - 1) break;
      // Otherwise, we replace the removed element with the popped
      // one, and allow it to float up or sink down as appropriate.
      this.content[i] = end;
      this.bubbleUp(i);
      this.sinkDown(i);
      break;
    }
  }

  size() {
    return this.content.length;
  }

  bubbleUp(n) {
    // Fetch the element that has to be moved.
    const element = this.content[n];
    const score = this.scoreFunction(element);
    // When at 0, an element can not go up any further.
    while (n > 0) {
      // Compute the parent element's index, and fetch it.
      const parentN = Math.floor((n + 1) / 2) - 1;
      const parent = this.content[parentN];
      // If the parent has a lesser score, things are in order and we are done.
      if (score >= this.scoreFunction(parent)) break;
      // Otherwise, swap the parent with the current element and continue.
      this.content[parentN] = element;
      this.content[n] = parent;
      n = parentN;
    }
  }

  sinkDown(n) {
    // Look up the target element and its score.
    const length = this.content.length;
    const element = this.content[n];
    const elemScore = this.scoreFunction(element);

    while (true) {
      // Compute the indices of the child elements.
      const child2N = (n + 1) * 2;
      const child1N = child2N - 1;
      // This is used to store the new position of the element, if any.
      let swap = null;
      // If the first child exists (is inside the array)...
      if (child1N < length) {
        // Look it up and compute its score.
        const child1 = this.content[child1N];
        var child1Score = this.scoreFunction(child1);
        // If the score is less than our element's, we need to swap.
        if (child1Score < elemScore) swap = child1N;
      }
      // Do the same checks for the other child.
      if (child2N < length) {
        const child2 = this.content[child2N];
        const child2Score = this.scoreFunction(child2);
        if (child2Score < (swap === null ? elemScore : child1Score)) swap = child2N;
      }
      // No need to swap further, we are done.
      if (swap === null) break;
      // Otherwise, swap and continue.
      this.content[n] = this.content[swap];
      this.content[swap] = element;
      n = swap;
    }
  }
}

const bHeap = new BinaryHeap(function(x) { return x; });
const arr = [10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5];
while (arr.length) bHeap.push(arr.shift());
bHeap.remove(2);
while (bHeap.size() > 0) console.log(bHeap.pop());

function selectionSort(arr) {
  
  // iterate through the sorted sub-array
  for (let i = 0; i < arr.length; i++) {
    // iterate through the unsorted sub-array that starts right after sorted one
    for (let j = i; j < arr.length; j++) {
      // check if the value in the unsorted array is less then the value from sorted array
      if (arr[i] > arr[j]) {
        // swap values if they meet condition
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  // return sorted array
  return arr;

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution

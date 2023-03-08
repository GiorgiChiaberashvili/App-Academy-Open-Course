
function bubbleSort(arr) {

  // Iterate through the array

  // If the current value is greater than its neighbor to the right
  // Swap those values



  // If you get to the end of the array and no swaps have occurred, return

  // Otherwise, repeat from the beginning

  for (let i = 0; i < arr.length; i++) {
    // Iterate through the array up to i
    for (let j = 0; j < i; j++) {
      // If the current value is less than its neighbor to the left
      // Swap those values
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // Return the sorted array
  return arr;
}

// Do not move this console.log
console.log(arr.join(","));


module.exports = bubbleSort;

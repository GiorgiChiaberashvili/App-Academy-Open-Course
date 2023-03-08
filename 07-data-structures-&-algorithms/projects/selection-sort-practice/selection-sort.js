

function selectionSort(arr) {

  // Copy the original array
  const OriginalArray = [...arr]

  // Create an array to store the sorted values
  const sorted = [];
  // While the array is not empty...
  while (OriginalArray.length > 0) {
    // Do not move this console.log
    console.log(sorted.join(","));
    // Find the index of the minimum value in the unsorted half
    const min = Math.min(...OriginalArray)
    const index = OriginalArray.indexOf(min)
    // Save and remove the value at the min index
    const smallest = OriginalArray.splice(index, 1);
    // Add the min value to the end of the sorted array
    sorted.push(...smallest)
  }
  return sorted;
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let pointer = 0;
  // Repeat while the unsorted half is not empty:
  while (pointer < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));
    // Find the index of the minimum value in the unsorted half
    let minIndex = pointer;
    let min = arr[pointer];
    for (let i = pointer; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
        // Save the min value
        min = arr[i]
      }
    }
    // Shift every unsorted value to the left of the min value to the right by 1
    for (let i = minIndex; i >= pointer; i--) {
      arr[i] = arr[i - 1];
    }
    // Put the min value at the divider
    arr[pointer] = min;
    // Increment the divider and repeat
    pointer++;
  }
  return arr;
}


module.exports = [selectionSort, selectionSortInPlace];

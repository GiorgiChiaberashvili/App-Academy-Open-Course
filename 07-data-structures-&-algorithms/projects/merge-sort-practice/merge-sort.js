// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }
  // Divide the array in half
  let mid = Math.floor(arr.length / 2);
  // Recursively sort the left half
  let left = arr.slice(0, mid);
  // Recursively sort the right half
  let right = arr.slice(mid);

  left = mergeSort(left);
  right = mergeSort(right);

  // Takes in two sorted arrays and returns them merged into one
  return merge(left, right);
}



function merge(arrA, arrB) {
  // Point to the first value of each array
  let i = 0;
  let j = 0;
  // Create an empty return array
  let merged = [];
  // While there are still values in each array...
  while (i < arrA.length && j < arrB.length) {
    // Compare the first values of each array
    if (arrA[i] < arrB[j]) {
      // Add the smaller value to the return array
      merged.push(arrA[i++])
    } else {
      merged.push(arrB[j++])
    }
  }
  // Move the pointer to the next value in that array
  while (i < arrA.length) {
    merged.push(arrA[i++])
  }
  while (j < arrB.length) {
    merged.push(arrB[j++])
  }
  // Return the return array
  return merged;
}











module.exports = [merge, mergeSort];

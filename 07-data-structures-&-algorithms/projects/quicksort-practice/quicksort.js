function quicksort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }

  // Pick the first value as the pivot
  let pivot = arr[0];
  let left = [];
  let right = [];
  // Orient the pivot so that...
  // every number smaller than the pivot is to the left
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i])
      // every number larger (or equal) than the pivot is to the right
    } else {
      right.push(arr[i])
    }
  }
  // Recursively sort the left
  left = quicksort(left);
  // Recursively sort the right
  right = quicksort(right);
  // Return the left, pivot and right in sorted order

  return left.concat(pivot).concat(right);
}


module.exports = [quicksort];

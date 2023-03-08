function linearSearch(arr, target) {
  // Can you solve this in one line?
  return arr.indexOf(target)
};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let lo = 0;
  let hi = arr.length - 1;
  let mid = Math.floor((hi - lo) / 2);
  // While high and low indices do not overlap...
  while (lo <= hi) {
    // Find the midpoint between high and low indices
    const next = arr[mid];

    // Compare the target value to the midpoint value
    // If the target equals the midpoint...
    if (next === target) {
      // Return the midpoint index
      return mid;
    } else if (next > target) {
      // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
      hi = mid - 1;
    } else {
      // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
      lo = mid + 1;
    }
    // Recalculate the midpoint between high and low indices
    mid = Math.floor((hi - lo) / 2) + lo;
  }
  // Return -1 if the loop exits with overlapping pointers
  return -1;
}



module.exports = [linearSearch, binarySearch]

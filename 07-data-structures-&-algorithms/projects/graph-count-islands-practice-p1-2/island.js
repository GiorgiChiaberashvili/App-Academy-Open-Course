function getNeighbors(row, col, matrix) {
  const neighbors = [];

  // Check top
  if (matrix[row - 1] && matrix[row - 1][col] === 1) {
    neighbors.push([row - 1, col]);
  }
  // Check top right
  if (matrix[row - 1] && matrix[row - 1][col + 1] && matrix[row - 1][col + 1] === 1) {
    neighbors.push([row - 1, col + 1])
  }
  // Check right
  if (matrix[row][col + 1] && matrix[row][col + 1] === 1) {
    neighbors.push([row, col + 1]);
  }
  // Check bottom right
  if (matrix[row + 1] && matrix[row + 1][col + 1] && matrix[row + 1][col + 1] === 1) {
    neighbors.push([row + 1, col + 1]);
  }
  // Check bottom
  if (matrix[row + 1] && matrix[row + 1][col] === 1) {
    neighbors.push([row + 1, col]);
  }
  // Check bottom left
  if (matrix[row + 1] && matrix[row + 1][col - 1] && matrix[row + 1][col - 1] === 1) {
    neighbors.push([row + 1, col - 1]);
  }
  // Check left
  if (matrix[row][col - 1] && matrix[row][col - 1] === 1) {
    neighbors.push([row, col - 1]);
  }
  // Check top left
  if (matrix[row - 1] && matrix[row - 1][col - 1] && matrix[row - 1][col - 1] === 1) {
    neighbors.push([row - 1, col - 1]);
  }
  // Return neighbors

  return neighbors;
  // Your code here
}





function countIslands(matrix) {

  // Create a visited set to store visited nodes
  const visited = new Set();
  // Initialize count to 0
  let count = 0;
  // Iterate through all indices in matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {

      const index = [row, col];
      const visit = "" + index;

      // If an index contains a 1 and has not been visited,
      if (!visited.has(visit) && matrix[row][col] === 1) {
        // increment island count and start traversing neighbors
        // DO THE THING (increment island count by 1)
        count++;
        // Initialize a stack with current index
        const stack = [index];
        // Add stringified version of current index to the visited set
        visited.add(visit)
        // While stack contains elements
        while (stack.length > 0) {

          const neighbors = getNeighbors(...stack.pop(), matrix)
          // Pop element from stack
          // Get valid neighbors of current element
          // Iterate over neigbors
          neighbors.forEach(
            neighbor => {

              if (!visited.has("" + neighbor)) {

                stack.push(neighbor)

                visited.add("" + neighbor)
              }
            }
          )
          // If neighbor has not been visited
          // Add neighbor to stack
          // Mark neighbor as visited
          // Return island count

          // Your code here
        }
      }
    }
  }
  return count;
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];

/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.

Example 1:
let table1 = recVolume(5); // returns a function
table1(4); // returns a function
console.log(table1(3)); // prints 60
console.log(table1(145)); // STILL prints 60

Example 3:
let table2 = recVolume(3); // returns a function
table2(2); // returns a function
console.log(table2(1)); // prints 6
console.log(table2(75)); // STILL prints 6

***********************************************************************/
function recVolume(height) {
  // An array dimensions is declared and initialized with height as its first element.
  let dimensions = [height];
  // A function measure is defined. This function takes one parameter num.
  const measure = (num) => {
    // Classic if condition checks whether the length of the dimensions array is less than 3.
    // If it is, then the current value of num is added to the end of the dimensions array.
    if (dimensions.length < 3) {
      dimensions.push(num);
    }
    // The next if condition checks whether the length of the dimensions array is exactly 3.
    // If it is, then the product of all the numbers in the dimensions array is calculated and stored in a variable sum.
    // Reduce multiplies all three dimensions
    if (dimensions.length === 3) {
      let sum = dimensions.reduce((acc, el) => (acc *= el));
      return sum;
      // And Lastly If the length of the dimensions array is not 3, the function measure is returned,
      // which allows it to be called again with another parameter. Cause we now all three dimensions pretty much at this point.
    } else {
      return measure;
    }
  };
  // and of course we return measure function which is final result
  return measure;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = recVolume;
} catch (e) {
  return null;
}

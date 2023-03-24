function firstStep(input) {
  // Your code here
  return input.split('&')
}

function secondStep(input) {
  // Your code here
  let output = input.map(el => {
    return el.split('=')
  })
  return output;
}

function thirdStep(input) {
  // Your code here

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {

      input[i][j] = input[i][j].replace(/\+/g, " ")
    }
  }
  return input;
}

function fourthStep(input) {
  // Your code here
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {

      input[i][j] = decodeURIComponent(input[i][j])
    }
  }
  return input;
}

function fifthStep(input) {
  // Your code here
  let obj = {};

  for (let i = 0; i < input.length; i++) {
    obj[input[i][0]] = input[i][1]
  }
  return obj;
}

function parseBody(str) {
  // Your code here
  return fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))));

}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};

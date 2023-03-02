function ageSort(users) {
  // Your code here
  return users.sort((a, b) => a.age - b.age);
}

function oddEvenSort(arr) {
  // Your code here
  const odds = arr.filter(a => a % 2 !== 0).sort((a, b) => a - b);
  const evens = arr.filter(a => a % 2 === 0).sort((a, b) => a - b);
  return odds.concat(evens);
}

function validAnagrams(s, t) {
  // Your code here
  let len1 = s.length;
  let len2 = t.length;
  if (len1 !== len2) {
    console.log("Invalid Input");
    return;
  }
  let str1 = s.split('').sort().join('');
  let str2 = s.split('').sort().join('');
  if (str1 === str2) {
    return true;
  }
  return false;
  // return s.toLowerCase().split('').sort().join('') === t.toLowerCase().split('').sort().join('');
}

function reverseBaseSort(arr) {
  // Your code here
  const base = input => input.toString().length;

  return arr.sort((a, b) => {
    if (base(a) > base(b)) return -1;
    return (base(a) < base(b)) ? 1 : a - b;
  });
}

function frequencySort(arr) {
  // Your code here
  let frequencyMap = new Object();
  for (let i = 0; i < arr.length; i++) {
    frequencyMap[arr[i]] = (frequencyMap[arr[i]] || 0) + 1;
  };
  return arr.sort((a, b) => frequencyMap[a] - frequencyMap[b] || b - a);
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];

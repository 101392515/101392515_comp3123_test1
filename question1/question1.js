function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(arr)) {
        return reject(new Error("Not an array"));
      }
      const lowerCaseStrings = arr.filter(item => typeof item === 'string').map(str => str.toLowerCase());
      resolve(lowerCaseStrings);
    });
  }
  
  // Testing function
  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
  lowerCaseWords(mixedArray)
    .then(result => console.log(result))  // Output should be: ['pizza', 'wings']
    .catch(error => console.log(error));
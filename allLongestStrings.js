/*
 * all longest strings
 * Given an array of strings, return another array containing all of its longest strings.
 */

function allLongestStrings(inputArray) {
  let arrayOfLongestStrings = [];
  let longestStringLength = -Infinity;
  
  inputArray.forEach((str) => {
      
      if(str.length > longestStringLength) {
          
          arrayOfLongestStrings = [];
          arrayOfLongestStrings.push(str);
          longestStringLength = str.length;
          
      } else if(str.length == longestStringLength) {
          arrayOfLongestStrings.push(str);
      }
  
  });
  
  return arrayOfLongestStrings;
}

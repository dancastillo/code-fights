/**
 * commonCharacterCount
 * Given two strings, find the number of common characters between them.
 * Example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be
 * commonCharacterCount(s1, s2) = 3.
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 * @param  {string} s1 [description]
 * @param  {string} s2 [description]
 * @return {number} commonCharsCount
 */

function commonCharacterCount(s1, s2) {
  let commonCharsCount = 0;
  let s2Array = s2.split('');
  
  s1.split('').forEach((char) => {
    const index = s2Array.indexOf(char);
    if(index !== -1) {
      commonCharsCount++;
      s2Array.splice(index,1)
    }
  });
  
  return commonCharsCount;
}

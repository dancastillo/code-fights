/**
 * split('') - splits a string up by the '' character so "test".split('') === ['t','e','s','t']
 * reverse() - this method reverses an array
 * join('') - joins an array together at '' character so ['t','e','s','t'].join('') === test
 */
function checkPalidrome(inputString) {
  return inputString === inputString.split('').reverse().join();
}

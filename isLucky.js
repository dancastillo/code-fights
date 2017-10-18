/**
 * isLucky
 * Ticket numbers usually consist of an even number of digits. A ticket number 
 * is considered lucky if the sum of the first half of the digits is equal to 
 * the sum of the second half.
 * Given a ticket number n, determine if it's lucky or not.
 * @param  {number}  n
 * @return {Boolean}
 */
function isLucky(n) {
  let frontHalf = 0, backHalf = 0;
  var nArray = n.toString().split("");
  
  for(let i = 0; i < nArray.length/2; i++) {
    frontHalf += Number(nArray[i]);
    backHalf += Number(nArray[nArray.length-1-i]);
  }
  
  return frontHalf == backHalf;
}

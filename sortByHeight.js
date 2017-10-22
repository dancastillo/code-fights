/**
 * sortByHeight
 * Some people are standing in a row in a park. There are trees between them which cannot be moved. 
 * Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
 * Example
 * For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
 * sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
 */
function sortByHeight(a) {
  let array2 = a;
  array2 = array2.filter((element) => {
      if(element != -1) {
          return element;
      }
  }).sort((x,y) => x-y);
  
  
  let indexArray2 = 0;
  a.forEach((element, index) => {
      if(element != -1) {
          a[index] = array2[indexArray2];
          indexArray2++;
      }
  });

  return a;
}

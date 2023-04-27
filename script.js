
let array = [1,2,3,4,5,6,7,8,9,10];

 console.log(array.length)

let item = 1;

function removeElement(array, item) {

  console.log(array)

  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
} 

console.log(removeElement(array, item))

// removeElement()
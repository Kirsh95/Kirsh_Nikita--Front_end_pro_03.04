function sumClosure() {
  let result = 0;
  return function addNum(num) {
    result += num;
    return result;
  }
}


const sum = sumClosure();


console.log(sum(3)); // Output: 3
console.log(sum(5)); // Output: 8
console.log(sum(20)); // Output: 28


let arr = [1, 2, 6, 8, 9, 7];
let n = 3;
function contain(element) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
  return false;
}

console.log(contain(n));

let arr = [1, 4, 5, 7, 8];

let n = 4;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == n) {
    for (let j = i; j < arr.length; j++) {
      arr[j] = arr[j + 1];
    }
  }
}
arr.length = arr.length - 1;
console.log(arr);

let arr = [1, 3, 6, 7, 1, 3, 1, 6, 1, 8, 1, 3, 3, 3, 3];
let firstoccurance = 1;
let nextoccurance = 0;
var item;
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      nextoccurance++;
    }
    if (nextoccurance > firstoccurance) {
      firstoccurance = nextoccurance;
      item = arr[i];
    }
  }
  nextoccurance = 0;
}
console.log("most occured value is", item);

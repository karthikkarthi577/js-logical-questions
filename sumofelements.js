let arr = [2, 8, 16, 4, 26, 35];
let sum = 0;
let product = 1;
for (let value of arr) {
  sum += value;
  product *= value;
}
console.log(sum);
console.log(product);

let arr = [24, 54, 89, 16, 89, 24];

let filtered = arr.filter((value, index) => {
  if (arr.indexOf(value) === index) {
    return value;
  }
});
console.log(filtered);
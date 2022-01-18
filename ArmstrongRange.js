const range = [10, 25];
const isArmstrong = num => {
  const numberOfDigits = ("" + num).length;
  let sum = 0;
  let temp = num;
  while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder ** numberOfDigits;
    temp = parseInt(temp / 10);
  }
  return sum === num;
};
const findAllArmstrong = ([start, end]) => {
  const res = [];
  for (let i = start; i <= end; i++) {
    if (isArmstrong(i)) {
      res.push(i);
    }
  }
  return res;
};
console.log(findAllArmstrong(range));

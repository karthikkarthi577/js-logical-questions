let number = 123;
const len = number.length;
let temp = number;
let rem,
  sum = 0;
while (temp > 0) {
  rem = number % 10;
  sum = sum + rem ** len;
  temp = temp / 10;
}
if (sum == number) {
  console.log("Armstrong");
} else {
  console.log("Not Armstrong");
}

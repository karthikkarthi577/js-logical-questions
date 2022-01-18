let num = prompt("enter positive number");
let flag = true;
if (num === 1) {
  console.log("1 is neither prime nor composite number");
} else if (num > 1) {
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      flag = false;
      break;
    }
  }
  if (flag) {
    console.log("prime");
  } else {
    console.log("not prime");
  }
}

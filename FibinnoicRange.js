function countFibs(low, high) {
  let f1 = 0,
    f2 = 1,
    f3 = 1;

  let result = 0;

  while (f1 <= high) {
    if (f1 >= low) result++;
    f1 = f2;
    f2 = f3;
    f3 = f1 + f2;
  }

  return result;
}

let low = 10,
  high = 100;
document.write("Count of Fibonacci Numbers is " + countFibs(low, high));

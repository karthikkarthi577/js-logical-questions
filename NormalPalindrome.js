let string = prompt("enter the string");

function Palindrome(value) {
  const originalLength = string.length;
  for (i = 0; i <= originalLength; i++) {
    if (string[i] !== string[originalLength - i - 1]) {
      return "not palindrome";
    }
  }
  return "palindrome";
}
console.log(Palindrome(string));

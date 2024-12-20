let a = prompt("Enter first number");

let b = prompt("Enter second number");

// prompt gives you string
let sum = parseInt(a) + parseInt(b);
if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Sorry this is not allowed");
}

function main() {
  let x = 1;
  try {
    console.log("The sum is ", sum * x);
    return true
  } catch (error) {
    console.log("Error aa gya Bhai");
    return false
  } finally {
    console.log("files are being closed and db connection is being closed");
  }
}
let c = main()

// finally function used when want to run function after return
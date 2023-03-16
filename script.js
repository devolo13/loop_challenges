// print all odd integers from 1 to 20
function printOdds() {
  for (var i = 1; i <= 20; i += 2) {
    console.log(i);
  }
}

// print all multiples of 3 from 100 down to 0
function threes() {
  for (var i = 99; i > 2; i -= 3) {
    console.log(i);
  }
}

// print the values in 4, 2.5, 1, -0.5, -2, -3.5
function printValues() {
  for (var i = 4; i > -4; i -= 1.5) {
    console.log(i);
  }
}

// sigma. print the sum of numbers from 1-100
function sigma100() {
  var sum = 0;
  for (var i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);
}

// factorial. multiply the numbers 1-12 together
function factorial12() {
  var prod = 1;
  for (var i = 1; i <= 12; i++) {
    prod *= i;
  }
  console.log(prod);
}

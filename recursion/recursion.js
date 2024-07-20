function recurse_add(number) {
  if (number <= 1) {
    console.log("(1) base case reached");
    return 1;
  }

  console.log(`(${number}) precurse value`);
  let out = number + recurse_add(number - 1);
  console.log(`(${out}) postcurse value`);

  return out;
}

console.log("result", recurse_add(64));

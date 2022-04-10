function climber(n) {
  if (n <= 2) return n;
  if (n === 3) return 4;
  // console.log(n);
  return climber(n - 3) + climber(n - 2) + climber(n - 1);
}

console.log(climber(3));
console.log(climber(4));
console.log(climber(13));
// console.log(climber(14));
// console.log(climber(17));
// console.log(climber(18));

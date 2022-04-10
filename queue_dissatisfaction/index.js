function solve(X) {
  //the first person dissatisfaction is always 0
  //the X(i) - X(i-1) = dis of X(i)
  // if dis is negative, then just use zero
  //sum all dis
  let disSum = 0;
  for (let i = 1; i < X.length; i++) {
    for (let j = i - 1; j >= -1; j--) {
      dis = 0;
      if (X[i] < X[j]) {
        dis += 1;
      }
      disSum += dis;
    }
  }
  return disSum;
}

console.log(solve([3, 8, 7, 6, 7, 3]));

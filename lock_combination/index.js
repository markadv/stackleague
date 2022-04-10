function get_out(current_combination, desired_combination) {
  let combi = 0;
  for (let i = 0; i < current_combination.length; i++) {
    let cw = Math.abs(current_combination[i] - desired_combination[i]);
    let ccw = 10 - cw;
    combi += cw < ccw ? cw : ccw;
  }
  return combi;
}

// function get_out(current_combination, desired_combination) {
//   let combi = 0;
//   for (let i = 0; i < current_combination.length; i++) {
//     let cw = current_combination[i] - desired_combination[i];
//     if (cw < 0) cw = -cw;
//     let ccw = current_combination[i] + 10 - desired_combination[i];
//     if (ccw < 0) ccw = -cw;
//     combi += cw < ccw ? cw : ccw;
//   }
//   return combi;
// }
console.log(get_out("123456789", "987654321"));

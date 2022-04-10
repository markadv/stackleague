function food_flavors(flavors, round = 0) {
  console.log(flavors);
  for (let i = 0; i < flavors.length - 2; i++) {
    if (flavors[i] === flavors[i + 1] && flavors[i] === flavors[i + 2]) {
      flavors.splice(i, 3);
      return food_flavors(flavors, round + 1);
    }
  }
  return round;
}

console.log(food_flavors([1, 1, 1, 2, 2, 3, 3, 3, 2, 1]));

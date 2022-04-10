function GetAllPalindromes(input) {
  input = input.replace(/[^a-z0-9]/gi, "");
  let subStrings = [];
  let listPal = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length - i; j++) {
      let subString = input.substring(j, j + i + 1);
      if (
        subString === subString.split("").reverse().join("") &&
        !subStrings.includes(subString)
      ) {
        subStrings.push(subString);
      }
    }
  }

  for (let k = 0; k < subStrings.length; k++) {
    if (subStrings[k].length >= 3) {
      listPal.push(subStrings[k]);
    }
  }

  listPal = listPal.sort().sort(function (a, b) {
    return a.length - b.length || 0;
  });
  return listPal;
}

console.log(GetAllPalindromes("prAdArtra"));

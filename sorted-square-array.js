// Essa função é O(n log n) devido ao uso do sort;
function sortedSquareArray(data) {
  const output = [];
  data.forEach((d) => {
    output.push(d * d);
  });
  output.sort((a, b) => a - b);
  return output;
}

// Refatorando ficou O(n) Linear mais performático sem o uso do sort
function sortedSquareArrayPerform(data) {
  const result = [];
  const side = { left: 0, right: data.length - 1 };
  for (let i = 0, maxValue = data.length; i < maxValue; i++) {
    const direction =
      Math.abs(data[side.left]) > Math.abs(data[side.right]) ? "left" : "right";
    result.unshift(data[side[direction]] * data[side[direction]]);
    side[direction] = direction === "left" ? side.left + 1 : side.right - 1;
  }
  return result;
}

const input1 = [1, 2, 3];
const input2 = [-3, -2, -1];
const input3 = [-6, -3, 1, 2, 4, 8];

console.log(sortedSquareArrayPerform(input3));

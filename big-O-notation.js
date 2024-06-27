const data = [0, 1, 2, 3, 4, 5];
// Constante O(1)
function constant(data) {
  return data[4];
}
// console.log(constant([0, 1, 2, 3, 4, 5]));

// Linear O(n) Must be calcule the better and worst case
function On(data, num) {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === num) {
      return data[i];
    }
  }
  return -1;
}
// console.log(On([0, 1, 2, 3, 4, 5], 3));
// The best case is (Omicron) O(1)
// The worst case is O(n)

// O(n)² Quadratic (Avoid as it hinders scalability)
function OnQuadratic(data) {
  const matriz = [];
  for (let i = 0, max = data.length; i < max; i++) {
    matriz[i] = [];
    for (let j = 0, maxj = data.length; j < maxj; j++) {
      matriz[i].push(j);
    }
  }
  return matriz;
}
// console.log(OnQuadratic([0, 1, 2, 3, 4, 5]));

// O(n log n) Binary Tree
function quicksort(data) {
  console.log(data);
  if (data.length < 2) {
    return data;
  }
  const parts = {
    pivot: data[0],
    left: [],
    right: [],
  };
  for (let i = 1, max = data.length; i < max; i++) {
    parts[data[i] < parts.pivot ? "left" : "right"].push(data[i]);
  }
  //   console.log(pivot, left, right);
  return [...quicksort(parts.left), parts.pivot, ...quicksort(parts.right)];
}
console.log(quicksort(["q", "a", "z", "w", "s", "x", "e", "d", "c", "r"]));

function sumOfTwo(a, b, v) {
  for (let first of a) {
    for (let second of b) {
      if (first + second === v) {
        return true;
      }
    }
  }
  return false;
}

function sumOfTwo(a, b, v) {
  for (let first of a) {
    for (let second of b) {
      if (first + second === v) {
        return true;
      }
    }
  }
  return false;
}

// Using HashSet
function sumOfTwo2(a, b, v) {
  const hashSet = [];
  const hashSet2 = {};
  for (let first of a) {
    hashSet.push(v - first);
    hashSet2[v - first] = true;
  }
  for (let second of b) {
    // if (hashSet.indexOf(second)) return true;
    if (hashSet2[second]) return true;
  }
  return false;
}

console.log(sumOfTwo([2, 1, 3], [4], 11));

// n(m(2) + 1)
// n(m(2))
// n(m)
// O(n^2) - Quadratica

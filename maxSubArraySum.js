function maxSubArraySum(data) {
  let maxValue;
  function maxSum(data, prev, subset) {
    data.forEach((d) => {
      prev += `|${d}`;
      const prePush = prev.split("|");
      prePush.shift();
      subset.push(prePush);
    });
    data.shift();
    if (data.length) {
      return maxSum(data, "", subset);
    }
    subset.forEach((sub) => {
      let subSum = 0;
      sub.forEach((s) => {
        subSum += parseInt(s);
      });
      if (!maxValue || subSum > maxValue) maxValue = subSum;
    });
    return subset;
  }

  if (!data.length) {
    return 0;
  }

  if (data.length == 1) {
    return data[0];
  }
  maxSum(data, "", []);
  return maxValue;
}

// console.log(maxSubArraySum([2, -5, 10, -1, 4, -10]));

// Algoritimo de Kadane (Performatico)
function maxSubArraySumKadane(data) {
  let maxSum = data[0];
  let sum = maxSum;
  data.shift();
  for (let item of data) {
    sum = item + sum > item ? item + sum : item;
    maxSum = sum > maxSum ? sum : maxSum;
  }
  return maxSum;
}

console.log(maxSubArraySumKadane([2, -5, 10, -1, 4, -10]));

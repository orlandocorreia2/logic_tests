function productExceptSelf(nums) {
  const response = [];
  let totalSum;
  nums.forEach((num) => {
    if (num !== 0) totalSum = !!totalSum ? totalSum * num : num;
  });
  nums.forEach((num) => {
    const value = num === 0 ? totalSum : totalSum / num;
    response.push(value);
  });
  return response;
}

function productExceptSelfPerform(nums) {
  const response = new Array(nums.length);
  const left = new Array(nums.length);
  const right = new Array(nums.length);
  left[0] = 1;
  right[nums.length - 1] = 1;
  for (let i = 1, maxInterations = nums.length; i < maxInterations; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 2; i > -1; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0, maxInterations = nums.length; i < maxInterations; i++) {
    response[i] = left[i] * right[i];
  }

  return response;
}

function productExceptSelfMorePerform(nums) {
  const response = new Array(nums.length);
  response[0] = 1;
  for (let i = 1, maxInterations = nums.length; i < maxInterations; i++) {
    response[i] = response[i - 1] * nums[i - 1];
  }

  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    response[i] = response[i] * right;
    right *= nums[i];
  }

  return response;
}

const input1 = [1, 2, 3, 4];
const input2 = [-1, 1, 0, -3, 3];

console.log(productExceptSelfMorePerform(input1));

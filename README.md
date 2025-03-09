# Micro Frontend Turborepo Starter
This project is a monolith with micro frontends using Turborepo.

/**
* Finds the maximum oscillating prefix sum and its index
* @param {number[]} nums - Array of integers
* @returns {Object} Object containing the maximum sum and its index
  */
  function maxOscillatingPrefixSum(nums) {
  if (!nums || nums.length === 0) {
  return { maxSum: 0, maxIndex: -1 };
  }

let currentSum = nums[0];
let maxSum = currentSum;
let maxIndex = 0;

for (let i = 1; i < nums.length; i++) {
// Apply alternating addition/subtraction
if (i % 2 === 1) {
currentSum -= nums[i]; // Subtract at odd indices
} else {
currentSum += nums[i]; // Add at even indices
}

    // Update maximum if current sum is greater
    if (currentSum > maxSum) {
      maxSum = currentSum;
      maxIndex = i;
    }
}

return { maxSum, maxIndex };
}

/**
* FOLLOW-UP: Finds the maximum oscillating sum for any subarray
* @param {number[]} nums - Array of integers
* @returns {Object} Object containing the maximum sum, start index, and end index
  */
  function maxOscillatingSubarraySum(nums) {
  if (!nums || nums.length === 0) {
  return { maxSum: 0, startIndex: -1, endIndex: -1 };
  }

// Initialize with first element
let globalMaxSum = nums[0];
let globalStartIndex = 0;
let globalEndIndex = 0;

// Try each possible starting position
for (let start = 0; start < nums.length; start++) {
let currentSum = nums[start];
let localMaxSum = currentSum;
let localEndIndex = start;

    // Calculate oscillating sum starting from this position
    for (let i = start + 1; i < nums.length; i++) {
      // Determine whether to add or subtract based on distance from start
      if ((i - start) % 2 === 1) {
        currentSum -= nums[i];
      } else {
        currentSum += nums[i];
      }
      
      // Update local maximum
      if (currentSum > localMaxSum) {
        localMaxSum = currentSum;
        localEndIndex = i;
      }
    }
    
    // Update global maximum if needed
    if (localMaxSum > globalMaxSum) {
      globalMaxSum = localMaxSum;
      globalStartIndex = start;
      globalEndIndex = localEndIndex;
    }
}

return { maxSum: globalMaxSum, startIndex: globalStartIndex, endIndex: globalEndIndex };
}

// Example usage:
const nums = [3, 1, 4, 1, 5];

// Test the original problem
const result1 = maxOscillatingPrefixSum(nums);
console.log(`Maximum oscillating prefix sum: ${result1.maxSum} at index ${result1.maxIndex}`);

// Test the follow-up problem
const result2 = maxOscillatingSubarraySum(nums);
console.log(`Maximum oscillating subarray sum: ${result2.maxSum} from index ${result2.startIndex} to ${result2.endIndex}`);
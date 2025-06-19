//explanation video striver - {from 8:30 timestamp}
// https://www.youtube.com/watch?v=2D0D8HE6uak
//naive approach is hashmap one , code of that - https://onecompiler.com/javascript/43kx4q8zs

/**
 * Finds the duplicated number A and the missing number B in an array `nums`
 * that should contain exactly the integers 1 through n, except one value is
 * duplicated and one is missing. Uses the “sum & sum-of-squares” formula.
 *
 * @param {number[]} nums - An array of length n with one value duplicated and one missing.
 * @return {[number, number]} - Returns [A, B], where A is the duplicated value and B is the missing value.
 */
function findErrorNums(nums) {
  const n = nums.length;

  // 1. Compute the “ideal” sums for 1…n:
  //    S      = 1 + 2 + … + n = n*(n+1)/2
  //    S_sq   = 1^2 + 2^2 + … + n^2 = n*(n+1)*(2n+1)/6
  const S    = (n * (n + 1)) / 2;
  const S_sq = (n * (n + 1) * (2 * n + 1)) / 6;

  // 2. Compute the actual sum and sum of squares of the input array:
  let sumNums = 0;
  let sumSqNums = 0;
  for (let i = 0; i < n; i++) {
    const x = nums[i];
    sumNums   += x;
    sumSqNums += x * x;
  }

  // 3. Compute the two “delta” values:
  //    delta1 = sumNums   - S      = A - B
  //    delta2 = sumSqNums - S_sq   = A^2 - B^2 = (A - B)*(A + B) = delta1 * (A + B)
  const delta1 = sumNums   - S;
  const delta2 = sumSqNums - S_sq;

  // 4. From delta2 = delta1 * (A + B), we get:
  //    A + B = delta2 / delta1
  const sumAB = delta2 / delta1;

  // 5. Solve the system:
  //    A - B = delta1
  //    A + B = sumAB
  //
  //    Adding:    2A = delta1 + sumAB  ⇒  A = (delta1 + sumAB) / 2
  //    Subtracting: 2B = sumAB - delta1 ⇒  B = (sumAB - delta1) / 2
  const A = (delta1 + sumAB) / 2;
  const B = (sumAB   - delta1) / 2;

  return [A, B];
}

// Example usage:
// let nums = [1, 2, 2, 4];  // n = 4, duplicated = 2, missing = 3
// console.log(findErrorNums(nums));  // Output: [2, 3]

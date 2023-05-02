function findMissingNumber(arr, N) {
    let expectedSum = (N * (N + 1)) / 2;
    let actualSum = arr.reduce((acc, cur) => acc + cur, 0);
    return expectedSum - actualSum;
  }
  
  let arr = [1, 2, 4, 6, 3, 7, 8];
  let N = 8;
  console.log(findMissingNumber(arr, N));  
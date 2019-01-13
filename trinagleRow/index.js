/**
 * Challenge
 * Have the function TriangleRow(num) take num which will be a positive integer
 * representing some row from Pascal's triangle. Pascal's triangle starts with a
 * [1] at the 0th row of the triangle. Then the first row is [1, 1] and the second row
 * is [1, 2, 1]. The next row begins with 1 and ends with 1, and the inside of the row
 * is determined by adding the k-1 and kth elements from the previous row. The next row
 * in the triangle would then be [1, 3, 3, 1], and so on. The input will be some positive
 * integer and your goal is to return the sum of that row.
 *
 * For example: if num is 4 then your program should
 * return the sum of 1 + 4 + 6 + 4 + 1 which is 16.
 */

function getRowSum(row = []) {
  return row.reduce((accum, item) => {
    accum+=item;

    return accum;
  }, 0);
}

function sumByPairs(array = []) {
  return array.reduce((accum, item, index) => {
    if (index > 0) {
      accum.push(array[index - 1] + item);
    }

    return accum;
  }, []);
}

function TriangleRow(num) {
  let index = -1;
  let isFinished = false;
  let array = [];
  let sum;

  while (!isFinished) {
    let levelArray = [];

    if (index >= 1) {
      sum = sumByPairs(array);
      levelArray  = [
        1,
        ...sum
      ];
    } else {
      levelArray = [
        ...array
      ];
    }

    levelArray.push(1);

    if (index === num - 1) {
      sum = getRowSum(levelArray);
      isFinished = true;
    }

    array = [...levelArray];
    index++;
  }

  return sum;
}

console.log(TriangleRow(4));


// Input:1

// Output:2


// Input:2

// Output:4

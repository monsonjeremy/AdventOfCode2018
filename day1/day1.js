/* eslint-disable no-eval */

export function part1(input) {
  const INPUT = input.split(/[\r\n]+/);
  const x = INPUT.map((line) => parseInt(line.trim()));
  console.log(x);
  const ans = x.reduce((sum, x) => {
    console.log(sum, x);
    return sum + x;
  }); 
  console.log(ans);
  return ans;
}

export function part2(input) {
  const INPUT = input.split(/[\r\n]+/);
  const x = INPUT.map((line) => parseInt(line.trim()));
  const theMap = {
  };

  let firstRepeat = null;
  let theSum = 0;

  let isFound = false;
  while (!isFound) {
    x.forEach((val) => {
      if (theMap[theSum] === 1 && !isFound) {
        firstRepeat = theSum;
        isFound = true;
      } else {
        theMap[theSum] = 1;
        theSum += val;
      }
    });
  }
  return firstRepeat;
}

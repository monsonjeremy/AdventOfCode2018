/* eslint-disable no-eval */

const tallyOccurences = (str) => str.split('').reduce((acc, currChar) => {
    (acc[currChar] ? acc[currChar] += 1: acc[currChar] = 1);
    return acc;
  }, {});

export function part1(input) {
  const INPUT = input.split(/[\r\n]+/);
  const saneInput = INPUT.map((line) => line.trim());
  const occurenceMapByLine = saneInput.map(tallyOccurences);

  let doubles = 0;
  let triples = 0;

  occurenceMapByLine.forEach(occurenceMap => {
    let hasFoundDouble = false;
    let hasFoundTriple = false;
    Object.keys(occurenceMap).forEach(char => {
      const occurence = occurenceMap[char];
      if (occurence === 2 && !hasFoundDouble) {
        doubles += 1;
        hasFoundDouble = true;
      } else if (occurence === 3 && !hasFoundTriple) {
        triples += 1;
        hasFoundTriple = true;
      }
    });
  });

  return doubles * triples;
}

export function part2(input) {
  const INPUT = input.split(/[\r\n]+/);
  const saneInput = INPUT.map((line) => line.trim());  let matchingStrings;

  for (let i = 0; i < saneInput.length; i += 1) {
    const string1 = saneInput[i];
    for (let j = i + 1; j < saneInput.length; j += 1) {
      const string2 = saneInput[j];
      let diffNum = 0;
      for (let letter= 0; letter < string1.length; letter += 1) {
        if (string1[letter] !== string2[letter]) {
          diffNum += 1;
        }
      }

      if (diffNum === 1) {
        matchingStrings = [string1, string2];
      }
    }
  }

  return matchingStrings[0].split('').reduce((acc, currChar) => {
    if (matchingStrings[1].includes(currChar)) acc += currChar;
    return acc;
  }, '');
}

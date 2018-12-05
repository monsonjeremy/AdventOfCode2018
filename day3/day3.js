/* eslint-disable no-eval */
export function part1(input) {
  const INPUT = input.split(/[\r\n]+/);
  const saneInput = INPUT.map((line) => {
    const trimmedLine = line.trim();
    const [id, split1] = trimmedLine.split('@').map(str => str.trim());
    const split2 = split1.split(':');
    const [ x, y ] = split2[0].trim().split(',').map((num) => parseInt(num, 10));
    const [width, height] = split2[1].trim().split('x').map((num) => parseInt(num, 10));
    return {
      id: id.split('')[1],
      x,
      y,
      width,
      height,
    };
  });
  
  const square = Array(1000).fill().map(()=>Array(1000).fill('.'));

  saneInput.forEach(instruction => {
    const { x, y, id, width, height, } = instruction;
    for (let vertical = y; vertical < y + height; vertical += 1) {
      for (let horiz = x; horiz < x + width; horiz += 1) {
        if (square[vertical][horiz] === '.') {
          square[vertical][horiz] = id;
        } else {
          square [vertical][horiz] = 'X';
        }
      }
    }
  });

  let xEntries = 0;
  square.forEach(line => line.forEach(entry => {
    if (entry === 'X') {
      xEntries += 1;
    }
  }));

  return xEntries;
}

export function part2(input) {
  const INPUT = input.split(/[\r\n]+/);
  const saneInput = INPUT.map((line) => {
    const trimmedLine = line.trim();
    const [id, split1] = trimmedLine.split('@').map(str => str.trim());
    const split2 = split1.split(':');
    const [ x, y ] = split2[0].trim().split(',').map((num) => parseInt(num, 10));
    const [width, height] = split2[1].trim().split('x').map((num) => parseInt(num, 10));
  
    return {
      id: id.split('#')[1],
      x,
      y,
      width,
      height,
    };
  });
  
  const square = Array(1000).fill().map(()=>Array(1000).fill('.'));

  let answer;
  saneInput.forEach(instruction => {
    const { x, y, id, width, height, } = instruction;
    for (let vertical = y; vertical < y + height; vertical += 1) {
      for (let horiz = x; horiz < x + width; horiz += 1) {
        if (square[vertical][horiz] === '.') {
          square[vertical][horiz] = id;
        } else {
          square [vertical][horiz] = 'X';
        }
      }
    }
  });

  saneInput.forEach(instruction => {
    let didOverlap = false;
    const { x, y, id, width, height, } = instruction;
    for (let vertical = y; vertical < y + height; vertical += 1) {
      for (let horiz = x; horiz < x + width; horiz += 1) {
        if (square[vertical][horiz] !== id) {
          didOverlap = true;
          break;
        }
      }
      if (didOverlap) break;
    }

    if (!didOverlap) {
      answer = id;
    }

  });

  return answer;
}

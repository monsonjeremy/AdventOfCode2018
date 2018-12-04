import { expect } from 'chai';
import fs from 'fs';
import { part1, part2 } from './day1';

const FINAL_INPUT = fs.readFileSync('./day1/day1.txt').toString('utf-8');

describe('Day 01', () => {
  describe('part 1', () => {
    it('on input: "+1, +1, +1" should return 10', done => {
      const input = `+3
      +3
      +4
      -2
      -4`;
      const expected = 10;
      expect(part1(input)).to.equal(expected);
      done();
    });
    it.only('on the final input, should return 4416', done => {
      const input = FINAL_INPUT;
      const expected = 493;
      expect(part1(input)).to.equal(expected);
      done();
    });
  });
  describe('part 2', () => {
    it('on the final input, should return 413', done => {
      const input = FINAL_INPUT;
      const expected = 493;
      expect(part2(input)).to.equal(expected);
      done();
    });
  });
});

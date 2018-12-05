import { expect } from 'chai';
import fs from 'fs';
import { part1, part2 } from './day3';

const FINAL_INPUT = fs.readFileSync('./day3/day3.txt').toString('utf-8');

describe('Day 01', () => {
  describe('part 1', () => {
    it('on input should succeed', done => {
      const input = `#1 @ 1,3: 4x4
      #2 @ 3,1: 4x4
      #3 @ 5,5: 2x2`;
      const expected = 4;
      expect(part1(input)).to.equal(expected);
      done();
    });
    it('on the final input, should succeed', done => {
      const input = FINAL_INPUT;
      const expected = 96569;
      expect(part1(input)).to.equal(expected);
      done();
    });
  });
  describe('part 2', () => {
    it('it should pass', done => {
      const input = `#1 @ 1,3: 4x4
      #2 @ 3,1: 4x4
      #3 @ 5,5: 2x2`;
      const expected = 3;
      expect(part2(input)).to.equal(expected);
      done();
    });
    it.only('on the final input, should succeed', done => {
      const input = FINAL_INPUT;
      const expected = 1;
      expect(part2(input)).to.equal(expected);
      done();
    });
  });
});

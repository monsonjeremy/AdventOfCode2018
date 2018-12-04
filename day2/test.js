import { expect } from 'chai';
import fs from 'fs';
import { part1, part2 } from './day2';

const FINAL_INPUT = fs.readFileSync('./day2/day2.txt').toString('utf-8');

describe('Day 01', () => {
  describe('part 1', () => {
    it('on input should succeed', done => {
      const input = `abcdef
      bababc
      abbcde
      abcccd
      aabcdd
      abcdee
      ababab`;
      const expected = 12;
      expect(part1(input)).to.equal(expected);
      done();
    });
    it('on the final input, should return 7657', done => {
      const input = FINAL_INPUT;
      const expected = 7657;
      expect(part1(input)).to.equal(expected);
      done();
    });
  });
  describe('part 2', () => {
    it('it should pass', done => {
      const input = `abcde
      fghij
      klmno
      pqrst
      fguij
      axcye
      wvxyz`;
      const expected = 'fgij';
      expect(part2(input)).to.equal(expected);
      done();
    });
    it.only('on the final input, should return "ivjhcadokeltwgsfsmqwrbnuy"', done => {
      const input = FINAL_INPUT;
      const expected = 'ivjhcadokeltwgsfsmqwrbnuy';
      expect(part2(input)).to.equal(expected);
      done();
    });
  });
});

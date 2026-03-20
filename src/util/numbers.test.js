import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('should transform a string number to a type number', () => {
  const string = '3';
  const result = transformToNumber(string);
  // expect(result).toBe(+string); // OR
  expect(result).toBeTypeOf('number');
});

it('should yield NaN for non-transformable values', () => {
  const input = 'invalid';

  const result = transformToNumber(input);

  expect(result).toBeNaN();
});

it('should throw an error if no argument is passed', () => {
  const resultFn = () => {
    transformToNumber();
  };

  expect(resultFn).toThrow();
});

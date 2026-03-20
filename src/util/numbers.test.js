import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('should transform a string number to a type number', () => {
  const string = '3';
  const result = transformToNumber(string);
  // expect(result).toBeTypeOf('number'); // OR
  expect(result).toBe(+string); // This is better though, as in the first option, if NaN was ever returned, then the test would pass, because NaN is of type number. And we don't want that, so this second version is more accurate
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

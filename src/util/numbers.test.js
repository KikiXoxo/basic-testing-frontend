import { describe, it, expect } from 'vitest';
import { cleanNumbers, transformToNumber } from './numbers';

describe('transformToNumber()', () => {
  it('should transform a string number to a type number', () => {
    const string = '3';
    const result = transformToNumber(string);
    // expect(result).toBeTypeOf('number'); // OR
    expect(result).toBe(+string); // This is better though, as in the first option, if NaN was ever returned, then the test would pass, because NaN is of type number. And we don't want that, so this second version is more accurate
  });

  it('should yield NaN for non-transformable values', () => {
    const input = 'invalid';
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
    // In this test, you can see we have two different inputs and expectations. While usually it is advised for a single test to have a single expectation, in this case, it is fine to have two expectations, because we are testing the same scenario, just with different possible inputs
  });

  it('should throw an error if no argument is passed', () => {
    const resultFn = () => {
      transformToNumber();
    };

    expect(resultFn).toThrow();
  });
});

describe('cleanNumbers()', () => {
  // This is considered an Integration Test, because the function being tested calls other functions within it, so we are testing the combination of these functions together. Because while those individual functions have their own unit tests that pass, sometimes an integration test is still necessary to see that these units key properly into each other
  it('should return an array of number values if an array of string number values is provided', () => {
    const numberValues = ['1', '2'];

    const cleanedNumbers = cleanNumbers(numberValues);

    expect(cleanedNumbers[0]).toBeTypeOf('number');
  });

  it('should throw an error if an array with at least one empty string is provided', () => {
    const numberValues = ['', '1'];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });
});

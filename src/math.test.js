import { it, expect } from 'vitest'; // You can also import 'test' if you prefer. Both 'it' and 'test' are aliases in Vitest, they can be used interchangeably.

import { add } from './math';

// The first parameter is a description of the test case. The second parameter is a function that contains the actual test code.
it('should summarize all number values in an array', () => {
  const result = add([1, 2, 3]); // You call the function you want to test, which in this case is add, with an array of number, and store the the result in a variable.

  expect(result).toBe(6); // You use the expect function to create an assertion ie the result you expect from the function. Here, we expect the result to be 6
});

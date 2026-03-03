import { it, expect } from 'vitest'; // You can also import 'test' if you prefer. Both 'it' and 'test' are aliases in Vitest, they can be used interchangeably.

import { add } from './math';

// The first parameter is a description of the test case. The second parameter is a function that contains the actual test code.
it('should summarize all number values in an array', () => {
  // const result = add([1, 2, 3]); // You call the function you want to test, which in this case is add, with an array of number, and store the the result in a variable.
  // expect(result).toBe(6); // You use the expect function to create an assertion ie the result you expect from the function. Here, we expect the result to be 6

  // While the above is okay, it is not the best way to write tests. The AAA pattern is a better way to write tests. It stands for Arrange, Act, Assert. It helps to structure your tests in a way that is easy to read and understand.
  // Arrange - Define testing environment and test values
  // Act - Execute the function you want to test
  // Assert - Verify the result of the function execution

  // Arrange
  const numbers = [1, 2, 3];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce((acc, num) => acc + num, 0); // We can use the reduce method to calculate the expected result instead of hardcoding it. This way, if we change the input array, we don't have to change the expected result manually.
  expect(result).toBe(expectedResult);
});

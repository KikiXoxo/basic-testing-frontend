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

// Usually, you don't write a single test case for a function however.You write multiple test cases to cover different scenarios and edge cases

it('should yield NaN if at least one invalid number is provided', () => {
  const inputs = ['invalid', 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});
// Writing different possible scenarios and the outcomes we want helps us catch bugs in the function we're testing eg currently, with the above test, while we wrote it to expect NaN, the reality is the output is '0invalid1' which is a bug in the add function. This is why writing multiple test cases is important to catch different bugs in the function, so we can fix them and make our function more robust.

it('should yield a correct sum if an array of numeric string values is provided', () => {
  const numbers = ['1', '2'];

  const result = add(numbers);

  const expectedResult = numbers.reduce((acc, num) => +acc + +num, 0);
  expect(result).toBe(expectedResult);
});
//For this test case, currently the output is '012' instead of 3, which is a bug in the add function. This test case helps us catch that bug and fix it.

it('should yield 0 if an empty array is provided', () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

it('should throw an error if no value is passed into the function', () => {
  // No Arrange stage here because we are not passing any values to the function

  const resultFn = () => {
    add();
  };
  // We define a function, and call the add function inside it without passing any values.
  // This way, add is not called immediately the test runs, but only when resultFn is called. And resultFn is called by Vitest inside expect(), and when used in conjuction with toThrow(), the test is considered successful if an error is thrown when resultFn is called. If no error is thrown, the test will fail

  expect(resultFn).toThrow();
});

it('should throw an error if provided with multiple arguments instead of an array', () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow();
});

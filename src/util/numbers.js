import { validateNumber, validateStringNotEmpty } from './validation.js';

export function transformToNumber(value) {
  // if (value === undefined) throw new Error('No value provided');
  if (value == null) throw new Error('No value provided');
  // This version is actually better and while generally, using '==' is discouraged, this is one of its few valid use cases, and is apparently common practice for nullish checks.
  // 'value === null' checks strictly for null, but 'value == null' checks for both null and undefined

  return +value;
}

export function cleanNumbers(numberValues) {
  const numbers = [];

  for (const numberInput of numberValues) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }

  return numbers;
}

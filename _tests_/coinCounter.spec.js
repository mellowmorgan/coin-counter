import coinCounter from './../src/coinCounter.js';

describe('coinCounter function', () => {
  test('should return 4 pennies if input is .04', () => {
    const result = coinCounter(.04);
    expect(result).toEqual("0 quarters, 0 dimes, 0 nickels, 4 pennies.");
  });

  test('should return 1 quarter and 4 pennies if input is .29', () => {
    const result2 = coinCounter(.29);
    expect(result2).toEqual("1 quarters, 0 dimes, 0 nickels, 4 pennies.");
  });

  test('should return 2 quarters and 1 dimes 1 nickels and 4 pennies if input is .69', () => {
    const result3 = coinCounter(.69);
    expect(result3).toEqual("2 quarters, 1 dimes, 1 nickels, 4 pennies.");
  });

  test('should return 8 quarters and 0 dimes 0 nickels and 0 pennies if input is 2', () => {
    const result4 = coinCounter(2);
    expect(result4).toEqual("8 quarters, 0 dimes, 0 nickels, 0 pennies.");
  });
  
  test('a non number entered gets error string', () => {
    const result5 = coinCounter("hello");
    expect(result5).toEqual(  "Error: You must enter a number");
  });
});


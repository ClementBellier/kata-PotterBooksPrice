import calculatePricePotterBooks from '../pricePotterBooks.js';

describe('Basic Tests:', () => {
  it('should be 0 when there is no book', () => {
    expect(calculatePricePotterBooks([])).toBe(0);
  });
  it('Should be 8 when there are one book 0', () => {
    expect(calculatePricePotterBooks([0])).toBe(8);
  });
  it('Should be 8*3 when there are three book 1', () => {
    expect(calculatePricePotterBooks([1, 1, 1, 1])).toBe(8 * 4);
  });
});
describe('Simple Discounts:', () => {
  it('Should be 8*2*0.95 when there are 2 differents books', () => {
    expect(calculatePricePotterBooks([0, 1])).toBe(8 * 2 * 0.95);
  });
  it('Should be 8*3*0.9 when there are 3 differents books', () => {
    expect(calculatePricePotterBooks([0, 2, 4])).toBe(8 * 3 * 0.9);
  });
  it('Should be 8*4*0.8 when there are 4 differents books', () => {
    expect(calculatePricePotterBooks([0, 1, 2, 4])).toBe(8 * 4 * 0.8);
  });
  it('Should be 8*5*0.75 when there are 5 differents books', () => {
    expect(calculatePricePotterBooks([0, 1, 2, 3, 4])).toBe(8 * 5 * 0.75);
  });
});
describe('Several Discounts', () => {
  it('Should be 8+(8*2*0.95) when there are 3 books and only 2 different', () => {
    expect(calculatePricePotterBooks([0, 0, 1])).toBe(8 + 8 * 2 * 0.95);
  });
  it('Should be 2*(8*2*0.95) when there are 4 books and only 2 different', () => {
    expect(calculatePricePotterBooks([0, 0, 1, 1])).toBe(2 * (8 * 2 * 0.95));
  });
  it('Should be (8*4*0.8)+(8*2*0.95) when there are 6 books and only 4 different', () => {
    expect(calculatePricePotterBooks([0, 0, 1, 2, 2, 3])).toBe(
      8 * 4 * 0.8 + 8 * 2 * 0.95
    );
  });
  it('Should be 8+(8*5*0.75) when there are 6 books and only 4 different', () => {
    expect(calculatePricePotterBooks([0, 1, 1, 2, 3, 4])).toBe(
      8 + 8 * 5 * 0.75
    );
  });
});
describe('Edge Case', () => {
  it('Should be 2 * (8 * 4 * 0.8) when the books are [0, 0, 1, 1, 2, 2, 3, 4]', () => {
    expect(calculatePricePotterBooks([0, 0, 1, 1, 2, 2, 3, 4])).toBe(
      2 * (8 * 4 * 0.8)
    );
  });
  it('Should be (3 * (8 * 5 * 0.75) + 2 * (8 * 4 * 0.8)) when the books are [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4]', () => {
    expect(
      calculatePricePotterBooks([
        0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4,
      ])
    ).toBe(3 * (8 * 5 * 0.75) + 2 * (8 * 4 * 0.8));
  });
});

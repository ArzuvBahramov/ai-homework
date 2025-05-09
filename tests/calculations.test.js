import { calculateTotal, calculateAverage, getTop3 } from '../public/utils/calculations.js';

describe('calculateTotal', () => {
  it('returns 0 for empty array', () => {
    expect(calculateTotal([])).toBe(0);
  });
  it('sums amounts correctly', () => {
    expect(calculateTotal([{amount: 10}, {amount: 20}])).toBe(30);
  });
});

describe('calculateAverage', () => {
  it('returns 0 if days is 0', () => {
    expect(calculateAverage(100, 0)).toBe(0);
  });
  it('calculates average correctly', () => {
    expect(calculateAverage(90, 30)).toBe(3);
  });
});

describe('getTop3', () => {
  it('returns empty array for no expenses', () => {
    expect(getTop3([])).toEqual([]);
  });
  it('returns all if less than 3', () => {
    const arr = [{amount: 1}, {amount: 2}];
    expect(getTop3(arr)).toEqual([{amount: 2}, {amount: 1}]);
  });
  it('returns top 3 sorted', () => {
    const arr = [
      {category: 'A', amount: 10},
      {category: 'B', amount: 50},
      {category: 'C', amount: 30},
      {category: 'D', amount: 20},
    ];
    expect(getTop3(arr)).toEqual([
      {category: 'B', amount: 50},
      {category: 'C', amount: 30},
      {category: 'D', amount: 20},
    ]);
  });
}); 
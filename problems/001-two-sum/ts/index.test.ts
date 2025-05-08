import { twoSum } from './index';

describe('Two Sum', () => {
  test('should find indices that sum to target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('should find indices when numbers are not in sequence', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test('should work with same numbers', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  test('should work with negative numbers', () => {
    expect(twoSum([-1, -2, -3, -4], -7)).toEqual([2, 3]);
  });

  test('should work with larger array', () => {
    expect(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 19)).toEqual([8, 9]);
  });
});

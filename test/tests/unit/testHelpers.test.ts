import { generateTestId, wait, retry, hasUniqueValues } from '../utils/testHelpers';

describe('Test Helper Utilities', () => {
  describe('generateTestId', () => {
    it('should generate unique IDs', () => {
      const id1 = generateTestId();
      const id2 = generateTestId();
      expect(id1).not.toBe(id2);
    });

    it('should include the prefix in the ID', () => {
      const id = generateTestId('user');
      expect(id).toContain('user-');
    });

    it('should use default prefix when none provided', () => {
      const id = generateTestId();
      expect(id).toContain('test-');
    });

    it('should generate IDs of consistent format', () => {
      const id = generateTestId('prefix');
      expect(id).toMatch(/prefix-\d+-[a-z0-9]+/);
    });
  });

  describe('wait', () => {
    it('should wait for specified milliseconds', async () => {
      const start = Date.now();
      await wait(100);
      const elapsed = Date.now() - start;
      expect(elapsed).toBeGreaterThanOrEqual(90);
      expect(elapsed).toBeLessThan(200);
    });

    it('should resolve after timeout', async () => {
      await expect(wait(50)).resolves.toBeUndefined();
    });
  });

  describe('retry', () => {
    it('should succeed on first attempt if function succeeds', async () => {
      const fn = jest.fn().mockResolvedValue('success');
      const result = await retry(fn, 3, 10);
      expect(result).toBe('success');
      expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should retry on failure and eventually succeed', async () => {
      const fn = jest.fn()
        .mockRejectedValueOnce(new Error('fail 1'))
        .mockRejectedValueOnce(new Error('fail 2'))
        .mockResolvedValue('success');
      
      const result = await retry(fn, 3, 10);
      expect(result).toBe('success');
      expect(fn).toHaveBeenCalledTimes(3);
    });

    it('should throw last error after all retries fail', async () => {
      const fn = jest.fn().mockRejectedValue(new Error('persistent failure'));
      
      await expect(retry(fn, 2, 10)).rejects.toThrow('persistent failure');
      expect(fn).toHaveBeenCalledTimes(2);
    });
  });

  describe('hasUniqueValues', () => {
    it('should return true for arrays with unique values', () => {
      expect(hasUniqueValues([1, 2, 3, 4, 5])).toBe(true);
      expect(hasUniqueValues(['a', 'b', 'c'])).toBe(true);
      expect(hasUniqueValues([])).toBe(true);
    });

    it('should return false for arrays with duplicate values', () => {
      expect(hasUniqueValues([1, 2, 2, 3])).toBe(false);
      expect(hasUniqueValues(['a', 'b', 'a'])).toBe(false);
    });

    it('should handle single element arrays', () => {
      expect(hasUniqueValues([1])).toBe(true);
      expect(hasUniqueValues(['only'])).toBe(true);
    });
  });
});

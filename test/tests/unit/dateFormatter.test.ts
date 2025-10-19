import { formatDate, isValidDate, isFutureDate } from '../utils/dateFormatter';

describe('Date Formatter Utilities', () => {
  describe('formatDate', () => {
    it('should format a valid date string correctly', () => {
      const date = '2025-09-15';
      const formatted = formatDate(date);
      expect(formatted).toBe('Sep 15, 2025');
    });

    it('should handle different date formats', () => {
      const date = 'September 15, 2025';
      const formatted = formatDate(date);
      expect(formatted).toContain('Sep');
      expect(formatted).toContain('2025');
    });

    it('should format current date', () => {
      const now = new Date().toISOString();
      const formatted = formatDate(now);
      expect(formatted).toMatch(/\w+ \d+, \d{4}/);
    });
  });

  describe('isValidDate', () => {
    it('should return true for valid date strings', () => {
      expect(isValidDate('2025-09-15')).toBe(true);
      expect(isValidDate('September 15, 2025')).toBe(true);
      expect(isValidDate('2025/09/15')).toBe(true);
    });

    it('should return false for invalid date strings', () => {
      expect(isValidDate('invalid-date')).toBe(false);
      expect(isValidDate('2025-13-45')).toBe(false);
      expect(isValidDate('')).toBe(false);
    });

    it('should handle edge cases', () => {
      expect(isValidDate('0')).toBe(true); // Unix epoch
      expect(isValidDate('abc123')).toBe(false);
    });
  });

  describe('isFutureDate', () => {
    it('should return true for future dates', () => {
      const futureDate = new Date();
      futureDate.setFullYear(futureDate.getFullYear() + 1);
      expect(isFutureDate(futureDate.toISOString())).toBe(true);
    });

    it('should return false for past dates', () => {
      const pastDate = new Date();
      pastDate.setFullYear(pastDate.getFullYear() - 1);
      expect(isFutureDate(pastDate.toISOString())).toBe(false);
    });

    it('should handle dates close to current time', () => {
      const now = new Date();
      const almostFuture = new Date(now.getTime() + 1000);
      expect(isFutureDate(almostFuture.toISOString())).toBe(true);
    });
  });
});

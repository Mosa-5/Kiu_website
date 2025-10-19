import { isValidUrl, isValidEmail, hasMinLength, isImageUrl } from '../utils/validators';

describe('Validator Utilities', () => {
  describe('isValidUrl', () => {
    it('should return true for valid URLs', () => {
      expect(isValidUrl('https://kiu-website.vercel.app')).toBe(true);
      expect(isValidUrl('http://example.com')).toBe(true);
      expect(isValidUrl('https://example.com/path?query=1')).toBe(true);
    });

    it('should return false for invalid URLs', () => {
      expect(isValidUrl('not-a-url')).toBe(false);
      expect(isValidUrl('htp://invalid')).toBe(false);
      expect(isValidUrl('')).toBe(false);
    });

    it('should handle URLs with different protocols', () => {
      expect(isValidUrl('ftp://files.example.com')).toBe(true);
      expect(isValidUrl('mailto:test@example.com')).toBe(true);
    });
  });

  describe('isValidEmail', () => {
    it('should return true for valid email addresses', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
      expect(isValidEmail('info@kiu.edu.ge')).toBe(true);
    });

    it('should return false for invalid email addresses', () => {
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('user@')).toBe(false);
      expect(isValidEmail('')).toBe(false);
    });

    it('should handle edge cases', () => {
      expect(isValidEmail('user@domain')).toBe(false);
      expect(isValidEmail('user name@example.com')).toBe(false);
    });
  });

  describe('hasMinLength', () => {
    it('should return true when string meets minimum length', () => {
      expect(hasMinLength('hello', 5)).toBe(true);
      expect(hasMinLength('testing', 5)).toBe(true);
      expect(hasMinLength('a', 1)).toBe(true);
    });

    it('should return false when string is too short', () => {
      expect(hasMinLength('hi', 5)).toBe(false);
      expect(hasMinLength('', 1)).toBe(false);
    });

    it('should handle exact length match', () => {
      expect(hasMinLength('exact', 5)).toBe(true);
    });
  });

  describe('isImageUrl', () => {
    it('should return true for image URLs', () => {
      expect(isImageUrl('https://example.com/photo.jpg')).toBe(true);
      expect(isImageUrl('https://example.com/image.png')).toBe(true);
      expect(isImageUrl('/assets/kiu-logo.svg')).toBe(true);
      expect(isImageUrl('https://example.com/pic.webp')).toBe(true);
    });

    it('should return false for non-image URLs', () => {
      expect(isImageUrl('https://example.com/document.pdf')).toBe(false);
      expect(isImageUrl('https://example.com/video.mp4')).toBe(false);
      expect(isImageUrl('https://example.com')).toBe(false);
    });

    it('should handle case insensitivity', () => {
      expect(isImageUrl('https://example.com/PHOTO.JPG')).toBe(true);
      expect(isImageUrl('https://example.com/Image.PNG')).toBe(true);
    });
  });
});

/**
 * Validates if a URL is properly formatted
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validates if an email is properly formatted
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Checks if a string has minimum length
 */
export function hasMinLength(str: string, minLength: number): boolean {
  return str.length >= minLength;
}

/**
 * Checks if an image URL is accessible
 */
export function isImageUrl(url: string): boolean {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'];
  return imageExtensions.some(ext => url.toLowerCase().includes(ext));
}

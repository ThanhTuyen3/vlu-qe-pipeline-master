const { login } = require('./auth');

describe('Auth Regression Tests (Quality Gate 2)', () => {
  test('should return true for correct admin credentials', () => {
    expect(login('admin', '123')).toBe(true);
  });

  test('should return false for incorrect password', () => {
    expect(login('admin', 'wrongpass')).toBe(false);
  });

  test('should return false for empty username', () => {
    expect(login('', '123')).toBe(false);
  });

  test('should return false for special characters in password', () => {
    expect(login('admin', '123!@#')).toBe(false);
  });

  test('should return false for locked or non-existent user', () => {
    expect(login('hacker', '123')).toBe(false);
  });
});

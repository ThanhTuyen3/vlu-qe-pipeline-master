const { login } = require('./auth');

describe('Auth Smoke Tests (Quality Gate 1)', () => {
  test('should return true for correct admin credentials', () => {
    expect(login('admin', '123')).toBe(true);
  });
});

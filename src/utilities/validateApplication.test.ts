import { describe, it, expect } from 'vitest';
import { validateApplication } from './validateApplication';

describe('validateApplication', () => {
  it('should return true for valid application', () => {
    const validApp = {
      name: 'Luke Skywalker',
      species: 'Human',
      starship: {
        name: 'X-Wing',
        model: 'T-65B X-Wing',
      },
    };
    expect(validateApplication(validApp)).toBe(true);
  });

  it('should return false for application with empty name', () => {
    const invalidApp = {
      name: '',
      species: 'Human',
      starship: 'X-Wing',
    };
    expect(validateApplication(invalidApp)).toBe(false);
  });

  it('should return false for application with empty species', () => {
    const invalidApp = {
      name: 'Luke Skywalker',
      species: '',
      starship: 'X-Wing',
    };
    expect(validateApplication(invalidApp)).toBe(false);
  });

  it('should return false for application with empty starship', () => {
    const invalidApp = {
      name: 'Luke Skywalker',
      species: 'Human',
      starship: '',
    };
    expect(validateApplication(invalidApp)).toBe(false);
  });
});

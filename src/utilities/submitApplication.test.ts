import { describe, it, expect, vi } from 'vitest';
import { submitApplication, SubmissionResponse } from './submitApplication';

describe('submitApplication', () => {
  it('should return a response after a delay', async () => {
    const result = await submitApplication({ name: 'Luke', species: 'Human', starship: 'X-Wing' });
    expect(result).toHaveProperty('conflict');
  });

  it('should return a success response with an applicationId when no conflict', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5);
    const result = await submitApplication({ name: 'Luke', species: 'Human', starship: 'X-Wing' });

    expect(result.conflict).toBe(false);
    if (!result.conflict) {
      expect(result.applicationId).toMatch(/^APP-/);
    }

    vi.restoreAllMocks();
  });

  it('should return a conflict response with alternatives when conflict occurs', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.1);
    const result: SubmissionResponse = await submitApplication({
      name: 'Luke',
      species: 'Human',
      starship: 'X-Wing',
    });

    expect(result.conflict).toBe(true);
    if (result.conflict) {
      expect(result.field).toBe('species');
      expect(result.message).toContain('Human');
      expect(result.alternatives).toHaveLength(3);
    }

    vi.restoreAllMocks();
  });
});

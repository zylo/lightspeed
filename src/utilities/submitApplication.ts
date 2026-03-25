export interface ConflictResponse {
  conflict: true;
  field: string;
  message: string;
  alternatives: string[];
}

export interface SuccessResponse {
  conflict: false;
  applicationId: string;
}

export type SubmissionResponse = ConflictResponse | SuccessResponse;

export async function submitApplication(
  data: Record<string, string>
): Promise<SubmissionResponse> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (Math.random() < 0.3) {
    return {
      conflict: true,
      field: 'species',
      message: `${data.species} is no longer available for recruitment`,
      alternatives: ["Twi'lek", 'Zabrak', 'Togruta'],
    };
  }

  return {
    conflict: false,
    applicationId: `APP-${Date.now()}`,
  };
}

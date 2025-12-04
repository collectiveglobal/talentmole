'use server';

import { generateSimilarContent } from '@/ai/flows/content-generation-assistant';
import { z } from 'zod';

const formSchema = z.object({
  topic: z.string().min(10, 'Topic must be at least 10 characters long.'),
});

type State = {
  message?: string | null;
  suggestedContent?: string | null;
  errors?: {
    topic?: string[];
  } | null;
};

export async function generateContentAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = formSchema.safeParse({
    topic: formData.get('topic'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check your input.',
    };
  }

  try {
    const result = await generateSimilarContent({ topic: validatedFields.data.topic });
    if (!result.suggestedContent) {
        throw new Error('AI failed to generate content.');
    }
    return {
      message: 'Content generated successfully!',
      suggestedContent: result.suggestedContent,
    };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return {
      message: `An error occurred while generating content: ${errorMessage}`,
    };
  }
}

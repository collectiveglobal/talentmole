'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating website content similar to Talent Mole's.
 *
 * It includes:
 * - `generateSimilarContent`: An asynchronous function that takes a topic as input and returns suggested content.
 * - `GenerateSimilarContentInput`: The input type for the `generateSimilarContent` function.
 * - `GenerateSimilarContentOutput`: The output type for the `generateSimilarContent` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSimilarContentInputSchema = z.object({
  topic: z.string().describe('The topic for which to generate similar website content.'),
});
export type GenerateSimilarContentInput = z.infer<typeof GenerateSimilarContentInputSchema>;

const GenerateSimilarContentOutputSchema = z.object({
  suggestedContent: z.string().describe('AI-generated website content similar to Talent Mole for the given topic.'),
});
export type GenerateSimilarContentOutput = z.infer<typeof GenerateSimilarContentOutputSchema>;

export async function generateSimilarContent(input: GenerateSimilarContentInput): Promise<GenerateSimilarContentOutput> {
  return generateSimilarContentFlow(input);
}

const generateSimilarContentPrompt = ai.definePrompt({
  name: 'generateSimilarContentPrompt',
  input: {schema: GenerateSimilarContentInputSchema},
  output: {schema: GenerateSimilarContentOutputSchema},
  prompt: `You are an AI assistant specialized in generating website content similar to Talent Mole.
  Based on the given topic, create unique and engaging content suitable for a website.
  Topic: {{{topic}}}
  Content:
`,
});

const generateSimilarContentFlow = ai.defineFlow(
  {
    name: 'generateSimilarContentFlow',
    inputSchema: GenerateSimilarContentInputSchema,
    outputSchema: GenerateSimilarContentOutputSchema,
  },
  async input => {
    const {output} = await generateSimilarContentPrompt(input);
    return output!;
  }
);

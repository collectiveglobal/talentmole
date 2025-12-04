'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { generateContentAction } from './actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Wand2, Loader2 } from 'lucide-react';

const initialState = {
  message: null,
  suggestedContent: null,
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" aria-disabled={pending} size="lg">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-5 w-5" />
          Generate Content
        </>
      )}
    </Button>
  );
}

export default function ContentAssistantPage() {
  const [state, formAction] = useFormState(generateContentAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.errors) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      })
    } else if (state.message && !state.errors) {
        toast({
            title: "Success",
            description: state.message,
        })
    }
  }, [state, toast]);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 md:px-6">
       <div className="mx-auto max-w-3xl text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Content Generation Assistant
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Stuck for words? Provide a topic and let our AI generate unique and engaging website content for you, inspired by Talent Mole's style.
          </p>
        </div>

      <Card className="border-primary/20 shadow-xl">
        <CardHeader>
             <CardTitle>Create Your Content</CardTitle>
             <CardDescription>Enter a topic below to get started.</CardDescription>
        </CardHeader>
        <CardContent>
            <form action={formAction} className="space-y-6">
                <div className="space-y-2">
                <Label htmlFor="topic" className="text-lg font-medium">Topic</Label>
                <Textarea
                    id="topic"
                    name="topic"
                    placeholder="e.g., 'A new way to hire remote software engineers'"
                    rows={4}
                    required
                    className="text-base"
                />
                {state.errors?.topic && (
                    <p className="text-sm font-medium text-destructive">
                    {state.errors.topic[0]}
                    </p>
                )}
                </div>
                <SubmitButton />
            </form>
        </CardContent>
      </Card>
      
      {state.suggestedContent && (
        <Card className="mt-12 border-accent/20">
          <CardHeader>
            <CardTitle>Suggested Content</CardTitle>
            <CardDescription>Here's the AI-generated content based on your topic. Feel free to edit it below.</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              key={state.suggestedContent} // re-mount component to update defaultValue
              defaultValue={state.suggestedContent}
              rows={15}
              className="text-base"
            />
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">You can now copy and use this content on your website.</p>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}

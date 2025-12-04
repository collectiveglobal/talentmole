'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast"
import { Upload } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: 'Full name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  role: z.string().min(2, {
    message: 'Role must be at least 2 characters.',
  }),
  portfolioUrl: z.string().url({
    message: 'Please enter a valid URL.',
  }).optional().or(z.literal('')),
  resume: z.any().optional(),
  bio: z.string().min(10, {
    message: 'Bio must be at least 10 characters long.'
  }).max(500, {
    message: 'Bio must not exceed 500 characters.'
  }),
});

export default function GetStartedPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      role: '',
      portfolioUrl: '',
      bio: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Application Submitted!",
      description: "We've received your application and will be in touch shortly.",
    })
    form.reset();
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-16 md:px-6">
      <Card className="border-primary/20 shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">Join Talent Mole</CardTitle>
          <CardDescription>
            Create your talent profile and get discovered by top companies.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Jane Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Desired Role</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Senior Frontend Developer" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="portfolioUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Portfolio/Website URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://yourportfolio.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Bio</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us a little bit about yourself..." {...field} />
                    </FormControl>
                     <FormDescription>
                      This is your chance to shine. Briefly describe your skills and passion.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="resume"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Resume/CV</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input type="file" className="pl-12" {...field} />
                        <Upload className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full">Submit Application</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

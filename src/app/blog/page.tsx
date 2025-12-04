import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { blogPosts } from './data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: 'Blog | Talent Mole',
  description: 'Explore the latest trends in HR and AI-powered recruitment. Stay ahead with our expert analysis on the Canadian job market.',
};

export default function BlogPage() {
  // Sort posts by date in descending order
  const sortedPosts = blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="bg-secondary/30">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            The Future of HR <br /> AI & Recruitment Insights
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore the latest trends in HR and AI-powered recruitment. Stay ahead with our expert analysis on the Canadian job market.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.map((post) => {
            const image = PlaceHolderImages.find((img) => img.id === post.imageId);
            return (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
                <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader className="p-0">
                    {image && (
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          data-ai-hint={image.imageHint}
                          width={600}
                          height={400}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="flex-grow p-6">
                    <CardTitle className="mb-2 text-xl font-semibold leading-snug group-hover:text-primary">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex items-center justify-end p-6 pt-0">
                    <div className="flex items-center text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

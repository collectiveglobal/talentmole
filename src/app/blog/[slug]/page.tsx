import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '../data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  return {
    title: `${post.title} | Talent Mole Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === post.imageId);
  const authorAvatar = PlaceHolderImages.find(img => img.id === 'testimonial-avatar-2');


  return (
    <article className="py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
        
        <h1 className="font-headline mb-4 text-4xl font-bold tracking-tight text-primary md:text-5xl">
          {post.title}
        </h1>

        <div className="mb-8 flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              {authorAvatar && <AvatarImage src={authorAvatar.imageUrl} alt={post.author} />}
              <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{post.author}</span>
          </div>
          <span className="text-muted-foreground/50">|</span>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
        </div>
        
        {image && (
          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src={image.imageUrl}
              alt={image.description}
              data-ai-hint={image.imageHint}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div
          className="prose prose-lg max-w-none text-foreground/90 prose-h3:text-primary prose-a:text-primary prose-a:transition-colors hover:prose-a:text-accent"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

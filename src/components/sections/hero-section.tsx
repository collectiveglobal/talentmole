import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { PlayCircle } from "lucide-react";

export function HeroSection() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'hero-video-player');

    return (
        <section className="bg-secondary/30 py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
                    <div className="space-y-6 text-center md:text-left">
                        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
                            Get to know candidates better & spend less time filtering
                        </h1>
                        <p className="max-w-[600px] text-lg text-muted-foreground md:mx-0">
                            A new and faster way to screen candidates. Let candidates answer your screening questions in a short one-way video interview.
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                            <Button asChild size="lg">
                                <Link href="/get-started">Get Started for Free</Link>
                            </Button>
                            <Button variant="outline" size="lg">
                                <PlayCircle className="mr-2 h-5 w-5" />
                                Watch Demo
                            </Button>
                        </div>
                    </div>
                    <div className="relative mx-auto w-full max-w-2xl">
                        {heroImage && (
                            <Image
                                src={heroImage.imageUrl}
                                alt={heroImage.description}
                                data-ai-hint={heroImage.imageHint}
                                width={1200}
                                height={800}
                                className="rounded-lg shadow-2xl"
                                priority
                            />
                        )}
                        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/20">
                            <PlayCircle className="h-20 w-20 text-white/80 transition-transform hover:scale-110" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function HeroSection() {
    const heroIpad = PlaceHolderImages.find(img => img.id === 'hero-ipad');
    const heroImg1 = PlaceHolderImages.find(img => img.id === 'hero-img-1');
    const heroImg2 = PlaceHolderImages.find(img => img.id === 'hero-img-2');
    const heroImg3 = PlaceHolderImages.find(img => img.id === 'hero-img-3');

    return (
        <section className="py-20 md:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
                    <div className="space-y-6 z-10">
                        <h1 className="text-4xl font-bold tracking-tighter text-gray-800 sm:text-5xl md:text-6xl">
                            Get to know candidates better & spend less time <span className="text-primary">screening.</span>
                        </h1>
                        <p className="max-w-[600px] text-lg text-muted-foreground">
                            Instead of spending hours combing through CVs, watch a showreel & learn candidate qualities faster.
                        </p>
                    </div>
                    <div className="relative mx-auto w-full max-w-2xl">
                        {heroIpad && (
                            <Image
                                src={heroIpad.imageUrl}
                                alt={heroIpad.description}
                                data-ai-hint={heroIpad.imageHint}
                                width={550}
                                height={450}
                                className="mx-auto"
                                priority
                            />
                        )}
                        {heroImg1 && (
                            <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-32 h-32">
                                <Image src={heroImg1.imageUrl} alt={heroImg1.description} data-ai-hint={heroImg1.imageHint} layout="fill" objectFit="contain" />
                            </div>
                        )}
                        {heroImg2 && (
                            <div className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 w-24 h-24">
                                <Image src={heroImg2.imageUrl} alt={heroImg2.description} data-ai-hint={heroImg2.imageHint} layout="fill" objectFit="contain" />
                            </div>
                        )}
                        {heroImg3 && (
                            <div className="absolute bottom-0 left-1/4 translate-y-1/4 w-40 h-40">
                                <Image src={heroImg3.imageUrl} alt={heroImg3.description} data-ai-hint={heroImg3.imageHint} layout="fill" objectFit="contain" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function HeroSection() {
    const heroIpad = PlaceHolderImages.find(img => img.id === 'hero-ipad');
    const heroImg1 = PlaceHolderImages.find(img => img.id === 'hero-img-1');
    const heroImg2 = PlaceHolderImages.find(img => img.id === 'hero-img-2');
    const heroImg3 = PlaceHolderImages.find(img => img.id === 'hero-img-3');
    const heroDots = PlaceHolderImages.find(img => img.id === 'hero-dots');
    const heroShape2 = PlaceHolderImages.find(img => img.id === 'hero-shape-2');
    const heroShape3 = PlaceHolderImages.find(img => img.id === 'hero-shape-3');

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
                    <div className="relative mx-auto w-full max-w-2xl h-[450px]">
                        {heroIpad && (
                             <div className="absolute inset-0 flex items-center justify-center">
                                <Image
                                    src={heroIpad.imageUrl}
                                    alt={heroIpad.description}
                                    data-ai-hint={heroIpad.imageHint}
                                    width={550}
                                    height={412}
                                    className="z-20"
                                    priority
                                />
                            </div>
                        )}
                        {heroImg1 && (
                            <div className="absolute top-[10%] left-[5%] w-[130px] h-[130px] z-30">
                                <Image src={heroImg1.imageUrl} alt={heroImg1.description} data-ai-hint={heroImg1.imageHint} layout="fill" objectFit="contain" />
                            </div>
                        )}
                        {heroImg2 && (
                            <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[150px] h-[150px] z-10">
                                <Image src={heroImg2.imageUrl} alt={heroImg2.description} data-ai-hint={heroImg2.imageHint} layout="fill" objectFit="cover" className="rounded-full" />
                            </div>
                        )}
                        {heroImg3 && (
                            <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[140px] h-[140px] z-30">
                                <Image src={heroImg3.imageUrl} alt={heroImg3.description} data-ai-hint={heroImg3.imageHint} layout="fill" objectFit="contain" />
                            </div>
                        )}
                        {heroDots && (
                            <div className="absolute top-[30%] left-0 w-[100px] h-[200px] z-10">
                                <Image src={heroDots.imageUrl} alt={heroDots.description} data-ai-hint={heroDots.imageHint} layout="fill" objectFit="contain" />
                            </div>
                        )}
                         {heroShape2 && (
                            <div className="absolute top-1/2 -translate-y-1/2 right-[5%] w-[120px] h-[120px] z-10">
                                <Image src={heroShape2.imageUrl} alt={heroShape2.description} data-ai-hint={heroShape2.imageHint} layout="fill" objectFit="contain" />
                            </div>
                        )}
                         {heroShape3 && (
                            <div className="absolute bottom-[5%] right-[10%] w-[150px] h-[100px] z-30">
                                <Image src={heroShape3.imageUrl} alt={heroShape3.description} data-ai-hint={heroShape3.imageHint} layout="fill" objectFit="contain" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Rocket } from "lucide-react";

export function ForTalentsSection() {
    const sectionImage = PlaceHolderImages.find(img => img.id === 'for-talents-image');

    return (
        <section id="for-talents" className="py-20 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
                    <div className="order-2 md:order-1 flex justify-center">
                         {sectionImage && (
                            <Image
                                src={sectionImage.imageUrl}
                                alt={sectionImage.description}
                                data-ai-hint={sectionImage.imageHint}
                                width={600}
                                height={500}
                                className="rounded-lg shadow-xl"
                            />
                        )}
                    </div>
                    <div className="order-1 md:order-2 space-y-6">
                        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                            Showcase Your Skills and Personality
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Tired of being just another resume in a pile? Talent Mole lets you show off your skills and personality with a short video interview. Stand out from the crowd and get noticed by top companies.
                        </p>
                        <Button asChild size="lg">
                            <Link href="/get-started">
                                Create Your Talent Profile
                                <Rocket className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

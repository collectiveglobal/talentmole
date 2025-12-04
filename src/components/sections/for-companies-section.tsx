import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Briefcase } from "lucide-react";

export function ForCompaniesSection() {
    const sectionImage = PlaceHolderImages.find(img => img.id === 'for-companies-image');

    return (
        <section id="for-companies" className="bg-secondary/30 py-20 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
                    <div className="space-y-6">
                        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                            Find the Right Candidates, Faster
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Stop wasting time on manual screening. With Talent Mole, you can quickly get a sense of a candidate's personality and communication skills before you even schedule a call. Find the right fit for your team in record time.
                        </p>
                        <Button asChild size="lg" variant="secondary" className="bg-white hover:bg-gray-100 text-primary">
                            <Link href="/get-started">
                                Post a Job
                                <Briefcase className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                     <div className="flex justify-center">
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
                </div>
            </div>
        </section>
    );
}

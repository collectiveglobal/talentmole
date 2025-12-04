import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";

const features = [
  "Create a job and set screening questions",
  "Invite candidates to answer them in a short video",
  "Watch the videos and decide who to invite for a live interview",
];

export function BulkScreeningSection() {
    const sectionImage = PlaceHolderImages.find(img => img.id === 'bulk-screening-dashboard');

    return (
        <section className="bg-secondary/30 py-20 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
                    <div className="space-y-6">
                        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                            An efficient approach to bulk candidate screening
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Talent Mole helps you screen candidates more efficiently by letting them answer your questions in a short one-way video interview. This way, you can get a better sense of their personality and communication skills before inviting them for a live interview.
                        </p>
                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                                    <span className="text-foreground/90">{feature}</span>
                                </li>
                            ))}
                        </ul>
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

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    title: "Create your profile",
    description: "Sign up and create your talent profile. Add your skills, experience, and a short bio to stand out to employers.",
    image: PlaceHolderImages.find(img => img.id === 'how-it-works-1'),
  },
  {
    title: "Record your video",
    description: "Answer a few screening questions in a short one-way video interview. Let your personality shine through!",
    image: PlaceHolderImages.find(img => img.id === 'how-it-works-2'),
  },
  {
    title: "Apply for jobs",
    description: "Browse jobs and apply with your video profile. Get noticed by top companies and land your dream job.",
    image: PlaceHolderImages.find(img => img.id === 'how-it-works-3'),
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Getting started with Talent Mole is easy. Just follow these three simple steps.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="overflow-hidden transition-shadow hover:shadow-lg">
              <CardContent className="p-0">
                {step.image && (
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={step.image.imageUrl}
                      alt={step.image.description}
                      data-ai-hint={step.image.imageHint}
                      width={500}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

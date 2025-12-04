import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check } from "lucide-react";

const features = [
  {
    title: "Auto-Tag & Segment",
    description: "Short videos are automatically tagged through a natural language model that understands what's being said",
  },
  {
    title: "Talent on Tap",
    description: "Leave notes, make comments, and even shortlist from directly within the video frame & easily share notes",
  },
  {
    title: "Beta Program",
    description: "Get one-of-a-kind support by signing up to be part of the early access program - we learn from you!",
  },
];

export function ContentSection2() {
  const dashboardImage = PlaceHolderImages.find(img => img.id === 'content-img-l4-2');

  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase text-electric-violet">Why Choose TalentMole?</p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl mt-2">
                The first AI-driven hiring platform made for soft skills
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Unlike other software, TalentMole allows you to screen 100 candidates in just 10 minutes.
              </p>
            </div>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-electric-violet/10 text-electric-violet flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-first md:order-last">
            {dashboardImage &&
              <Image
                src={dashboardImage.imageUrl}
                alt={dashboardImage.description}
                data-ai-hint={dashboardImage.imageHint}
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            }
          </div>
        </div>
      </div>
    </section>
  );
}

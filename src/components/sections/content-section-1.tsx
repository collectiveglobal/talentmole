import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";
import { ArrowUp } from "lucide-react";

export function ContentSection1() {
  const womanImage = PlaceHolderImages.find(img => img.id === 'content-woman');

  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {womanImage &&
              <Image
                src={womanImage.imageUrl}
                alt={womanImage.description}
                data-ai-hint={womanImage.imageHint}
                width={500}
                height={600}
                className="rounded-lg shadow-lg mx-auto"
              />
            }
            <Card className="absolute bottom-8 -right-8 bg-deep-orange text-primary-foreground p-4 max-w-xs shadow-xl">
              <div className="flex items-end">
                <p className="text-5xl font-bold">68%</p>
                <ArrowUp className="w-8 h-8 ml-2 mb-1" />
              </div>
              <p className="mt-2">Time saved in the screening process.</p>
            </Card>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-medium tracking-tighter text-gray-800" style={{lineHeight: '1.1'}}>
              Get instant access to the real candidate.
            </h2>
            <p className="text-lg text-muted-foreground">
              We know what it's like to sift through pages upon pages of text and keywords, but still feel like you've learned nothing. TalentMole unlocks the persona in each candidate without sacrificing your time or data needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

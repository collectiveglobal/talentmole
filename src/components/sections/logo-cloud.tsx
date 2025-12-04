import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const logos = [
  PlaceHolderImages.find(img => img.id === 'company-logo-1'),
  PlaceHolderImages.find(img => img.id === 'company-logo-2'),
  PlaceHolderImages.find(img => img.id === 'company-logo-3'),
  PlaceHolderImages.find(img => img.id === 'company-logo-4'),
  PlaceHolderImages.find(img => img.id === 'company-logo-5'),
].filter(Boolean);

export function LogoCloud() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Trusted by companies worldwide
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {logos.map((logo, index) => (
            logo && (
              <div key={index} className="relative h-[30px] w-[120px] sm:h-[40px] sm:w-[150px]">
                <Image
                  src={logo.imageUrl}
                  alt={logo.description}
                  data-ai-hint={logo.imageHint}
                  fill
                  style={{ objectFit: "contain", filter: 'grayscale(100%) opacity(0.6)' }}
                  className="transition-all hover:filter-none"
                />
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}

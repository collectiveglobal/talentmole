import { cn } from "@/lib/utils";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Logo({ className }: { className?: string }) {
  const darkLogo = PlaceHolderImages.find(img => img.id === 'logo-dark');
  const whiteLogo = PlaceHolderImages.find(img => img.id === 'logo-white');

  return (
    <div className={cn("relative h-8 w-32", className)}>
      {darkLogo && (
        <Image
          src={darkLogo.imageUrl}
          alt="Talent Mole Logo"
          fill
          className="object-contain dark:hidden"
        />
      )}
      {whiteLogo && (
         <Image
          src={whiteLogo.imageUrl}
          alt="Talent Mole Logo"
          fill
          className="object-contain hidden dark:block"
        />
      )}
      <span className="sr-only">Talent Mole</span>
    </div>
  );
}

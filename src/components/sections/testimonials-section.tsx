import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Talent Mole revolutionized our hiring process. The video interviews gave us insights we could never get from a resume alone. We've hired amazing people we might have otherwise overlooked.",
    name: "Sarah Johnson",
    role: "HR Manager, Tech Innovators",
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-avatar-1'),
  },
  {
    quote: "As a developer, it's hard to convey your passion in a CV. Talent Mole allowed me to show my personality and my problem-solving approach. I landed my dream job through the platform!",
    name: "David Chen",
    role: "Senior Software Engineer",
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-avatar-2'),
  },
  {
    quote: "The efficiency is incredible. We screened over 100 candidates for a role in a fraction of the time it used to take. It's a game-changer for high-volume recruitment.",
    name: "Maria Rodriguez",
    role: "Recruitment Lead, Global Corp",
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-avatar-3'),
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Loved by Talents and Companies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our users are saying.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto mt-16 w-full max-w-4xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex h-full flex-col items-center justify-center p-8 text-center">
                      <p className="mb-6 text-lg italic text-foreground/90">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-4">
                        {testimonial.avatar && (
                           <Avatar>
                                <AvatarImage src={testimonial.avatar.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.avatar.imageHint} />
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                        )}
                        <div>
                            <p className="font-semibold text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

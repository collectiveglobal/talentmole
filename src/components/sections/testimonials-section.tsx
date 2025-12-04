'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "We learned so much more about people and actually spent less time! Easy, reliable & fast.",
    name: "John Doe",
    role: "HR, Design Agency",
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-1'),
  },
  {
    quote: "The TalentMole Beta helped us better understand what we were missing from our recruitment process.",
    name: "Tiana Dokidis",
    role: "Recruiter, Fortune 500",
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-2'),
  },
  {
    quote: "I'm excited for TalentMole's release - seeing early footage, it's clear that this could be a game-changer!",
    name: "Talan Bergson",
    role: "Talent Lead, Project X",
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-3'),
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full max-w-4xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-none shadow-none">
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                       <div className="flex text-yellow-400 mb-4">
                          {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" />)}
                       </div>
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

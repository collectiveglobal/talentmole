import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 text-center md:px-6">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to find your next opportunity or hire?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
          Join Talent Mole today and experience a new, more human way of hiring.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" variant="secondary" className="bg-white hover:bg-gray-100 text-primary">
            <Link href="/get-started">Get Started for Free</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

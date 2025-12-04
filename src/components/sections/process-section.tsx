import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
    {
        number: "1",
        title: "Candidate Video",
        description: "Shot on any device, still provides brand and tagging control."
    },
    {
        number: "2",
        title: "Magic Montage",
        description: "TalentMole automatically collates, tags & segments all applications."
    },
    {
        number: "3",
        title: "Watch & Shortlist",
        description: "All videos turned into 10-minute segments you can scan through."
    }
];

export function ProcessSection() {
    return (
        <section className="py-20 md:py-24 bg-tm-blue dark-mode-texts">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-4 space-y-6 text-center md:text-left">
                        <p className="text-sm font-semibold uppercase opacity-70">The Process</p>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            TalentMole works for both parties
                        </h2>
                        <p className="text-lg opacity-80">
                            TalentMole retains a quality pre-boarding experience through candidate personalisation
                        </p>
                        <Button asChild className="bg-deep-orange hover:bg-deep-orange/90 text-white rounded-full px-8">
                            <Link href="#start">Get Started</Link>
                        </Button>
                    </div>
                    <div className="md:col-span-8">
                        <div className="grid sm:grid-cols-3 gap-8">
                            {steps.map(step => (
                                <div key={step.number} className="text-center md:text-left group">
                                    <div className="mx-auto md:mx-0 w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-deep-orange group-hover:border-deep-orange">
                                        <span className="text-2xl font-bold text-deep-orange transition-colors duration-300 group-hover:text-white">{step.number}</span>
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                                    <p className="text-sm opacity-80">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
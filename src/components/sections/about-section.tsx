import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Target, Timer } from "lucide-react";

export function AboutSection() {
  const services = [
    {
      icon: <img src="https://talentmole.com/image/svg/athletics.svg" alt="Hard Analytics Icon" className="absolute -right-2 -bottom-2 w-16 h-16" />,
      title: "Hard Analytics",
      description: "You still receive the numbers you need to effectively screen in bulk.",
      color: "bg-golden-tainoi",
    },
    {
      icon: <img src="https://talentmole.com/image/svg/archery-target.svg" alt="Soft Qualities Icon" className="absolute -right-2 -bottom-2 w-16 h-16" />,
      title: "Soft Qualities",
      description: "Learn more about candidates through short intro videos that show their true self.",
      color: "bg-ice-cold",
    },
    {
      icon: <img src="https://talentmole.com/image/svg/money-coins.svg" alt="Time Saved Icon" className="absolute -right-2 -bottom-2 w-16 h-16" />,
      title: "Time Saved",
      description: "Get in tune with the reality of a candidate without spending more time screening.",
      color: "bg-anakiwaap",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              An efficient approach to bulk candidate screening
            </h2>
          </div>
          <div>
            <p className="text-lg text-muted-foreground">
              What if you could learn more about candidates{" "}
              <em>and</em> spend less time screening them?
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="text-center md:text-left">
              <div
                className={`relative mx-auto md:mx-0 w-20 h-20 rounded-full flex items-center justify-center ${service.color} text-gray-800 mb-6`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

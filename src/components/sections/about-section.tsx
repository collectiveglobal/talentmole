import { Target, Timer } from "lucide-react";

const services = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <path d="M12.22 2h-4.44l-3 3v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-3" />
        <path d="M14 2v4h4" />
        <path d="M18 10.5c-1.55-.01-3.05.78-4.2 2.25-1.17 1.48-1.8 3.31-1.8 5.25" />
        <path d="M22 10.5c-1.55-.01-3.05.78-4.2 2.25-1.17 1.48-1.8 3.31-1.8 5.25" />
      </svg>
    ),
    title: "Hard Analytics",
    description: "You still receive the numbers you need to effectively screen in bulk.",
    color: "bg-golden-tainoi",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Soft Qualities",
    description: "Learn more about candidates through short intro videos that show their true self.",
    color: "bg-ice-cold",
  },
  {
    icon: <Timer className="w-8 h-8" />,
    title: "Time Saved",
    description: "Get in tune with the reality of a candidate without spending more time screening.",
    color: "bg-anakiwaap",
  },
];

export function AboutSection() {
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
                className={`mx-auto md:mx-0 w-20 h-20 rounded-full flex items-center justify-center ${service.color} text-gray-800 mb-6`}
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

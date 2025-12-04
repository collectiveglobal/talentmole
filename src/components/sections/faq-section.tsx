import { Mail, HelpCircle } from "lucide-react";
import Link from 'next/link';

const faqs = [
  {
    question: "What is TalentMole?",
    answer: "TalentMole is an innovative hiring software that converts candidate videos into concise highlight reels. It enables recruiters to efficiently screen multiple candidates in 10-minute blocks, saving time and effort during the hiring process."
  },
  {
    question: "How does TalentMole work?",
    answer: "TalentMole uses advanced video analysis algorithms to automatically extract the most relevant sections from candidate videos. These sections are compiled into short highlight reels, allowing recruiters to quickly assess a candidate's skills and suitability for a position."
  },
  {
    question: "Can TalentMole handle large volumes of candidate videos?",
    answer: "Yes, TalentMole is designed to handle high volumes of candidate videos. Recruiters can efficiently screen and review numerous candidates within 10-minute blocks, streamlining the hiring process and increasing productivity."
  },
  {
    question: "Does TalentMole support customization of highlight reels?",
    answer: "Absolutely! TalentMole offers customization options for highlight reels. Recruiters can specify criteria, such as specific skills or experiences, to create tailored highlight reels that best match their hiring needs."
  },
  {
    question: "Is TalentMole compatible with existing applicant tracking systems (ATS)?",
    answer: "Yes, TalentMole seamlessly integrates with popular applicant tracking systems. It allows recruiters to easily import candidate information and highlight reels into their existing ATS, ensuring a smooth workflow and streamlined hiring process."
  },
  {
    question: "Is candidate video privacy protected in TalentMole?",
    answer: "Absolutely! TalentMole prioritizes candidate privacy. Only authorized recruiters and hiring personnel have access to candidate videos. All data is securely stored and handled in compliance with privacy regulations to maintain confidentiality and data protection."
  }
];

export function FaqSection() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
            Questions About TalentMole?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
          {faqs.map((faq, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <HelpCircle className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Haven’t got your answer?{' '}
            <Link href="mailto:info@talentmole.com" className="font-semibold text-primary hover:underline">
               Email us
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

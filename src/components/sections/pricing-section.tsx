'use client';
import { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const pricingPlans = {
  monthly: [
    {
      name: 'Starter',
      price: '9',
      features: ['Up to 100 applications', '500MB of document space', '1 Highlight Reel video', '5 days custom support'],
      buttonText: 'Start Now',
      primary: false,
    },
    {
      name: 'Recruiter',
      price: '49',
      features: ['Up to 500 applications', '2GB of document space', '5 Highlight Reel videos', '6 days custom support'],
      buttonText: 'Choose Plan',
      primary: true,
    },
    {
      name: 'Custom',
      price: '99',
      features: ['Unlimited applications', 'Unlimited document space', 'Unlimited Highlight Reel videos', '24/7 custom support'],
      buttonText: 'Inquire Now',
      primary: false,
    },
  ],
  yearly: [
    {
      name: 'Starter',
      price: '7',
      features: ['Up to 100 applications', '500MB of document space', '1 Highlight Reel video', '5 days custom support'],
      buttonText: 'Start Now',
      primary: false,
    },
    {
      name: 'Recruiter',
      price: '39',
      features: ['Up to 500 applications', '2GB of document space', '5 Highlight Reel videos', '6 days custom support'],
      buttonText: 'Choose Plan',
      primary: true,
    },
    {
      name: 'Custom',
      price: '79',
      features: ['Unlimited applications', 'Unlimited document space', 'Unlimited Highlight Reel videos', '24/7 custom support'],
      buttonText: 'Inquire Now',
      primary: false,
    },
  ],
};

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);
  const plans = isYearly ? pricingPlans.yearly : pricingPlans.monthly;

  return (
    <section id="pricing" className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-12">
            <div>
                <p className="text-sm font-semibold uppercase text-electric-violet">Easy, Transparent Pricing</p>
                <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl mt-2">Choose A Package:</h2>
            </div>
            <div className="flex items-center justify-center lg:justify-end gap-2">
                <span className="font-medium">Monthly</span>
                <Switch checked={isYearly} onCheckedChange={setIsYearly} id="pricing-switch" />
                <span className="font-medium">Yearly</span>
                <div className="ml-2 bg-yellow-300 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full">SAVE 15%</div>
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-lg shadow-lg p-8 flex flex-col text-center ${plan.primary ? 'bg-gray-800 text-white' : 'bg-white'}`}>
              <div className={`py-4 rounded-t-lg ${plan.primary ? 'bg-primary' : 'bg-tm-blue'}`}>
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="text-sm text-white/80">{isYearly ? 'Yearly package' : 'Monthly package'}</p>
                 <div className="text-white mt-4">
                    <span className="text-2xl align-top">C$</span>
                    <span className="text-6xl font-bold">{plan.price}</span>
                    <span className="text-lg">/ Month</span>
                 </div>
              </div>
              <ul className={`flex-grow space-y-4 py-8 ${plan.primary ? '' : 'text-muted-foreground'}`}>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Button asChild size="lg" className={`w-full ${plan.primary ? 'bg-white text-primary hover:bg-gray-200' : 'bg-tm-blue text-white hover:bg-tm-blue/90'}`}>
                <Link href="#start">{plan.buttonText}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

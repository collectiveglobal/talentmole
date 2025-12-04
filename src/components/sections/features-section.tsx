'use client';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChartPie, Flag, BarChart } from 'lucide-react';

const features = [
    {
        icon: <ChartPie />,
        title: 'Data Intact',
        id: 'data-intact',
    },
    {
        icon: <Flag />,
        title: 'Easy Scanning',
        id: 'easy-scanning',
    },
    {
        icon: <BarChart />,
        title: 'Reels Report',
        id: 'reels-report',
    },
];

const featureContent = {
    'data-intact': [
        {
            count: '01.',
            title: 'Reel data access',
            description: 'Videos augment your current process and data collection, such as CV\'s and other documents or data.',
        },
        {
            count: '02.',
            title: 'Compare stats easily',
            description: 'Stats are flagged by our machine learning algorithm so you can still compare standards.',
        },
    ],
    'easy-scanning': [
        {
            count: '03.',
            title: 'Full playback control',
            description: 'Watch candidates\' video segments just like you\'d watch a YouTube video or film.',
        },
        {
            count: '04.',
            title: 'Shortlist in-frame',
            description: 'Like a candidate but need to look a bit deeper? Just shortlist them within the video!',
        },
    ],
    'reels-report': [
        {
            count: '05.',
            title: 'Automated tagging',
            description: 'Let TalentMole do the hard work by tagging keywords, high-value segments and more.',
        },
        {
            count: '06.',
            title: 'Video to text',
            description: 'Receive transcriptions and other important data that highlight trends and challenges.',
        },
    ],
};

export function FeaturesSection() {
    const [activeTab, setActiveTab] = useState('data-intact');

    return (
        <section id="features" className="py-20 md:py-24 bg-tm-blue dark-mode-texts">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 max-w-4xl">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">The value of a showreel for your hiring process:</h2>
                    <p className="mt-4 text-lg opacity-80">
                        Receive custom-made reels with TalentMole - it converts short video segments from 100s of candidates into one easy highlight reel.
                    </p>
                </div>

                <div className="grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-3">
                        <div className="flex md:flex-col gap-4">
                            {features.map((feature) => (
                                <button
                                    key={feature.id}
                                    onClick={() => setActiveTab(feature.id)}
                                    className={`flex items-center gap-3 p-4 rounded-lg text-left transition-colors w-full ${activeTab === feature.id ? 'bg-white/20' : 'hover:bg-white/10'}`}
                                >
                                    {feature.icon}
                                    <span className="font-medium">{feature.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-9">
                        <div className="grid md:grid-cols-2 gap-8">
                            {featureContent[activeTab as keyof typeof featureContent].map(content => (
                                <div key={content.count}>
                                    <span className="text-5xl font-bold opacity-30">{content.count}</span>
                                    <h3 className="text-xl font-semibold mt-2 mb-3">{content.title}</h3>
                                    <p className="opacity-80">{content.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

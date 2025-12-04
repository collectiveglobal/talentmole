'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const words = ["screening.", "filtering.", "reading."];

export function HeroSection() {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    
    const heroIpad = PlaceHolderImages.find(img => img.id === 'hero-ipad');
    const heroImg1 = PlaceHolderImages.find(img => img.id === 'hero-img-1');
    const heroImg2 = PlaceHolderImages.find(img => img.id === 'hero-img-2');
    const heroImg3 = PlaceHolderImages.find(img => img.id === 'hero-img-3');
    const heroDots = PlaceHolderImages.find(img => img.id === 'hero-dots');
    const heroShape2 = PlaceHolderImages.find(img => img.id === 'hero-shape-2');
    const heroShape3 = PlaceHolderImages.find(img => img.id === 'hero-shape-3');

    useEffect(() => {
        const type = () => {
            const currentWord = words[wordIndex];
            const updatedText = isDeleting
                ? currentWord.substring(0, text.length - 1)
                : currentWord.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting && updatedText === currentWord) {
                setTimeout(() => setIsDeleting(true), 1500); 
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            }
        };

        const typingSpeed = isDeleting ? 80 : 150;
        const timer = setTimeout(type, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex]);


    return (
        <section className="relative overflow-hidden bg-background py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
                    <div className="z-10 space-y-6">
                        <h1 className="text-4xl font-bold tracking-tighter text-gray-800 sm:text-5xl md:text-6xl">
                            Get to know candidates better & spend less time <br />
                            <span className="text-primary">{text}</span>
                        </h1>
                        <p className="max-w-[600px] text-lg text-muted-foreground">
                            Instead of spending hours combing through CVs, watch a showreel & learn candidate qualities faster.
                        </p>
                    </div>
                    <div className="relative mx-auto h-[450px] w-full max-w-2xl">
                        {heroIpad && (
                             <div className="absolute inset-0 flex items-center justify-center">
                                <Image
                                    src={heroIpad.imageUrl}
                                    alt={heroIpad.description}
                                    data-ai-hint={heroIpad.imageHint}
                                    width={550}
                                    height={412}
                                    className="z-20"
                                    priority
                                />
                            </div>
                        )}
                        {heroImg1 && (
                            <div className="absolute left-[5%] top-[10%] z-30 h-[130px] w-[130px]">
                                <Image src={heroImg1.imageUrl} alt={heroImg1.description} data-ai-hint={heroImg1.imageHint} layout="fill" objectFit="contain" />
                            </div>
                        )}
                        {heroImg2 && (
                            <div className="absolute left-1/2 top-[-5%] z-10 h-[150px] w-[150px] -translate-x-1/2">
                                <Image src={heroImg2.imageUrl} alt={heroImg2.description} data-ai-hint={heroImg2.imageHint} layout="fill" objectFit="cover" className="rounded-full" />
                            </div>
                        )}
                        {heroImg3 && (
                            <div className="absolute bottom-[-15%] left-1/2 z-30 h-[140px] w-[140px] -translate-x-1/2">
                                <Image src={heroImg3.imageUrl} alt={heroImg3.description} data-ai-hint={heroImg3.imageHint} layout="fill" objectFit="contain" />
                            </div>
                        )}
                        {heroDots && (
                            <div className="absolute left-0 top-[30%] z-10 h-[200px] w-[100px]">
                                <Image src={heroDots.imageUrl} alt={heroDots.description} data-ai-hint={heroDots.imageHint} layout="fill" objectFit="contain" />
                            </div>
                        )}
                         {heroShape2 && (
                            <div className="absolute right-[5%] top-1/2 z-10 h-[120px] w-[120px] -translate-y-1/2">
                                <Image src={heroShape2.imageUrl} alt={heroShape2.description} data-ai-hint={heroShape2.imageHint} layout="fill" objectFit="contain" />
                            </div>
                        )}
                         {heroShape3 && (
                            <div className="absolute bottom-[5%] right-[10%] z-30 h-[100px] w-[150px]">
                                <Image src={heroShape3.imageUrl} alt={heroShape3.description} data-ai-hint={heroShape3.imageHint} layout="fill" objectFit="contain" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const footerLinks = [
    {
        title: 'Company',
        links: [
            { label: 'About us', href: '#about' },
            { label: 'Contact', href: '#start' },
        ],
    },
    {
        title: 'Legal',
        links: [
            { label: 'Privacy Policy', href: '#' },
            { label: 'Terms & Conditions', href: '#' },
        ],
    },
];

export function Footer() {
    return (
        <footer className="bg-tm-blue dark-mode-texts">
            <div className="container mx-auto px-4 py-12 md:px-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                    <div className="md:col-span-4">
                        <Link href="/" className="mb-4 inline-block">
                            <Logo onDarkBg />
                        </Link>
                        <p className="max-w-xs text-sm">
                            Hiring Software That Allows You To Get To Know Candidates Better & Spend Less Time Screening.
                        </p>
                    </div>
                    <div className="md:col-span-8">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                            {footerLinks.map((section) => (
                                <div key={section.title}>
                                    <h3 className="mb-4 font-semibold">{section.title}</h3>
                                    <ul className="space-y-2">
                                        {section.links.map((link) => (
                                            <li key={link.label}>
                                                <Link
                                                    href={link.href}
                                                    className="text-sm opacity-80 transition-opacity hover:opacity-100"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            <div>
                                <h3 className="mb-4 font-semibold">Contact Details</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <i className="fa fa-map-marker-alt mt-1"></i>
                                        <span>Toronto, ON <br /> Canada</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="fa fa-envelope mt-1"></i>
                                        <a href="mailto:info@talentmole.com" className="opacity-80 transition-opacity hover:opacity-100">info@talentmole.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/20 pt-8">
                    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                        <p className="text-sm text-center md:text-left">
                            © {new Date().getFullYear()} TalentMole Technologies. All Rights Reserved.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="#" aria-label="Facebook">
                                <Facebook className="h-5 w-5 opacity-80 transition-opacity hover:opacity-100" />
                            </Link>
                            <Link href="#" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5 opacity-80 transition-opacity hover:opacity-100" />
                            </Link>
                            <Link href="#" aria-label="Instagram">
                                <Instagram className="h-5 w-5 opacity-80 transition-opacity hover:opacity-100" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

    
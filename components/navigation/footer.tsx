"use client";

import Link from "next/link";
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-brand-text text-brand-bg relative overflow-hidden pt-20 pb-32 md:pb-12 px-6 md:px-10">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
                <div className="flex flex-col gap-4">
                    <Link href="/" className="flex items-center">
                        <img src="/logo.jpeg" alt="Universal Travel" className="h-10 md:h-12 w-auto max-w-[180px] md:max-w-none object-contain rounded-full" />
                    </Link>
                    <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                        Elevating global journeys with precision logistics, uncompromised luxury, and exclusive access for discerning travelers.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-lg tracking-wide">Experiences</h3>
                    <ul className="flex flex-col gap-3 text-white/70 text-sm">
                        <li><Link href="/signature-tours?region=maldives" className="hover:text-white transition-colors">The Maldives Retreat</Link></li>
                        <li><Link href="/signature-tours?region=turkey" className="hover:text-white transition-colors">Turkish Elegance</Link></li>
                        <li><Link href="/signature-tours?region=sri-lanka" className="hover:text-white transition-colors">Sri Lankan Escapes</Link></li>
                        <li><Link href="/services#kitchen-caravan" className="hover:text-white transition-colors">Kitchen Caravan Services</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-lg tracking-wide">Company</h3>
                    <ul className="flex flex-col gap-3 text-white/70 text-sm">
                        <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                        <li><Link href="/services" className="hover:text-white transition-colors">Capabilities</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-6">
                    <h3 className="font-semibold text-lg tracking-wide">Connect With Us</h3>
                    <WhatsAppCTA intentCategory="general" variant="default" className="w-fit bg-brand-accent hover:bg-brand-accent/90">
                        Inquire Now
                    </WhatsAppCTA>
                    <div className="flex gap-4 text-white/70">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <Instagram size={20} />
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <Facebook size={20} />
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <Linkedin size={20} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <Twitter size={20} />
                            <span className="sr-only">Twitter</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-[1280px] mx-auto mt-8 flex flex-col md:flex-row items-center justify-between text-white/50 text-xs">
                <p>&copy; {currentYear} Universal Travel Planners. All rights reserved.</p>
                <p className="mt-2 md:mt-0">Designed for elegance. Engineered for scale.</p>
            </div>
        </footer>
    );
}

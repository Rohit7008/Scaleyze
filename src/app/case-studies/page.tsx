"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const caseStudies = [
    {
        id: "lead-capture",
        title: "Lead Capture System",
        tagline: "Never miss a hot lead again",
        image: "/lead-capture-system.png",
        result: "3x faster response time",
        href: "/case-studies/lead-capture",
        description: "Automated workflow that captures, notifies, and tracks every opportunity from your website forms."
    },
    {
        id: "booking-automation",
        title: "Booking Automation",
        tagline: "From visitor to confirmed client in 60 seconds",
        image: "/booking-automation-system.png",
        result: "24/7 booking availability",
        href: "/case-studies/booking-automation",
        description: "Fully automated booking, payment, and confirmation system that works while you sleep."
    }
];

export default function CaseStudiesPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
            <Navbar />

            <Section className="pt-32 pb-12 md:pt-40 md:pb-20">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center mb-16 md:mb-24"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Our <span className="text-primary">Case Studies</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            See how we've helped businesses automate their operations and scale effectively.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-16 md:gap-24">
                        {caseStudies.map((study, idx) => (
                            <motion.div
                                key={study.id}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}
                            >
                                {/* Image Half */}
                                <div className="w-full md:w-1/2">
                                    <Link href={study.href} className="block group relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                                        <div className="aspect-video bg-surface relative overflow-hidden">
                                            <Image
                                                src={study.image}
                                                alt={study.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />

                                            {/* Overlay on hover */}
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <span className="px-6 py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                    View Case Study
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                {/* Content Half */}
                                <div className="w-full md:w-1/2">
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 mb-4">
                                        <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                                            {study.result}
                                        </span>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{study.title}</h2>
                                    <p className="text-xl text-primary font-medium mb-4">{study.tagline}</p>
                                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                        {study.description}
                                    </p>

                                    <Link
                                        href={study.href}
                                        className="inline-flex items-center text-foreground font-semibold hover:text-primary transition-colors"
                                    >
                                        Read Full Story
                                        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}

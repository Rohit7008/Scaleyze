"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
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
        href: "/case-studies/lead-capture"
    },
    {
        id: "booking-automation",
        title: "Booking Automation",
        tagline: "From visitor to confirmed client in 60 seconds",
        image: "/booking-automation-system.png",
        result: "24/7 booking availability",
        href: "/case-studies/booking-automation"
    }
];

export function SystemExamples() {
    return (
        <Section id="case-studies" className="bg-background">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                        Case <span className="text-primary">Studies</span>
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground">
                        Real automation workflows built for real businesses. Click to explore the full story.
                    </p>
                </motion.div>

                {/* Compact Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
                    {caseStudies.map((study, idx) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.15, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Link href={study.href}>
                                <div className="group relative bg-background rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                                    {/* Image Container */}
                                    <div className="relative h-48 md:h-56 overflow-hidden bg-surface mb-0.5">
                                        <Image
                                            src={study.image}
                                            alt={study.title}
                                            fill
                                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="relative p-4 md:p-6 bg-background">
                                        {/* Result Badge - Above Title */}
                                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 mb-2">
                                            <svg className="w-3 h-3 text-emerald-600 dark:text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                                                {study.result}
                                            </span>
                                        </div>

                                        <h3 className="text-lg md:text-xl font-bold mb-1.5 group-hover:text-primary transition-colors">
                                            {study.title}
                                        </h3>

                                        <p className="text-sm text-muted-foreground mb-4">
                                            {study.tagline}
                                        </p>

                                        {/* Centered Read More Button */}
                                        <div className="flex justify-center">
                                            <div className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
                                                Read full case study
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-10 md:mt-16 text-center"
                >
                    <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                        These aren't theoretical concepts — they're battle-tested systems powering real businesses right now.
                        <span className="block mt-2 font-semibold text-foreground">Ready to build yours?</span>
                    </p>
                </motion.div>
            </Container>
        </Section>
    );
}

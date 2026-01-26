"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const workflowSteps = [
    {
        step: "01",
        title: "Website Visit",
        icon: (
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
        description: "Customer lands on your services page. They browse available options, see real-time availability, and choose their preferred date and time — all without picking up the phone."
    },
    {
        step: "02",
        title: "Smart Form",
        icon: (
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        description: "Multi-step booking form with intelligent validation guides them through service selection, date/time picking, contact details, and special requirements. Mobile-optimized, with progress indicators and instant availability checks."
    },
    {
        step: "03",
        title: "Auto-Process",
        icon: (
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        description: "The moment they submit: payment is processed securely, calendar slots are blocked automatically, invoice is generated, and booking is logged in your system. All in milliseconds, zero human intervention."
    },
    {
        step: "04",
        title: "Instant Confirmation",
        icon: (
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        description: "Automatic confirmation sent via both Email and WhatsApp with booking details, payment receipt, calendar invite, and next steps. Customer knows they're booked, you know you're paid."
    }
];

export default function BookingAutomationCaseStudy() {
    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <Section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-background to-background opacity-50 pointer-events-none" />
                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                            Booking <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Automation</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                            From visitor to confirmed client in 60 seconds. Unified website, calendar, notifications, and CRM into one workflow.
                        </p>

                        {/* Redesigned Key Metrics - Glassmorphic Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <div className="p-6 rounded-2xl bg-surface/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors duration-300">
                                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">60s</div>
                                <div className="text-base font-medium text-muted-foreground">Booking Time</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-surface/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors duration-300">
                                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">24/7</div>
                                <div className="text-base font-medium text-muted-foreground">Availability</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-surface/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors duration-300">
                                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">0</div>
                                <div className="text-base font-medium text-muted-foreground">Manual Work</div>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </Section>

            {/* System Preview Image */}
            <Section className="py-0 -mt-12 md:-mt-24 relative z-20">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative rounded-xl overflow-hidden shadow-2xl border border-border/50"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60" />
                        <Image
                            src="/booking-automation-system.png"
                            alt="Booking Automation System Dashboard"
                            width={1200}
                            height={700}
                            className="w-full h-auto"
                        />
                    </motion.div>
                </Container>
            </Section>

            {/* The Challenge & Solution Grid */}
            <Section className="py-16 md:py-20">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* The Challenge */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                Service-based businesses lose thousands in revenue due to scheduling friction. Manual bookings lead to errors, double-bookings, and lost after-hours opportunities.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Customers call only during business hours",
                                    "Manual calendars lead to double bookings",
                                    "Slow payment collection cycles",
                                    "Manual confirmation emails waste time"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-surface/50 border border-border/50">
                                        <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">✕</div>
                                        <span className="text-foreground/80">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* The Solution */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">The Workflow</h2>
                            <div className="relative border-l border-border/50 ml-4 space-y-12 pb-4">
                                {workflowSteps.map((item, idx) => (
                                    <div key={idx} className="relative pl-12">
                                        <div className="absolute -left-[17px] top-0 w-9 h-9 rounded-full bg-background border border-primary text-primary flex items-center justify-center text-sm font-bold shadow-lg shadow-primary/20">
                                            {item.step}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* The Results - Premium Card */}
            <Section className="bg-surface/20 border-y border-border py-16">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Measurable Impact</h2>
                            <p className="text-xl text-muted-foreground">Real results from real implementations</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 rounded-3xl bg-gradient-to-br from-background to-surface border border-border hover:border-emerald-500/30 transition-all duration-300">
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mt-1">✓</div>
                                        <div>
                                            <strong className="block text-foreground text-lg mb-1">60-second bookings</strong>
                                            <span className="text-muted-foreground">Customers book in under a minute, 24/7.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mt-1">✓</div>
                                        <div>
                                            <strong className="block text-foreground text-lg mb-1">Zero manual work</strong>
                                            <span className="text-muted-foreground">No data entry, no calendar juggling.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mt-1">✓</div>
                                        <div>
                                            <strong className="block text-foreground text-lg mb-1">Instant payments</strong>
                                            <span className="text-muted-foreground">Money in the bank before service delivery.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 flex flex-col justify-center relative">
                                <span className="text-6xl text-primary/20 absolute top-6 left-6 font-serif">"</span>
                                <blockquote className="relative z-10 text-lg md:text-xl font-medium leading-relaxed mb-6">
                                    We were turning away customers who called after 6pm. Now, our booking system runs 24/7. We get bookings at midnight, and the payment is already processed when we wake up.
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-surface border border-border" />
                                    <div>
                                        <div className="font-bold">Spa & Wellness Center</div>
                                        <div className="text-sm text-muted-foreground">Bangalore, India</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="py-16 md:py-20">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-primary to-blue-600 rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Ready to Automate Your Bookings?
                            </h2>
                            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                                Let's build a custom booking system that works while you sleep.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                            >
                                Get Your Free Consultation
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>
                    </motion.div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}

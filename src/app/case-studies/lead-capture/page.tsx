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
        title: "Lead Inquiry",
        icon: (
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        description: "Customer fills out the contact form on your website. Smart validation ensures quality data is captured — name, email, phone, service interest, and any custom fields you need."
    },
    {
        step: "02",
        title: "WhatsApp Alert",
        icon: (
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        description: "The moment the form is submitted, your sales team gets an instant WhatsApp notification with all lead details. No delays, no checking emails — immediate awareness of every opportunity."
    },
    {
        step: "03",
        title: "CRM Entry",
        icon: (
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
        ),
        description: "Lead data is automatically saved to your CRM with complete contact history, source tracking, and initial status. Zero manual data entry, zero human error, 100% accuracy."
    },
    {
        step: "04",
        title: "Automated Follow-up",
        icon: (
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
        ),
        description: "Smart reminders are scheduled based on lead priority. Your team gets notifications to follow up at optimal times. Track every interaction, never let a hot lead go cold."
    }
];

export default function LeadCaptureCaseStudy() {
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
                            Lead Capture <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">System</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                            Automated workflow that captures, notifies, and supports conversion. Replaced manual lead routing with automated intake and assignment.
                        </p>

                        {/* Redesigned Key Metrics - Glassmorphic Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <div className="p-6 rounded-2xl bg-surface/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors duration-300">
                                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-2">3x</div>
                                <div className="text-base font-medium text-muted-foreground">Faster Response Time</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-surface/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors duration-300">
                                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">45%</div>
                                <div className="text-base font-medium text-muted-foreground">More Conversions</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-surface/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors duration-300">
                                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 mb-2">0</div>
                                <div className="text-base font-medium text-muted-foreground">Leads Missed</div>
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
                            src="/lead-capture-system.png"
                            alt="Lead Capture System Dashboard"
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
                                Most businesses lose 60% of potential customers within the first 5 minutes. Why? Because manual lead handling is slow, prone to errors, and impossible to scale.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Website forms submitted into a black hole",
                                    "Manual entry takes hours, leads go cold",
                                    "Zero follow-up system means lost revenue",
                                    "Sales team burdened with busywork"
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
                                            <strong className="block text-foreground text-lg mb-1">3x faster response time</strong>
                                            <span className="text-muted-foreground">Leads contacted within minutes, not hours.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mt-1">✓</div>
                                        <div>
                                            <strong className="block text-foreground text-lg mb-1">45% increase in conversions</strong>
                                            <span className="text-muted-foreground">Faster follow-up directly correlates to closed deals.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mt-1">✓</div>
                                        <div>
                                            <strong className="block text-foreground text-lg mb-1">Zero leads lost</strong>
                                            <span className="text-muted-foreground">100% of tracking accuracy for every inquiry.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 flex flex-col justify-center relative">
                                <span className="text-6xl text-primary/20 absolute top-6 left-6 font-serif">"</span>
                                <blockquote className="relative z-10 text-lg md:text-xl font-medium leading-relaxed mb-6">
                                    We used to lose leads all the time. Now every inquiry is captured instantly, and our team knows exactly what to do. Our conversion rate has nearly doubled.
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-surface border border-border" />
                                    <div>
                                        <div className="font-bold">Real Estate Agency</div>
                                        <div className="text-sm text-muted-foreground">Mumbai, India</div>
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
                        className="bg-gradient-to-br from-primary to-purple-600 rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Ready to Never Miss a Lead Again?
                            </h2>
                            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                                Let's build a custom lead capture system tailored to your specific business needs today.
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

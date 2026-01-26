"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CustomerFacingSystemsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden min-h-[60vh] md:min-h-[50vh] flex items-center">
                <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-background to-background opacity-50 pointer-events-none" />
                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl mx-auto text-center"
                    >

                        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-center">
                            Customer-Facing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Systems</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground mb-0 max-w-2xl mx-auto leading-relaxed text-center">
                            High-performance websites and interfaces engineered to support visitor-to-lead conversion and user experience.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Overview */}
            <Section className="pt-0 pb-8 md:pb-12 -mt-16 md:-mt-20">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge</h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Most websites are digital brochures they look good but don't convert. Visitors land on your site, browse for a few seconds, and leave without taking action. The problem isn't traffic, it's that your website isn't engineered to guide visitors toward conversion.
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12">Our Approach</h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            We build conversion-focused systems that combine high-end design with behavioral psychology. Every element from layout to copy to call-to-action placement—is strategically designed to guide visitors toward taking action.
                        </p>
                    </div>
                </Container>
            </Section>

            {/* Features */}
            <Section className="bg-surface/20 border-y border-border py-16">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">What's Included</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Strategic UI/UX Design",
                                    description: "User-centered design that prioritizes clarity, usability, and conversion optimization."
                                },
                                {
                                    title: "Conversion-Focused Copy",
                                    description: "Clear, benefit-driven messaging that speaks directly to your target audience's needs."
                                },
                                {
                                    title: "Speed Optimization (99+ Score)",
                                    description: "Lightning-fast load times that improve user experience and search rankings."
                                },
                                {
                                    title: "Mobile-First Architecture",
                                    description: "Responsive design that works flawlessly across all devices and screen sizes."
                                },
                                {
                                    title: "Analytics Integration",
                                    description: "Track visitor behavior and conversion metrics to continuously improve performance."
                                },
                                {
                                    title: "SEO Foundation",
                                    description: "Technical SEO best practices built in from day one for better visibility."
                                }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
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
                        className="bg-surface border border-border rounded-3xl p-8 md:p-16 text-center overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] dark:opacity-[0.05]" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Ready to Build a Conversion System?
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                                Let's discuss how we can design a customer-facing system tailored to your business goals.
                            </p>
                            <Link href="/contact">
                                <Button size="lg" className="h-14 px-8 text-base font-bold rounded-full group">
                                    Get Your Free Consultation
                                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}

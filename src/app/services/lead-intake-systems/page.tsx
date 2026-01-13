"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LeadIntakeSystemsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden min-h-[60vh] md:min-h-[50vh] flex items-center">
                <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-background to-background opacity-50 pointer-events-none" />
                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl mx-auto text-center"
                    >

                        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-center">
                            Lead & Intake <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Systems</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground mb-0 max-w-2xl mx-auto leading-relaxed text-center">
                            Automated pipelines that capture, qualify, and nurture leads around the clock with structured intake workflows.
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
                            Relying solely on manual outreach is time-consuming and inconsistent. You need a system that works 24/7 to capture leads, qualify them automatically, and nurture them through your pipeline without constant manual intervention.
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12">Our Approach</h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            We build automated funnels that capture leads through strategic lead magnets, qualify them based on your criteria, and nurture them with targeted email sequences. Your pipeline stays full while you focus on closing deals.
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
                                    title: "High-Converting Landing Pages",
                                    description: "Dedicated pages designed to convert traffic into qualified leads with clear value propositions."
                                },
                                {
                                    title: "Lead Magnet Strategy",
                                    description: "Valuable resources (guides, templates, tools) that attract your ideal customers."
                                },
                                {
                                    title: "Automated Nurture Sequences",
                                    description: "Email workflows that educate leads and move them toward a buying decision."
                                },
                                {
                                    title: "Multi-Channel Capture",
                                    description: "Capture leads from multiple sources: website, social media, ads, and more."
                                },
                                {
                                    title: "Lead Scoring & Qualification",
                                    description: "Automatically identify and prioritize your hottest leads based on behavior."
                                },
                                {
                                    title: "Analytics & Optimization",
                                    description: "Track conversion rates and continuously improve funnel performance."
                                }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
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
                        className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Ready to Automate Your Lead Pipeline?
                            </h2>
                            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                                Let's build a lead capture and nurture system that works around the clock.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-full font-bold hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                            >
                                Get Your Free Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}

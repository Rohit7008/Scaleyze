"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RevenueOperationsAutomationPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden min-h-[60vh] md:min-h-[50vh] flex items-center">
                <div className="absolute inset-0 bg-gradient-radial from-emerald-500/10 via-background to-background opacity-50 pointer-events-none" />
                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl mx-auto text-center"
                    >

                        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-center">
                            Revenue Operations <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Automation</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground mb-0 max-w-2xl mx-auto leading-relaxed text-center">
                            Reduce lead drop-off with instant response systems and smart follow-up workflows that connect CRM, communication, and tracking.
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
                            Fast response time directly impacts conversion rates. Studies show that responding to a lead within 5 minutes increases conversion by 400%. Manual follow-up processes create delays, missed opportunities, and inconsistent customer experiences.
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12">Our Approach</h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            We automate the entire follow-up process—from instant responses to meeting scheduling to deal tracking. Your CRM, email, SMS, and calendar work together seamlessly, so you can focus on closing deals instead of managing admin tasks.
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
                                    title: "Instant SMS/Email Responses",
                                    description: "Automated acknowledgment messages sent within seconds of lead submission."
                                },
                                {
                                    title: "Meeting Booking Automation",
                                    description: "Calendar integration that lets leads book meetings directly without back-and-forth."
                                },
                                {
                                    title: "Deal Pipeline Tracking",
                                    description: "Automated CRM updates that track every interaction and deal stage."
                                },
                                {
                                    title: "Reactivation Campaigns",
                                    description: "Smart workflows that re-engage cold leads at the right time."
                                },
                                {
                                    title: "Task Automation",
                                    description: "Automatic task creation and assignment based on deal stage and activity."
                                },
                                {
                                    title: "Performance Analytics",
                                    description: "Real-time dashboards showing response times, conversion rates, and pipeline health."
                                }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
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
                        className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Ready to Eliminate Lead Drop-Off?
                            </h2>
                            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                                Let's build a revenue operations system that responds instantly and follows up consistently.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 rounded-full font-bold hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
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

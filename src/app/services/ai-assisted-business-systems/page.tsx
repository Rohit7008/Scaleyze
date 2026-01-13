"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AIAssistedBusinessSystemsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden min-h-[60vh] md:min-h-[50vh] flex items-center">
                <div className="absolute inset-0 bg-gradient-radial from-pink-500/10 via-background to-background opacity-50 pointer-events-none" />
                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl mx-auto text-center"
                    >

                        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-center">
                            AI-Assisted Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Systems</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground mb-0 max-w-2xl mx-auto leading-relaxed text-center">
                            Leverage LLMs to analyze data, generate content, and support intelligent decision-making across your business operations.
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
                            AI is powerful, but most businesses don't know how to integrate it effectively. Generic AI tools don't understand your business context, and building custom AI solutions requires technical expertise most teams don't have.
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12">Our Approach</h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            We build custom AI agents tailored to your specific business needs. From analyzing customer data to generating personalized content to automating support responses, we help you leverage AI in practical, revenue-generating ways.
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
                                    title: "Custom AI Agents",
                                    description: "Purpose-built AI systems trained on your data and business processes."
                                },
                                {
                                    title: "Consulting & Strategy",
                                    description: "Expert guidance on where and how to implement AI for maximum impact."
                                },
                                {
                                    title: "Content Generation Systems",
                                    description: "Automated content creation for marketing, sales, and customer communication."
                                },
                                {
                                    title: "Intelligent Customer Support",
                                    description: "AI-powered chatbots and support systems that understand context and provide helpful responses."
                                },
                                {
                                    title: "Data Analysis & Insights",
                                    description: "AI-driven analysis of business data to uncover patterns and opportunities."
                                },
                                {
                                    title: "Integration & Training",
                                    description: "Seamless integration with existing tools and team training on AI systems."
                                }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
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
                        className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Ready to Leverage AI in Your Business?
                            </h2>
                            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                                Let's explore how custom AI systems can transform your operations and decision-making.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pink-600 rounded-full font-bold hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
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

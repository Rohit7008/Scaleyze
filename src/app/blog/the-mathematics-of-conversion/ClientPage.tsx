"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, BarChart, Cpu } from "lucide-react";
import Link from "next/link";

export default function DeepResearchArticle() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <article className="pt-32 pb-20">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Insights
                        </Link>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        >
                            The Mathematics of Conversion: How 100ms Latency Costs You 7% Sales
                        </motion.h1>

                        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-12 border-b border-border pb-8">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>12 min read</span>
                            </div>
                            <div className="flex items-center gap-2">

                                <span>Technical Deep Dive</span>
                            </div>
                        </div>

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="lead text-xl text-muted-foreground mb-8">
                                In the high-stakes world of digital commerce, "good design" is a quantifiable metric, not an aesthetic opinion. We analyze the direct correlation between technical performance, cognitive load, and revenue.
                            </p>

                            <h2 className="text-2xl font-bold mt-12 mb-6">The 100ms Rule</h2>
                            <p>
                                Amazon found that every 100ms of latency cost them 1% in sales. Google found an extra 0.5 seconds in search page generation time dropped traffic by 20%. These aren't just big tech problems; they are human attention span problems.
                            </p>
                            <div className="bg-surface border border-border rounded-xl p-6 my-8">
                                <h4 className="font-mono text-sm text-muted-foreground mb-4">// The Latency-Revenue Formula</h4>
                                <div className="font-mono text-lg">
                                    Revenue_Loss = (Traffic * AOV) * (Latency_ms / 100) * 0.01
                                </div>
                            </div>

                            <p>
                                At Scaleyze, we don't just "optimize images." We engineer the <strong>Critical Rendering Path</strong>. By prioritizing the loading of above-the-fold content and deferring non-essential JavaScript, we achieve First Contentful Paint (FCP) times under 0.8 seconds. This is the difference between a bounce and a conversion.
                            </p>

                            <h2 className="text-2xl font-bold mt-12 mb-6">Cognitive Load and Decision Fatigue</h2>
                            <p>
                                Every unnecessary element on a page adds to the user's cognitive load. The more decisions a user has to make (even micro-decisions like "where do I look?"), the higher the probability of abandonment.
                            </p>
                            <p>
                                Our design philosophy is based on <strong>Hick's Law</strong>: the time it takes to make a decision increases logarithmically with the number and complexity of choices.
                            </p>

                            <h3 className="text-xl font-bold mt-8 mb-4">We Engineer Simplicity</h3>
                            <ul className="list-disc pl-6 space-y-2 mb-8">
                                <li><strong>Visual Hierarchy:</strong> Using size, color, and whitespace to guide the eye to the single most important action.</li>
                                <li><strong>Progressive Disclosure:</strong> Only showing information when the user needs it, preventing overwhelm.</li>
                                <li><strong>Frictionless Forms:</strong> Removing every optional field. If you don't need it to close the sale, delete it.</li>
                            </ul>

                            <h2 className="text-2xl font-bold mt-12 mb-6">Data-Driven Iteration</h2>
                            <p>
                                We don't launch and hope. We launch and measure. By integrating granular event tracking, we can see exactly where users drop off.
                            </p>
                            <p>
                                Is the "Pricing" link being clicked but the "Buy" button ignored? That tells us the value proposition is unclear. Is the form being started but abandoned at the "Phone Number" field? That tells us the ask is too high for the trust established.
                            </p>

                            <div className="mt-16 p-8 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
                                <h3 className="text-2xl font-bold mb-4">Ready to optimize your revenue engine?</h3>
                                <p className="mb-6">
                                    Stop leaving money on the table. Let us audit your system for performance and conversion leaks.
                                </p>
                                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5">
                                    Get a Technical Audit
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </article>

            <Footer />
        </main>
    );
}

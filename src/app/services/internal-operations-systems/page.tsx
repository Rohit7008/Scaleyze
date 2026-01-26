"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function InternalOperationsSystemsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden min-h-[60vh] md:min-h-[50vh] flex items-center">
                <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 via-background to-background opacity-50 pointer-events-none" />
                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl mx-auto text-center"
                    >

                        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-center">
                            Internal Operations <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Systems</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground mb-0 max-w-2xl mx-auto leading-relaxed text-center">
                            Streamline business operations by replacing manual repetitive tasks with automated workflows and connected tools.
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
                            Your team spends hours on repetitive admin tasks: data entry, invoice generation, report creation, file management. These manual processes slow down operations, introduce errors, and prevent your team from focusing on high-value work.
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12">Our Approach</h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            We build custom scripts and workflows that connect your existing tools and automate repetitive processes. From data sync to document generation to project management, we eliminate manual work so your team can focus on what matters.
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
                                    title: "Data Entry Automation",
                                    description: "Eliminate manual data entry by syncing information across platforms automatically."
                                },
                                {
                                    title: "Project Management Workflows",
                                    description: "Automated task creation, assignment, and status updates based on triggers."
                                },
                                {
                                    title: "Invoicing & Billing",
                                    description: "Generate and send invoices automatically based on project milestones or time tracking."
                                },
                                {
                                    title: "Cross-Platform Integrations",
                                    description: "Connect your tools (CRM, accounting, project management) to work as one system."
                                },
                                {
                                    title: "Document Generation",
                                    description: "Auto-generate contracts, proposals, and reports from templates."
                                },
                                {
                                    title: "Reporting & Dashboards",
                                    description: "Automated reports and real-time dashboards for business metrics."
                                }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
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
                                Ready to Streamline Your Operations?
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                                Let's automate your internal processes and free up your team's time for strategic work.
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

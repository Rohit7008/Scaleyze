"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const services = [
    {
        id: "conversion",
        title: "Customer-Facing Systems",
        subtitle: "Support Traffic-to-Lead Conversion",
        description: "Most websites are digital brochures. We build conversion-focused systems that combine high-end design with behavioral psychology to guide visitors toward action.",
        features: ["Strategic UI/UX Design", "Conversion-Focused Copy", "Speed Optimization (99+ Score)", "Mobile-First Architecture"],
        color: "bg-blue-500/10",
        image: "/images/service-conversion.png",
        slug: "customer-facing-systems"
    },
    {
        id: "lead-gen",
        title: "Lead & Intake Systems",
        subtitle: "Automate Your Pipeline",
        description: "Reduce manual outreach. We build automated funnels that capture, qualify, and nurture leads consistently with structured intake workflows.",
        features: ["High-Converting Landing Pages", "Lead Magnet Strategy", "Automated Nurture Sequences", "Multi-Channel Capture"],
        color: "bg-purple-500/10",
        image: "/images/service-lead-gen.png",
        slug: "lead-intake-systems"
    },
    {
        id: "sales-automation",
        title: "Revenue Operations Automation",
        subtitle: "Reduce Lead Drop-Off",
        description: "Fast response time improves conversion rates. We automate the follow-up process and connect CRM, communication, and tracking so you can focus on closing deals.",
        features: ["Instant SMS/Email Responses", "Meeting Booking Automation", "Deal Pipeline Tracking", "Reactivation Campaigns"],
        color: "bg-emerald-500/10",
        image: "/images/service-sales.png",
        slug: "revenue-operations-automation"
    },
    {
        id: "internal-ops",
        title: "Internal Operations Systems",
        subtitle: "Streamline Operations",
        description: "Eliminate manual data entry and repetitive admin tasks. We build scripts and workflows that connect your stack and save time across your business operations.",
        features: ["Data Entry Automation", "Project Management Workflows", "Invoicing & Billing", "Cross-Platform Integrations"],
        color: "bg-orange-500/10",
        image: "/images/service-ops.png",
        slug: "internal-operations-systems"
    },
    {
        id: "ai-workflows",
        title: "AI-Assisted Business Systems",
        subtitle: "Intelligent Automation",
        description: "Leverage the power of LLMs to analyze data, generate content, and support intelligent decision-making across your business operations.",
        features: ["Custom AI Agents", "Consulting & Strategy", "Content Generation Systems", "Intelligent Customer Support"],
        color: "bg-pink-500/10",
        image: "/images/service-ai.png",
        slug: "ai-assisted-business-systems"
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <Section className="pt-32 pb-16">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto mb-20"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">System Layers</h1>
                        <p className="text-xl text-muted-foreground">
                            We don't offer isolated services. We design modular system layers that work together to support business operations and growth.
                        </p>
                    </motion.div>

                    <div className="space-y-32">
                        {services.map((service, index) => (
                            <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="flex-1"
                                >
                                    <div className="inline-block py-1 px-3 rounded-full bg-surface-highlight border border-white/5 text-xs font-medium text-muted-foreground mb-4">
                                        {service.subtitle}
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-6">{service.title}</h2>
                                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-foreground" />
                                                <span className="text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href={`/services/${service.slug}`}>
                                        <Button variant="outline" size="lg">Learn More</Button>
                                    </Link>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="flex-1 w-full aspect-square md:aspect-video lg:aspect-square relative"
                                >
                                    {/* Service Image */}
                                    <div className={`w-full h-full rounded-2xl border border-white/10 ${service.color} backdrop-blur-3xl relative overflow-hidden group`}>
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 z-10 mix-blend-overlay" />
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}

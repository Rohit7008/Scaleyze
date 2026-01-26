"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "Customer-Facing Systems",
        description: "High-performance websites and interfaces engineered to support visitor-to-lead conversion and user experience.",
        tags: ["Web Design", "Development", "CRO"],
        slug: "customer-facing-systems",
    },
    {
        title: "Lead & Intake Systems",
        description: "Automated pipelines that capture, qualify, and nurture leads around the clock with structured intake workflows.",
        tags: ["Funnels", "Lead Magnets", "Email"],
        slug: "lead-intake-systems",
    },
    {
        title: "Revenue Operations Automation",
        description: "Reduce lead drop-off. Instant response systems and smart follow-up workflows that connect CRM, communication, and tracking.",
        tags: ["CRM", "SMS", "Workflows"],
        slug: "revenue-operations-automation",
    },
    {
        title: "Internal Operations Systems",
        description: "Streamline business operations. We replace manual repetitive tasks with automated workflows and connected tools.",
        tags: ["Operations", "Efficiency", "Scale"],
        slug: "internal-operations-systems",
    },
    {
        title: "AI-Assisted Business Systems",
        description: "Leverage LLMs to analyze data, generate content, and support intelligent decision-making across your business operations.",
        tags: ["AI Agents", "Integration", "Intelligence"],
        slug: "ai-assisted-business-systems",
    },
];

export function ServicesPreview() {
    return (
        <Section id="services" className="relative">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4 md:gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                            Modular System <br /><span className="text-muted-foreground">Layers</span>
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground">
                            We don't offer isolated services. We design modular system layers that work together to support business operations and growth.
                        </p>
                    </div>
                    <Link href="/services">
                        <Button variant="outline" className="hidden md:flex">
                            View All Services
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            className={index === 0 ? "lg:col-span-2" : ""}
                        >
                            <Link href={`/services/${service.slug}`} className="block h-full">
                                <Card hoverEffect className="h-full flex flex-col justify-between group">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between gap-4 mt-4">
                                        <div className="flex flex-wrap gap-2">
                                            {service.tags.map((tag) => (
                                                <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-surface-highlight text-muted-foreground border border-border">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center text-xs sm:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0 whitespace-nowrap">
                                            Learn more <ArrowRight className="ml-2 w-4 h-4" />
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-6 sm:mt-8 md:hidden text-center">
                    <Link href="/services">
                        <Button variant="outline" className="w-full">View All Services</Button>
                    </Link>
                </div>
            </Container>
        </Section>
    );
}

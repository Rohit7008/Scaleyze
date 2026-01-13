"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Discover",
        description: "We analyze your business model to identify bottlenecks and growth opportunities.",
    },
    {
        number: "02",
        title: "Design",
        description: "We architect a custom solution, mapping out user journeys and automation flows.",
    },
    {
        number: "03",
        title: "Build",
        description: "Our engineers develop your high-performance asset with clean, scalable code.",
    },
    {
        number: "04",
        title: "Automate",
        description: "We connect the systems, setting up workflows that support business operations.",
    },
    {
        number: "05",
        title: "Scale",
        description: "We launch, monitor data, and iterate to improve conversion and efficiency.",
    },
];

export function Process() {
    return (
        <Section id="process" className="bg-surface/20 border-y border-border">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                        The <span className="text-muted-foreground">Blueprint</span>
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground">
                        A systematic approach to building your growth infrastructure. No guessing, just engineering.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[2.5rem] left-0 right-0 h-px bg-border" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative bg-background lg:bg-transparent p-6 lg:p-0 rounded-xl border lg:border-none border-border"
                            >
                                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-surface border border-border text-2xl font-bold text-muted-foreground mb-6 mx-auto relative z-10 shadow-xl">
                                    {step.number}
                                </div>
                                <div className="text-center">
                                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{step.title}</h3>
                                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}

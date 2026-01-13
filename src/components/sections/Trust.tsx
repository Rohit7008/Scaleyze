"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const stats = [
    { value: "$10M+", label: "Revenue Generated" },
    { value: "500+", label: "Systems Deployed" },
    { value: "50+", label: "Startup Partners" },
    { value: "24/7", label: "Automated Uptime" },
];

export function Trust() {
    return (
        <Section className="py-12 md:py-16 border-b border-white/5">
            <Container>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}

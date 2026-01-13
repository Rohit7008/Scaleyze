"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
    {
        number: "01",
        title: "Systems Engineering",
        description: "We design end-to-end business systems that connect your website, lead handling, internal workflows, and tools into one cohesive operation.",
        gradient: "from-blue-400 to-emerald-400"
    },
    {
        number: "02",
        title: "Automation & Operations",
        description: "We reduce manual effort across sales, operations, and internal processes by implementing automation that teams can actually run and maintain.",
        gradient: "from-purple-400 to-pink-400"
    },
    {
        number: "03",
        title: "Conversion & Experience",
        description: "User experience drives action. We design interfaces that balance clarity, usability, and conversion intent guiding users toward decisions without friction.",
        gradient: "from-orange-400 to-red-400"
    }
];

export function ValueProps() {
    return (
        <Section id="why-us" className="py-16 md:py-24 relative overflow-hidden">
            <Container>
                {/* Section Title */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 flex items-center justify-center gap-3">
                        Why Choose
                        {/* Light mode logo */}
                        <Image
                            src="/logo/Nametag/Roonity Logo (3).png"
                            alt="Roonity"
                            width={300}
                            height={100}
                            className="inline-block h-10 sm:h-12 md:h-14 w-auto object-contain dark:hidden"
                        />
                        {/* Dark mode logo */}
                        <Image
                            src="/logo/Nametag/Roonity Logo (2).png"
                            alt="Roonity"
                            width={300}
                            height={100}
                            className="inline-block h-10 sm:h-12 md:h-14 w-auto object-contain hidden dark:block"
                        />
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                        We don't just build websites. We design business systems that connect operations, automation, and growth into one structured workflow.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 relative z-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative p-6 md:p-8 rounded-2xl bg-surface/0 hover:bg-surface/50 dark:hover:bg-surface/30 transition-all duration-500 border border-transparent hover:border-border">
                                <span className={`text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b ${feature.gradient} opacity-50 dark:opacity-50 mb-4 block group-hover:opacity-70 dark:group-hover:opacity-70 transition-opacity duration-500`}>
                                    {feature.number}
                                </span>
                                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground group-hover:text-foreground transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed transition-colors">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}

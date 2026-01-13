"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import Link from "next/link";

export function CTA() {
    return (
        <Section className="py-24 md:py-32 overflow-hidden relative">
            <div className="absolute inset-0 bg-surface-highlight/5 -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

            <Container>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tight leading-tight">
                        Ready to build your <br className="hidden sm:block" />
                        <span className="text-muted-foreground">growth system?</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-4 sm:px-0">
                        Stop relying on manual processes. Let's build the system that supports your business growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto max-w-md sm:max-w-none px-4 sm:px-0">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button size="lg" className="h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 text-sm sm:text-base md:text-lg rounded-full w-full sm:w-auto">
                                Book Strategy Call
                            </Button>
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 text-sm sm:text-base md:text-lg rounded-full w-full sm:w-auto">
                                Chat on WhatsApp
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}

"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import { DotGlobe } from "@/components/ui/DotGlobe";

export function Hero() {
    return (
        <Section className="min-h-screen flex items-center pt-24 md:pt-20 pb-12 md:pb-20 overflow-hidden relative">
            {/* Background Effects */}
            <DotGlobe />

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4 sm:px-6">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 md:mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/50 text-xs sm:text-sm font-medium text-muted-foreground backdrop-blur-sm"
                    >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Building Business Systems That Scale</span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 md:mb-8 leading-[1.1]"
                    >
                        <span className="block">Building Business Systems</span>
                        <span className="text-gradient block">That Scale</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed"
                    >
                        We design structured systems for conversion, operations, and execution — from websites to automation to internal workflows.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto max-w-md sm:max-w-none"
                    >
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button variant="glow" size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto group">
                                Book a Strategy Call
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                        <Link href="/services" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto">
                                View Our Work
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}

"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <main className="h-screen bg-background text-foreground overflow-hidden flex flex-col">
            <Navbar />

            <div className="flex-1 flex items-center pt-20 pb-4 md:pb-8">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-surface-highlight border border-border text-xs font-medium text-muted-foreground mb-3 md:mb-4">
                                Start a Conversation
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                                Let's scale your <br />
                                <span className="text-muted-foreground">revenue.</span>
                            </h1>
                            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                                We only work with founders serious about automation and growth. If that's you, let's talk.
                            </p>

                            <div className="space-y-4 md:space-y-5">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-lg">
                                        📧
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-base">Email Us</h4>
                                        <p className="text-sm text-muted-foreground">hello@agency.ai</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-lg">
                                        🏢
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-base">Office</h4>
                                        <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Form */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Card className="p-6 md:p-8 border-border shadow-2xl bg-surface/80 backdrop-blur-xl">
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-medium text-muted-foreground">First Name</label>
                                            <input className="w-full bg-background border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm" placeholder="John" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-medium text-muted-foreground">Last Name</label>
                                            <input className="w-full bg-background border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm" placeholder="Doe" />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-muted-foreground">Email</label>
                                        <input className="w-full bg-background border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm" placeholder="john@company.com" />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-muted-foreground">Company Website</label>
                                        <input className="w-full bg-background border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm" placeholder="company.com" />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-muted-foreground">Project Details</label>
                                        <textarea className="w-full bg-background border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm min-h-[80px] resize-none" placeholder="Tell us about your goals..." />
                                    </div>

                                    <Button size="md" className="w-full text-sm">
                                        Send Application
                                    </Button>

                                    <p className="text-xs text-center text-muted-foreground pt-2">
                                        We typically respond within 24 hours.
                                    </p>
                                </form>
                            </Card>
                        </motion.div>
                    </div>
                </Container>
            </div>
        </main>
    );
}

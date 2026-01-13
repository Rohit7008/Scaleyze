"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-background/80 backdrop-blur-md border-b border-border py-1"
                : "bg-transparent py-2 md:py-3"
                }`}
        >
            <Container className="flex items-center justify-between relative h-12 md:h-14">
                <Link
                    href="/"
                    className="flex items-center gap-2 z-50 absolute top-1/2 -translate-y-1/2 left-0"
                    onClick={() => setIsOpen(false)}
                >
                    {/* Light mode logo */}
                    <Image
                        src="/logo/RoonityLogo.png"
                        alt="Roonity Logo"
                        width={112}
                        height={112}
                        className="w-20 h-20 md:w-32 md:h-32 object-contain filter drop-shadow-xl dark:hidden"
                    />
                    {/* Dark mode logo */}
                    <Image
                        src="/logo/Roonity Logo.png"
                        alt="Roonity Logo"
                        width={112}
                        height={112}
                        className="w-20 h-20 md:w-32 md:h-32 object-contain filter drop-shadow-xl hidden dark:block"
                    />
                </Link>

                {/* Desktop Nav - Centered Absolutely */}
                <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-8 text-sm font-medium text-muted-foreground absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                    <Link href="/services" className="hover:text-foreground transition-colors">
                        Services
                    </Link>
                    <Link href="/#process" className="hover:text-foreground transition-colors">
                        Process
                    </Link>
                    <Link href="/#why-us" className="hover:text-foreground transition-colors">
                        Why Us
                    </Link>
                    <Link href="/contact" className="hover:text-foreground transition-colors">
                        Contact
                    </Link>
                </nav>

                <div className="hidden md:flex items-center gap-3 lg:gap-4 ml-auto">
                    <ThemeToggle />

                    <Link href="/contact">
                        <Button variant="glow" size="sm">
                            Start Project
                        </Button>
                    </Link>
                </div>

                {/* Mobile Actions */}
                <div className="flex md:hidden items-center gap-3 z-50 relative">
                    <ThemeToggle />

                    {/* Mobile Toggle */}
                    <button
                        className="flex flex-col gap-1.5 p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-foreground origin-center transition-transform"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-6 h-0.5 bg-foreground transition-opacity"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-foreground origin-center transition-transform"
                        />
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        <nav className="flex flex-col items-center gap-6 text-xl font-medium text-muted-foreground">
                            <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-foreground transition-colors">
                                Services
                            </Link>
                            <Link href="/#process" onClick={() => setIsOpen(false)} className="hover:text-foreground transition-colors">
                                Process
                            </Link>
                            <Link href="/#why-us" onClick={() => setIsOpen(false)} className="hover:text-foreground transition-colors">
                                Why Us
                            </Link>
                            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-foreground transition-colors">
                                Contact
                            </Link>
                        </nav>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                            <Button variant="glow" size="lg" className="mt-4">
                                Start Project
                            </Button>
                        </Link>
                    </motion.div>
                )}
            </Container>
        </motion.header>
    );
}

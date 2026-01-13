"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const themeContext = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent SSR hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !themeContext) {
        return (
            <div className="w-9 h-9 rounded-lg bg-surface/50 border border-border" />
        );
    }

    const { theme, toggleTheme } = themeContext;

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative w-9 h-9 rounded-lg bg-surface/50 backdrop-blur-sm border border-border hover:border-foreground/20 flex items-center justify-center transition-colors overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                    <motion.div
                        key="moon"
                        initial={{ y: -20, opacity: 0, rotate: -90 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 20, opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                    >
                        <FiMoon className="w-4 h-4 text-blue-400" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{ y: -20, opacity: 0, rotate: -90 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 20, opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                    >
                        <FiSun className="w-4 h-4 text-amber-500" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
}

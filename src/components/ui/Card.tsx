"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, hoverEffect = false, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                whileHover={hoverEffect ? { y: -5 } : undefined}
                className={cn(
                    "bg-surface border border-border rounded-xl md:rounded-2xl p-6 md:p-8 overflow-hidden relative",
                    hoverEffect && "hover:border-foreground/10 hover:shadow-2xl dark:hover:shadow-black/50 hover:shadow-black/10 transition-all duration-300",
                    className
                )}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);
Card.displayName = "Card";

export { Card };

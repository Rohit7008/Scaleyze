"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "glow";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const variants = {
            primary:
                "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(128,128,128,0.15)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
            glow:
                "bg-foreground text-background hover:bg-foreground/90 shadow-[0_0_30px_rgba(128,128,128,0.3)] dark:shadow-[0_0_30px_rgba(255,255,255,0.3)] border border-foreground/20 backdrop-blur-sm font-semibold",
            secondary:
                "bg-surface-highlight text-foreground hover:bg-surface-highlight/80",
            outline:
                "border border-border bg-transparent hover:bg-surface-highlight text-foreground",
            ghost: "hover:bg-surface-highlight text-muted-foreground hover:text-foreground",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-sm",
            lg: "h-14 px-8 text-base",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };

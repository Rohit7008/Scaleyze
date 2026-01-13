import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    fullWidth?: boolean;
}

const Section = ({
    className,
    children,
    fullWidth = false,
    ...props
}: SectionProps) => {
    return (
        <section
            className={cn("py-12 md:py-16 lg:py-20 relative", className)}
            {...props}
        >
            {children}
        </section>
    );
};

export { Section };

import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ValueProps } from "@/components/sections/ValueProps";
import { Navbar } from "@/components/layout/Navbar";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Scaleyze | Business Systems That Scale',
    description: 'We design structured systems for conversion, operations, and execution. Expert business automation services including customer-facing systems, lead automation, revenue operations, and AI-assisted workflows.',
    openGraph: {
        title: 'Scaleyze | Business Systems That Scale',
        description: 'We design structured systems for conversion, operations, and execution — from websites to automation to internal workflows.',
        url: 'https://scaleyze.com',
        type: 'website',
    },
};

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
            <Navbar />
            <Hero />
            <ValueProps />
            <ServicesPreview />
            <Process />
            <CTA />
            <FAQSection />
            <Footer />
        </main>
    );
}

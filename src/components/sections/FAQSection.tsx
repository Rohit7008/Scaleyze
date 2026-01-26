"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What exactly do you automate for businesses?",
        answer: "We automate repetitive, high-volume tasks across your revenue operations. This includes lead capture and qualification, CRM data entry, personalized email/SMS follow-ups, client onboarding workflows, and internal reporting. Our goal is to remove manual data work so your team can focus on closing and strategy."
    },
    {
        question: "Do you build custom websites or just systems?",
        answer: "We build both. We specialize in high-performance Next.js websites that are engineered for conversion. However, we don't just hand over a website; we integrate it deeply with your CRM, marketing tools, and internal operations so it acts as a true business asset, not just a digital brochure."
    },
    {
        question: "How does 'AI-Assisted' business automation work?",
        answer: "We implement AI agents that can handle complex decision-making tasks faster than humans. This might look like an AI that reads incoming lead emails and drafts responses, or an agent that analyzes your sales calls to update deal stages in your CRM automatically. We use secure, enterprise-grade LLM integrations."
    },
    {
        question: "Do I need to replace my existing software?",
        answer: "Rarely. We prefer to integrate with the tools you already use and love, like HubSpot, Salesforce, Airtable, Slack, or QuickBooks. We build the 'glue' that makes these tools talk to each other seamlessly, though we may recommend upgrades if a tool is holding you back."
    },
    {
        question: "How long does a typical implementation take?",
        answer: "Most core system transformations take 4-8 weeks. We start with a straightforward audit and strategy phase, followed by rapid development and testing. You'll often see functional parts of the system go live within the first 2-3 weeks."
    }
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <Section id="faq" className="bg-surface/50">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl font-bold mb-6"
                        >
                            Common Questions
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-muted-foreground text-lg mb-8"
                        >
                            Everything you need to know about how we build systems that scale.
                        </motion.p>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="border border-border rounded-xl overflow-hidden bg-background"
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="flex items-center justify-between w-full p-6 text-left hover:bg-surface/50 transition-colors"
                                    >
                                        <span className="font-semibold text-lg pr-8">{faq.question}</span>
                                        <span className="shrink-0 text-muted-foreground">
                                            {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                        </span>
                                    </button>
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Structured Data for FAQ */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": faqs.map(faq => ({
                                "@type": "Question",
                                "name": faq.question,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.answer
                                }
                            }))
                        })
                    }}
                />
            </Container>
        </Section>
    );
}

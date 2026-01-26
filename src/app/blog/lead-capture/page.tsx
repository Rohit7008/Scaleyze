import { Metadata } from "next";
import LeadCaptureContent from "./Content";

export const metadata: Metadata = {
    title: "Lead Capture System Case Study | Automate Website Leads to WhatsApp",
    description: "See how we helped a Real Estate Agency increase response time by 3x using an automated lead capture system connected to WhatsApp and CRM.",
    keywords: [
        "lead capture automation",
        "website to whatsapp",
        "real estate lead system",
        "automated lead distribution",
        "CRM data entry automation",
        "instant lead notification",
        "sales follow up automation"
    ],
    openGraph: {
        title: "Case Study: 3x Faster Lead Response Time with Automation",
        description: "How we automated lead capture to eliminate missed opportunities and increase conversions by 45%.",
        url: "https://scaleyze.com/blog/lead-capture", // Correct canonical URL
        type: "article",
        publishedTime: "2024-02-20T00:00:00.000Z",
        authors: ["Scaleyze Team"],
        images: [
            {
                url: "https://scaleyze.com/lead-capture-system.png",
                width: 1200,
                height: 630,
                alt: "Lead Capture System Automations Dashboard"
            }
        ]
    }
};

export default function LeadCapturePage() {
    return <LeadCaptureContent />;
}

import { Metadata } from "next";
import RevenueOperationsContent from "./Content";

export const metadata: Metadata = {
    title: "Revenue Operations Automation | RevOps Services & CRM Integration",
    description: "Automate your sales pipeline with Revenue Operations (RevOps). We connect HubSpot, Salesforce, and other CRMs to build instant lead response systems and automated follow-up workflows.",
    keywords: [
        "revenue operations automation",
        "RevOps services",
        "CRM integration agency",
        "HubSpot automation",
        "Salesforce workflow automation",
        "automated lead follow up",
        "sales process optimization",
        "lead response time reduction"
    ],
    openGraph: {
        title: "Revenue Operations Automation | Scale Your Sales Process",
        description: "Stop losing leads to slow response times. Our RevOps automation systems ensure every lead gets an instant response and perfect follow-up.",
        url: "https://scaleyze.com/services/revenue-operations-automation",
        type: "website",
    }
};

export default function RevenueOperationsAutomationPage() {
    return <RevenueOperationsContent />;
}

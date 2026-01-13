"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <Section className="pt-32 pb-16">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
                        <p className="text-muted-foreground mb-8">Last Updated: January 13, 2026</p>

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client," "you," or "your") and Roonity ("Company," "we," "our," or "us") governing your use of our website and business automation services.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    By accessing our website, engaging our services, or entering into a service agreement, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, please discontinue use of our services immediately.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Roonity provides business systems design and implementation services, including but not limited to:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                                    <li>Customer-facing systems (websites and web applications)</li>
                                    <li>Lead and intake automation systems</li>
                                    <li>Revenue operations automation</li>
                                    <li>Internal operations systems</li>
                                    <li>AI-assisted business systems</li>
                                    <li>Custom automation workflows and integrations</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed">
                                    Specific services, deliverables, timelines, and pricing are defined in individual project agreements or Statements of Work (SOW) that supplement these Terms.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">3. Scope of Work and Project Agreements</h2>

                                <h3 className="text-xl font-semibold mb-3 mt-6">3.1 Project Definition</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Each project begins with a detailed Scope of Work that includes:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                                    <li>Specific deliverables and functionalities</li>
                                    <li>Project timeline and milestones</li>
                                    <li>Technical specifications and requirements</li>
                                    <li>Acceptance criteria</li>
                                    <li>Client responsibilities and dependencies</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Scope Changes</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Any changes to the agreed scope must be documented in writing and may result in adjustments to timeline and pricing. We reserve the right to decline scope changes that significantly alter the project's nature or feasibility.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">4. Pricing and Payment Terms</h2>

                                <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Fees</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Service fees are specified in individual project agreements and may be structured as:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                                    <li>Fixed project fee</li>
                                    <li>Milestone-based payments</li>
                                    <li>Hourly or time-based billing</li>
                                    <li>Retainer arrangements</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Payment Schedule</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Unless otherwise specified:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                                    <li>An initial deposit (typically 30-50%) is required before project commencement</li>
                                    <li>Milestone payments are due upon completion and approval of specified deliverables</li>
                                    <li>Final payment is due before project delivery and handover</li>
                                    <li>Invoices are payable within 14 days of issuance unless otherwise agreed</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-3 mt-6">4.3 Late Payments</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Late payments may result in:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                                    <li>Suspension of work until payment is received</li>
                                    <li>Late fees of 1.5% per month on outstanding balances</li>
                                    <li>Withholding of deliverables, source code, or access credentials</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-3 mt-6">4.4 Expenses</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Third-party costs (hosting, domains, licenses, APIs, stock assets) are billed separately unless included in the project fee. Client approval is required for expenses exceeding agreed thresholds.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">5. Intellectual Property Rights</h2>

                                <h3 className="text-xl font-semibold mb-3 mt-6">5.1 Client Ownership</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Upon full payment, Client receives ownership of:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                                    <li>Custom code developed specifically for the project</li>
                                    <li>Design assets created for the Client</li>
                                    <li>Content and materials provided by the Client</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-3 mt-6">5.2 Company Retention</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Roonity retains ownership of:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                                    <li>Pre-existing code, frameworks, and tools</li>
                                    <li>Reusable components and libraries</li>
                                    <li>Methodologies and processes</li>
                                    <li>General knowledge and expertise</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-3 mt-6">5.3 Third-Party Licenses</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Projects may incorporate third-party software, libraries, or services subject to their respective licenses. Client is responsible for compliance with such licenses.
                                </p>

                                <h3 className="text-xl font-semibold mb-3 mt-6">5.4 Portfolio Rights</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    We reserve the right to showcase completed work in our portfolio, case studies, and marketing materials unless a non-disclosure agreement specifies otherwise.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">6. Client Responsibilities</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Client agrees to:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                    <li>Provide timely access to necessary systems, accounts, and information</li>
                                    <li>Designate a primary point of contact for project communication</li>
                                    <li>Provide timely feedback and approvals on deliverables</li>
                                    <li>Supply required content, assets, and materials as agreed</li>
                                    <li>Ensure all provided materials do not infringe third-party rights</li>
                                    <li>Maintain appropriate backups of critical business data</li>
                                    <li>Comply with all applicable laws and regulations</li>
                                </ul>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">7. Warranties and Representations</h2>

                                <h3 className="text-xl font-semibold mb-3 mt-6">7.1 Our Warranties</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    We warrant that:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                                    <li>Services will be performed with professional skill and care</li>
                                    <li>Deliverables will substantially conform to agreed specifications</li>
                                    <li>We have the right to provide the services</li>
                                    <li>Work will not knowingly infringe third-party intellectual property rights</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-3 mt-6">7.2 Warranty Period</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    We provide a 30-day warranty period following project delivery to address bugs or defects in deliverables that prevent them from functioning as specified. This does not cover:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                                    <li>Issues caused by Client modifications or third-party changes</li>
                                    <li>Problems arising from hosting or infrastructure issues</li>
                                    <li>New feature requests or scope additions</li>
                                    <li>Third-party service failures or API changes</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-3 mt-6">7.3 Disclaimer</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    EXCEPT AS EXPRESSLY STATED, SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                                    <li>Our total liability for any claims arising from services shall not exceed the total fees paid by Client for the specific project</li>
                                    <li>We are not liable for indirect, incidental, consequential, or punitive damages, including lost profits, revenue, data, or business opportunities</li>
                                    <li>We are not responsible for damages caused by Client's misuse of deliverables, third-party services, or force majeure events</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed">
                                    Some jurisdictions do not allow limitation of liability for certain damages, so these limitations may not apply to you.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">9. Confidentiality</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Both parties agree to:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                                    <li>Maintain confidentiality of proprietary information shared during the engagement</li>
                                    <li>Use confidential information solely for project purposes</li>
                                    <li>Not disclose confidential information to third parties without consent</li>
                                    <li>Return or destroy confidential materials upon project completion or request</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed">
                                    This obligation does not apply to information that is publicly available, independently developed, or required to be disclosed by law.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">10. Maintenance and Support</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Post-launch maintenance and support services are available separately and may include:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                                    <li>Bug fixes and technical support</li>
                                    <li>Software updates and security patches</li>
                                    <li>Performance monitoring and optimization</li>
                                    <li>Content updates and minor modifications</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed">
                                    Maintenance terms, response times, and pricing are defined in separate maintenance agreements.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">11. Termination</h2>

                                <h3 className="text-xl font-semibold mb-3 mt-6">11.1 Termination by Client</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Client may terminate the agreement with 14 days' written notice. Client remains responsible for:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                                    <li>Payment for all work completed to date</li>
                                    <li>Any non-refundable expenses incurred</li>
                                    <li>A termination fee if specified in the project agreement</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-3 mt-6">11.2 Termination by Company</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    We may terminate immediately if Client:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                                    <li>Fails to make payment when due</li>
                                    <li>Breaches material terms of the agreement</li>
                                    <li>Engages in abusive or unprofessional conduct</li>
                                    <li>Requests work that violates laws or ethical standards</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-3 mt-6">11.3 Effect of Termination</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Upon termination, we will deliver work completed to date (subject to payment), and Client's license to use incomplete deliverables is revoked.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">12. Indemnification</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Client agrees to indemnify and hold Roonity harmless from claims, damages, and expenses arising from: (a) Client's use of deliverables, (b) content or materials provided by Client, (c) violation of third-party rights, or (d) breach of these Terms.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">13. Independent Contractor</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Roonity operates as an independent contractor. Nothing in these Terms creates an employment, partnership, joint venture, or agency relationship. We are responsible for our own taxes, insurance, and business expenses.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">14. Force Majeure</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Neither party is liable for delays or failures caused by circumstances beyond reasonable control, including natural disasters, war, terrorism, pandemics, government actions, or infrastructure failures.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">15. Dispute Resolution</h2>

                                <h3 className="text-xl font-semibold mb-3 mt-6">15.1 Negotiation</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Parties agree to first attempt to resolve disputes through good-faith negotiation.
                                </p>

                                <h3 className="text-xl font-semibold mb-3 mt-6">15.2 Mediation</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    If negotiation fails, parties agree to mediation before pursuing litigation.
                                </p>

                                <h3 className="text-xl font-semibold mb-3 mt-6">15.3 Governing Law</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    These Terms are governed by the laws of [Your Jurisdiction], without regard to conflict of law principles. Any legal action must be brought in the courts of [Your Jurisdiction].
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">16. General Provisions</h2>

                                <h3 className="text-xl font-semibold mb-3 mt-6">16.1 Entire Agreement</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    These Terms, together with any project agreements or SOWs, constitute the entire agreement and supersede all prior discussions or agreements.
                                </p>

                                <h3 className="text-xl font-semibold mb-3 mt-6">16.2 Amendments</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    We may update these Terms periodically. Material changes will be communicated to active clients. Continued use of services constitutes acceptance of updated Terms.
                                </p>

                                <h3 className="text-xl font-semibold mb-3 mt-6">16.3 Severability</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    If any provision is found unenforceable, the remaining provisions remain in full effect.
                                </p>

                                <h3 className="text-xl font-semibold mb-3 mt-6">16.4 Waiver</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Failure to enforce any provision does not constitute a waiver of that provision or any other provision.
                                </p>

                                <h3 className="text-xl font-semibold mb-3 mt-6">16.5 Assignment</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Client may not assign or transfer these Terms without our written consent. We may assign our rights and obligations to affiliates or successors.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4">17. Contact Information</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    For questions regarding these Terms, please contact us:
                                </p>
                                <div className="bg-surface/50 border border-border rounded-lg p-6">
                                    <p className="font-semibold mb-2">Roonity</p>
                                    <p className="text-muted-foreground">Email: <a href="mailto:legal@roonity.com" className="text-primary hover:underline">legal@roonity.com</a></p>
                                    <p className="text-muted-foreground">Website: <a href="https://roonity.com" className="text-primary hover:underline">www.roonity.com</a></p>
                                </div>
                            </section>
                        </div>
                    </motion.div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}

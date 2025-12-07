import React from 'react';

export const HipaaCompliance: React.FC = () => {
    return (
        <div className="bg-slate-950 min-h-screen pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">HIPAA Compliance and Patient Privacy Statement</h1>

                <div className="prose prose-invert prose-slate max-w-none text-slate-300 space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Our Commitment to Security</h2>
                        <p className="mb-4">
                            OrthoStar is committed to protecting the privacy and security of patient data. We understand the sensitivity required when operating within the healthcare ecosystem and have designed our systems to prioritize data safety and confidentiality.
                        </p>
                        <p>
                            <strong>Data Security:</strong> All data transmitted through the OrthoStar funnel (including the Tally forms and Netlify hosting) utilizes industry-standard encryption protocols (HTTPS/SSL) to ensure the security and integrity of information during transfer. Our data storage relies on secure cloud infrastructure, including robust, enterprise-grade systems like Google Drive, to protect stored video assets.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Our Role and Data Collection</h2>
                        <p className="mb-4">OrthoStar provides a Marketing and Reputation Management Service, not a medical record keeping service. We collect limited, non-clinical data:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Patient Feedback (text or rating)</li>
                            <li>Video Testimonials</li>
                            <li>Optional Contact Information (for reward fulfillment only)</li>
                        </ul>
                        <p>
                            We explicitly do not collect, process, or store Protected Health Information (PHI) as defined by HIPAA (Health Insurance Portability and Accountability Act). We do not request, nor should our clients input, any clinical, diagnostic, or sensitive patient health details into our forms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Business Associate Agreement (BAA) Disclaimer</h2>
                        <p>
                            OrthoStar does not enter into Business Associate Agreements (BAAs) with clients. Because we do not intend to create, receive, maintain, or transmit PHI, we consider ourselves outside the scope of a HIPAA Business Associate.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Client Responsibility</h2>
                        <p className="mb-4">
                            The Client Clinic (the covered entity) remains solely responsible for ensuring its use of the OrthoStar Service aligns with all applicable state, federal, and local regulations, including HIPAA.
                        </p>
                        <p className="mb-2">By using the OrthoStar Service, the client acknowledges and agrees that:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>The client is responsible for ensuring the information they seek from their patients via our forms does not constitute PHI.</li>
                            <li>OrthoStar is not liable for any HIPAA violations resulting from the client's misuse or configuration of the Service.</li>
                        </ul>
                        <p className="italic text-slate-400">We are dedicated to privacy, but compliance is a shared responsibility.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

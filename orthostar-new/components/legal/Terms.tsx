import React from 'react';

export const Terms: React.FC = () => {
    return (
        <div className="bg-slate-950 min-h-screen pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">OrthoStar Terms of Service</h1>

                <div className="prose prose-invert prose-slate max-w-none text-slate-300 space-y-6">
                    <p className="border-b border-white/10 pb-4">
                        <strong>Effective Date:</strong> December 6, 2025
                    </p>

                    <p>
                        These Terms of Service ("Terms") govern your access to and use of the services, websites, and applications (the "Service") provided by OrthoStar ("we," "us," or "our"). By signing up for or using the Service, you agree to these Terms.
                    </p>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. The Service</h2>
                        <ul className="list-none space-y-4">
                            <li>
                                <strong>1.1. Description:</strong> OrthoStar provides a subscription service offering a patient feedback funnel and reputation management system. The Service’s primary function is to filter patient feedback, directing positive experiences toward public review sites (like Google) while capturing negative feedback privately, and generating video testimonials.
                            </li>
                            <li>
                                <strong>1.2. Service Availability:</strong> The Service is provided on an "as-is" basis, and we offer no guarantee of uptime or continuous availability. While we strive for reliability, we are not liable for any downtime or loss of data resulting from service interruptions.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Billing, Fees, and Payment</h2>
                        <ul className="list-none space-y-2">
                            <li><strong>2.1. Initial Period:</strong> The first month of the Service is provided free of charge.</li>
                            <li><strong>2.2. Subscription Cycle:</strong> Following the initial free month, the Service operates on a monthly subscription cycle.</li>
                            <li><strong>2.3. Payment:</strong> The monthly subscription fee is due on the 1st of each calendar month for the service provided during that month.</li>
                            <li><strong>2.4. Price Changes:</strong> We reserve the right to change the subscription fees upon 30 days' notice.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Cancellation and Refunds</h2>
                        <ul className="list-none space-y-4">
                            <li>
                                <strong>3.1. Refund Policy:</strong> If the client is not satisfied with the Service for any reason, they are entitled to a full refund for the current month's subscription fee, regardless of the date of the request (from the 1st to the 30th of the month). The refund will be processed promptly upon request.
                            </li>
                            <li>
                                <strong>3.2. Cancellation:</strong> A client may cancel their subscription at any time. Due to the monthly refund policy, no formal notice period is required. Cancellation will be effective immediately, and the client will be refunded the full fee for the current month, as per Section 3.1.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property and Content Ownership</h2>
                        <ul className="list-none space-y-2">
                            <li><strong>4.1. Ownership of Client Data:</strong> The client clinic owns all data and text feedback collected from their patients via the Service.</li>
                            <li><strong>4.2. Ownership of Video Testimonials:</strong> OrthoStar retains ownership of the video files only for the purpose of storing and delivering them to the client. The patient and the client clinic may request copies of any video testimonial at any time.</li>
                            <li><strong>4.3. Deletion Rights:</strong> Patients or the client clinic may request the deletion of any video testimonials or associated patient data at any time, and we will comply promptly.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Client Obligations</h2>
                        <p className="mb-2">The client clinic agrees to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide accurate and current information required for service setup (e.g., Google Review Link).</li>
                            <li>Ensure that any rewards offered to patients for testimonials comply with all applicable laws and regulations (e.g., FTC guidelines on testimonials).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
                        <p>OrthoStar is not liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses, resulting from the use of or inability to use the Service.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">7. Governing Law</h2>
                        <p>These Terms and any dispute arising out of or related to them shall be governed by and construed in accordance with the laws of the State of Washington, USA, without regard to its conflict of law principles.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">8. Contact Information</h2>
                        <p>For any questions regarding these Terms, please contact us at: <span className="text-brand-400">OrthoStarHelp@gmail.com</span></p>
                    </section>
                </div>
            </div>
        </div>
    );
};

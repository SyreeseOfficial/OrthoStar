import React from 'react';

export const Privacy: React.FC = () => {
    return (
        <div className="bg-slate-950 min-h-screen pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">OrthoStar Privacy Policy</h1>

                <div className="prose prose-invert prose-slate max-w-none text-slate-300 space-y-6">
                    <p className="border-b border-white/10 pb-4">
                        <strong>Effective Date:</strong> December 6, 2025
                    </p>

                    <p>
                        This Privacy Policy explains how OrthoStar ("we," "us," or "our") collects, uses, and protects information when patients of our client orthodontic clinics use our feedback funnel (the "Service").
                    </p>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. The Information We Collect</h2>
                        <p className="mb-4">We collect information directly from the patient when they submit a form through the Service. The information collected depends on the patient's choice:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li><strong>Private Feedback (1-4 Stars):</strong> We collect the patient's contact information (e.g., name, phone number, email address) and the text of their feedback regarding the clinic.</li>
                            <li><strong>Video Testimonial Submission (5 Stars):</strong> We collect the patient's contact information (for reward fulfillment) and the video file they choose to upload.</li>
                        </ul>
                        <p className="font-semibold text-brand-400">Crucially, we do not collect or store any protected health information (PHI) or financial information.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use the Information</h2>
                        <p className="mb-4">The information collected is used strictly for the following purposes:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>To Fulfill Service Obligations:</strong> To transmit the patient's private feedback and/or video testimonial to the respective client orthodontic clinic.</li>
                            <li><strong>Reward Fulfillment:</strong> To contact the patient to deliver the promised reward (e.g., gift card, coupon, discount, teeth cleaning kit, etc.) as determined by the client clinic.</li>
                            <li><strong>Service Maintenance:</strong> To maintain logs of submissions for service monitoring and internal quality control.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Sharing Your Information</h2>
                        <p className="mb-4">We do not sell, rent, or trade patient information with any third parties outside of our core service provision.</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Client Clinics:</strong> We share the patient's submitted feedback, contact information, and video files directly with the specific client orthodontic clinic they visited, as this is the primary purpose of the Service.</li>
                            <li><strong>Service Providers:</strong> We use Tally Forms for collecting submissions and an email service (like Gmail) for notifications. These service providers handle data strictly on our behalf and are bound by their own privacy policies.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Data Storage and Retention</h2>
                        <p>All submitted data, including video files and contact information, is retained:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Until Deletion is Requested:</strong> We will retain the information until the patient or the client clinic formally requests its deletion.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Your Choices and Rights</h2>
                        <p className="mb-4">You have the following rights regarding the data we hold:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Access and Correction:</strong> You may request access to the information we hold about you or request that we correct any inaccurate information.</li>
                            <li><strong>Deletion:</strong> You may request that we delete your submitted information and video files. We will comply with all deletion requests and notify the respective client clinic.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Changes to This Privacy Policy</h2>
                        <p>We may update this policy periodically. We will notify you of any significant changes by updating the "Effective Date" at the top of this policy.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Us</h2>
                        <p>If you have any questions or concerns regarding this Privacy Policy or your data, please contact us at:</p>
                        <p className="mt-2 text-brand-400">Email: OrthoStarHelp@gmail.com</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

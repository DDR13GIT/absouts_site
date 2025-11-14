export default function PrivacyPolicy() {
  return (
    <div className="pt-16" data-testid="privacy-policy-page">
      {/* Hero Banner */}
      <section className="py-20 bg-bg-base relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-success/30 border border-brand-accent/20 mb-6">
              <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-text-primary">Legal</span>
            </div>

            <h1 className="text-5xl font-bold text-brand-primary mb-6">Privacy Policy</h1>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-text-secondary mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Introduction</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Absouts ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
              <p className="text-text-secondary leading-relaxed">
                We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Information We Collect</h2>

              <h3 className="text-2xl font-semibold text-brand-secondary mb-3 mt-6">Personal Data</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We may collect personally identifiable information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
                <li>Register on the website</li>
                <li>Express an interest in obtaining information about us or our products and services</li>
                <li>Participate in activities on the website</li>
                <li>Contact us via contact forms or email</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mb-4">
                The personal information we collect may include:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
                <li>Name and contact data (email address, phone number, company name)</li>
                <li>Professional information (job title, company details, industry)</li>
                <li>Communication data (messages, feedback, inquiries)</li>
                <li>Marketing preferences and interests</li>
              </ul>

              <h3 className="text-2xl font-semibold text-brand-secondary mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages visited, time spent on pages, and navigation paths</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">How We Use Your Information</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We use the information we collect or receive to:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Provide, operate, and maintain our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you technical notices, updates, security alerts, and administrative messages</li>
                <li>Communicate with you about products, services, offers, and events</li>
                <li>Analyze usage trends and improve our website and services</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
                <li>Comply with legal obligations and enforce our terms and policies</li>
                <li>Process transactions and manage accounts</li>
              </ul>
            </div>

            {/* Disclosure of Your Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Disclosure of Your Information</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service.</li>
                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, legal processes, or court orders.</li>
                <li><strong>Vital Interests and Legal Rights:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person, or as evidence in litigation.</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Data Security</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
              <p className="text-text-secondary leading-relaxed">
                We maintain security measures including encryption, secure servers, access controls, and regular security assessments to protect your data from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Data Retention</h2>
              <p className="text-text-secondary leading-relaxed">
                We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies. We will also retain usage data for internal analysis purposes, typically for a shorter period, except when this data is used to strengthen security or improve functionality.
              </p>
            </div>

            {/* Your Privacy Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Your Privacy Rights</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li><strong>Access:</strong> You have the right to request access to the personal information we hold about you.</li>
                <li><strong>Correction:</strong> You have the right to request that we correct any inaccurate or incomplete personal information.</li>
                <li><strong>Deletion:</strong> You have the right to request that we delete your personal information, subject to certain exceptions.</li>
                <li><strong>Objection:</strong> You have the right to object to our processing of your personal information.</li>
                <li><strong>Restriction:</strong> You have the right to request that we restrict the processing of your personal information.</li>
                <li><strong>Data Portability:</strong> You have the right to receive a copy of your personal information in a structured, commonly used, and machine-readable format.</li>
                <li><strong>Withdraw Consent:</strong> If we are processing your personal information based on your consent, you have the right to withdraw your consent at any time.</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                To exercise any of these rights, please contact us using the information provided at the end of this policy.
              </p>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
              <p className="text-text-secondary leading-relaxed">
                For more information about how we use cookies, please refer to our Cookie Policy.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Third-Party Websites</h2>
              <p className="text-text-secondary leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Children's Privacy</h2>
              <p className="text-text-secondary leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us. If we become aware that we have collected personal information from children without verification of parental consent, we will take steps to remove that information from our servers.
              </p>
            </div>

            {/* International Data Transfers */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">International Data Transfers</h2>
              <p className="text-text-secondary leading-relaxed">
                Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction. We will take all necessary steps to ensure that your data is treated securely and in accordance with this Privacy Policy.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Contact Us</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you have questions or comments about this Privacy Policy, or if you wish to exercise your privacy rights, please contact us at:
              </p>
              <div className="bg-bg-section p-6 rounded-lg">
                <p className="text-text-primary font-semibold mb-2">Absouts</p>
                <p className="text-text-secondary">Email: privacy@absouts.com</p>
                <p className="text-text-secondary">Email: support@absouts.com</p>
                <p className="text-text-secondary">Phone: +880 1234 567 890</p>
                <p className="text-text-secondary">Address: Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

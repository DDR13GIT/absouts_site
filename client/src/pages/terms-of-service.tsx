export default function TermsOfService() {
  return (
    <div className="pt-16" data-testid="terms-of-service-page">
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

            <h1 className="text-5xl font-bold text-brand-primary mb-6">Terms of Service</h1>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto">
              Please read these terms and conditions carefully before using our services.
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
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Agreement to Terms</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and Absouts ("Company," "we," "us," or "our") concerning your access to and use of our website, services, and products. By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you do not agree with all of these Terms, you are expressly prohibited from using our services and must discontinue use immediately.
              </p>
              <p className="text-text-secondary leading-relaxed">
                We reserve the right to change or modify these Terms at any time and in our sole discretion. If we make changes to these Terms, we will provide notice by updating the date at the top of these Terms. Your continued use of our services following the posting of revised Terms means that you accept and agree to the changes.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Intellectual Property Rights</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Unless otherwise indicated, our website and services, including source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks"), are owned or controlled by us or licensed to us.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Content and Marks are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of Bangladesh and international conventions.
              </p>
              <p className="text-text-secondary leading-relaxed">
                The Content and Marks are provided on our services "AS IS" for your information and personal use only. Except as expressly provided in these Terms, no part of our services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
              </p>
            </div>

            {/* User Representations */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">User Representations</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                By using our services, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>You have the legal capacity and you agree to comply with these Terms.</li>
                <li>You are not under the age of 18.</li>
                <li>You will not access our services through automated or non-human means, whether through a bot, script, or otherwise.</li>
                <li>You will not use our services for any illegal or unauthorized purpose.</li>
                <li>Your use of our services will not violate any applicable law or regulation.</li>
                <li>All registration information you submit is truthful and accurate.</li>
                <li>You will maintain the accuracy of such information.</li>
                <li>You will not provide false or misleading information.</li>
              </ul>
            </div>

            {/* Prohibited Activities */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Prohibited Activities</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                You may not access or use our services for any purpose other than that for which we make our services available. Prohibited activities include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Systematically retrieve data or content to create a collection, compilation, database, or directory without our written permission.</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of our services.</li>
                <li>Engage in unauthorized framing of or linking to our services.</li>
                <li>Trick, defraud, or mislead us or other users, especially in attempts to learn sensitive account information.</li>
                <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                <li>Engage in any automated use of the system, such as using scripts to send comments or messages.</li>
                <li>Interfere with, disrupt, or create an undue burden on our services or networks.</li>
                <li>Attempt to impersonate another user or person or use another user's username.</li>
                <li>Sell or transfer your profile or account.</li>
                <li>Use our services to advertise or offer to sell goods and services without authorization.</li>
                <li>Upload or transmit viruses, Trojan horses, or other material that interferes with any party's use of our services.</li>
                <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing services to you.</li>
                <li>Delete the copyright or other proprietary rights notice from any Content.</li>
                <li>Attempt to bypass measures designed to prevent or restrict access to our services.</li>
                <li>Copy or adapt our software or any portion thereof.</li>
                <li>Decipher, decompile, disassemble, or reverse engineer any of the software comprising our services.</li>
              </ul>
            </div>

            {/* Services and Products */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Services and Products</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We provide various business process outsourcing, software development, cloud accounting, and related services. We make every effort to display our services accurately on our website. However, we reserve the right to:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Modify or discontinue any service without notice.</li>
                <li>Refuse service to anyone for any reason at any time.</li>
                <li>Update service descriptions, specifications, and pricing.</li>
                <li>Limit the scope of services offered.</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                We cannot guarantee that services will always be available, uninterrupted, timely, secure, or error-free. We reserve the right to change, suspend, or discontinue all or any part of our services at any time without notice.
              </p>
            </div>

            {/* User Data and Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">User Data and Privacy</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We will maintain certain data that you transmit to our services for the purpose of managing the performance of our services, as well as data relating to your use of our services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using our services.
              </p>
              <p className="text-text-secondary leading-relaxed">
                You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption. For more information about how we handle your data, please refer to our Privacy Policy.
              </p>
            </div>

            {/* Fees and Payment */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Fees and Payment</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Certain services may require payment of fees. You agree to pay all fees associated with your use of our services according to the pricing, payment, and billing policies in effect at the time the fee is due.
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>All fees are non-refundable unless otherwise stated in a separate written agreement.</li>
                <li>We reserve the right to change our fees at any time upon reasonable notice.</li>
                <li>You are responsible for paying all applicable taxes.</li>
                <li>Failure to pay fees may result in suspension or termination of services.</li>
                <li>We may use third-party payment processors, and your payment information will be subject to their terms and privacy policies.</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Limitation of Liability</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF OUR SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="text-text-secondary leading-relaxed">
                NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Indemnification</h2>
              <p className="text-text-secondary leading-relaxed">
                You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) your use of our services; (2) breach of these Terms; (3) any breach of your representations and warranties; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any harmful act toward any other user with whom you connected via our services.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Disclaimer</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                OUR SERVICES ARE PROVIDED ON AN "AS-IS" AND "AS-AVAILABLE" BASIS. YOU AGREE THAT YOUR USE OF OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH OUR SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-text-secondary leading-relaxed">
                WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF OUR SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO OUR SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE RESULTING FROM YOUR ACCESS TO AND USE OF OUR SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SERVERS AND/OR ANY PERSONAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM OUR SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH OUR SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA OUR SERVICES.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Termination</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                These Terms shall remain in full force and effect while you use our services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF OUR SERVICES TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OR OF ANY APPLICABLE LAW OR REGULATION.
              </p>
              <p className="text-text-secondary leading-relaxed">
                If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Governing Law</h2>
              <p className="text-text-secondary leading-relaxed">
                These Terms shall be governed by and defined following the laws of Bangladesh. Absouts and yourself irrevocably consent that the courts of Bangladesh shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Terms.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Dispute Resolution</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Any legal action of whatever nature brought by either you or us shall be commenced or prosecuted in the courts of Bangladesh, and the parties hereby consent to, and waive all defenses of lack of personal jurisdiction and forum non conveniens with respect to venue and jurisdiction in such courts.
              </p>
              <p className="text-text-secondary leading-relaxed">
                We encourage you to contact us first to resolve any disputes informally. If we cannot resolve a dispute informally, any dispute will be resolved through binding arbitration in accordance with the laws of Bangladesh.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Severability and Waiver</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                If any provision of these Terms is determined to be unlawful, void, or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms. Such determination shall not affect the validity and enforceability of any other remaining provisions.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter, nor shall the waiver of a breach constitute a waiver of any subsequent breach.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Contact Us</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-bg-section p-6 rounded-lg">
                <p className="text-text-primary font-semibold mb-2">Absouts</p>
                <p className="text-text-secondary">Email: legal@absouts.com</p>
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

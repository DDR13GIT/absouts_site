export default function CookiePolicy() {
  return (
    <div className="pt-16" data-testid="cookie-policy-page">
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

            <h1 className="text-5xl font-bold text-brand-primary mb-6">Cookie Policy</h1>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto">
              Learn about how we use cookies and similar technologies on our website.
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
              <h2 className="text-3xl font-bold text-brand-primary mb-4">What Are Cookies?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
              </p>
              <p className="text-text-secondary leading-relaxed">
                This Cookie Policy explains how Absouts ("we," "us," or "our") uses cookies and similar technologies on our website. By using our website, you consent to the use of cookies in accordance with this Cookie Policy.
              </p>
            </div>

            {/* How We Use Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">How We Use Cookies</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We use cookies for several reasons detailed below. In most cases, there are no industry-standard options for disabling cookies without completely disabling the functionality and features they add to our site. It is recommended that you leave cookies enabled if you are not sure whether you need them, as they may be used to provide a service that you use.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Cookies help us:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Understand how you use our website and improve your experience</li>
                <li>Remember your preferences and settings</li>
                <li>Enable certain website functionality</li>
                <li>Analyze website traffic and performance</li>
                <li>Deliver relevant content and advertising</li>
                <li>Measure the effectiveness of our marketing campaigns</li>
              </ul>
            </div>

            {/* Types of Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Types of Cookies We Use</h2>

              <h3 className="text-2xl font-semibold text-brand-secondary mb-3 mt-6">1. Strictly Necessary Cookies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                These cookies are essential for our website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies as they are necessary for the website to work.
              </p>
              <div className="bg-bg-section p-4 rounded-lg mb-4">
                <p className="text-text-secondary text-sm"><strong>Examples:</strong></p>
                <ul className="list-disc pl-6 text-text-secondary text-sm space-y-1 mt-2">
                  <li>Session cookies for authentication</li>
                  <li>Security cookies to detect authentication abuses</li>
                  <li>Load balancing cookies</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-brand-secondary mb-3 mt-6">2. Performance and Analytics Cookies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                These cookies collect information about how visitors use our website, such as which pages are visited most often and if error messages are received. This helps us improve our website's performance and user experience.
              </p>
              <div className="bg-bg-section p-4 rounded-lg mb-4">
                <p className="text-text-secondary text-sm"><strong>Examples:</strong></p>
                <ul className="list-disc pl-6 text-text-secondary text-sm space-y-1 mt-2">
                  <li>Google Analytics cookies (if implemented)</li>
                  <li>Page response time tracking</li>
                  <li>Error detection and reporting</li>
                  <li>Website usage statistics</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-brand-secondary mb-3 mt-6">3. Functionality Cookies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                These cookies allow our website to remember choices you make (such as your username, language, or region) and provide enhanced, more personalized features.
              </p>
              <div className="bg-bg-section p-4 rounded-lg mb-4">
                <p className="text-text-secondary text-sm"><strong>Examples:</strong></p>
                <ul className="list-disc pl-6 text-text-secondary text-sm space-y-1 mt-2">
                  <li>Language preference cookies</li>
                  <li>User interface customization</li>
                  <li>Region selection</li>
                  <li>Font size and display preferences</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-brand-secondary mb-3 mt-6">4. Targeting and Advertising Cookies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                These cookies are used to deliver advertisements that are more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
              </p>
              <div className="bg-bg-section p-4 rounded-lg mb-4">
                <p className="text-text-secondary text-sm"><strong>Examples:</strong></p>
                <ul className="list-disc pl-6 text-text-secondary text-sm space-y-1 mt-2">
                  <li>Advertising network cookies</li>
                  <li>Retargeting cookies</li>
                  <li>Social media advertising cookies</li>
                  <li>Campaign tracking cookies</li>
                </ul>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Third-Party Cookies</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                In some cases, we use cookies provided by trusted third parties. The following section details which third-party cookies you might encounter through our website:
              </p>

              <h3 className="text-xl font-semibold text-brand-secondary mb-3 mt-6">Analytics Services</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We may use analytics services such as Google Analytics to help us understand how users engage with our website. These cookies track information such as how long you spend on the site and the pages you visit, which helps us continue to produce engaging content.
              </p>

              <h3 className="text-xl font-semibold text-brand-secondary mb-3 mt-6">Social Media Features</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our website may include social media features, such as Facebook, Twitter, LinkedIn, and Instagram buttons. These features may collect your IP address, which page you are visiting on our site, and may set a cookie to enable the feature to function properly.
              </p>

              <h3 className="text-xl font-semibold text-brand-secondary mb-3 mt-6">Advertising Partners</h3>
              <p className="text-text-secondary leading-relaxed">
                We may work with advertising partners to serve ads that we believe are relevant to you and your interests. These partners may set cookies to collect information about your browsing activities across different websites.
              </p>
            </div>

            {/* Cookie Duration */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Cookie Duration</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Cookies can be either "session" or "persistent" cookies:
              </p>

              <div className="space-y-4">
                <div className="bg-bg-section p-4 rounded-lg">
                  <h4 className="font-semibold text-brand-primary mb-2">Session Cookies</h4>
                  <p className="text-text-secondary text-sm">
                    These are temporary cookies that expire when you close your browser. They allow our website to link your actions during a browsing session.
                  </p>
                </div>

                <div className="bg-bg-section p-4 rounded-lg">
                  <h4 className="font-semibold text-brand-primary mb-2">Persistent Cookies</h4>
                  <p className="text-text-secondary text-sm">
                    These remain on your device for a set period or until you delete them. They help us recognize you as a returning visitor and remember your preferences.
                  </p>
                </div>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">How to Control and Delete Cookies</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting your browser settings.
              </p>

              <h3 className="text-2xl font-semibold text-brand-secondary mb-3 mt-6">Browser Settings</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Most web browsers allow some control of cookies through browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
                <li><strong>Google Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
                <li><strong>Mozilla Firefox:</strong> Options &gt; Privacy & Security &gt; Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website data</li>
                <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions &gt; Cookies and site data</li>
              </ul>

              <h3 className="text-2xl font-semibold text-brand-secondary mb-3 mt-6">Important Note</h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-text-secondary text-sm">
                  Please note that blocking certain cookies may impact your experience on our website and limit the services we can provide. Some features and pages may not work as expected if you disable cookies.
                </p>
              </div>
            </div>

            {/* Opt-Out Options */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Opt-Out of Tracking</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                You can opt out of certain types of tracking:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li><strong>Google Analytics:</strong> Install the Google Analytics Opt-out Browser Add-on</li>
                <li><strong>Do Not Track:</strong> Some browsers support "Do Not Track" signals. We respect these preferences where possible.</li>
                <li><strong>Advertising Cookies:</strong> Visit the Network Advertising Initiative or Digital Advertising Alliance opt-out pages to manage advertising cookies from participating companies.</li>
              </ul>
            </div>

            {/* Updates to Cookie Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Updates to This Cookie Policy</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons. We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies.
              </p>
              <p className="text-text-secondary leading-relaxed">
                The "Last Updated" date at the top of this page indicates when this Cookie Policy was last revised. Any changes will become effective when we post the revised Cookie Policy on our website.
              </p>
            </div>

            {/* More Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">More Information About Cookies</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                For more information about cookies and how they work, you can visit the following resources:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>All About Cookies: www.allaboutcookies.org</li>
                <li>Network Advertising Initiative: www.networkadvertising.org</li>
                <li>Your Online Choices: www.youronlinechoices.com</li>
              </ul>
            </div>

            {/* Cookie List */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Cookie List</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Below is a list of cookies that may be used on our website:
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-bg-section">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-brand-primary border-b">Cookie Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-brand-primary border-b">Purpose</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-brand-primary border-b">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-text-secondary">session_id</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">Essential - Maintains user session</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">Session</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-text-secondary">cookie_consent</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">Essential - Stores cookie preferences</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">1 year</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-text-secondary">_ga</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">Analytics - Google Analytics tracking</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">2 years</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-text-secondary">_gid</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">Analytics - Google Analytics tracking</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">24 hours</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-text-secondary">language_pref</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">Functionality - Language preference</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-text-secondary text-sm mt-4 italic">
                Note: This is a sample list. Actual cookies may vary based on your implementation.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Contact Us</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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

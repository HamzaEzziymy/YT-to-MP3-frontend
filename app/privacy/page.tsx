import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata(
  'Privacy Policy',
  'Our Privacy Policy explains how YT to MP3 collects, uses, and protects your information. We are committed to your privacy — we never store your converted files.',
  '/privacy',
)

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <article>
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: January 2024</p>
        </header>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              YT to MP3 (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you use our YouTube to MP3 conversion service.
            </p>
            <p className="mt-4">
              <strong>The short version:</strong> We collect minimal data, we don&apos;t store your
              converted files, and we don&apos;t sell your information to anyone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">2.1 Information You Provide</h3>
            <p>
              When you use our Service, you provide us with YouTube URLs to convert. We process
              these URLs to perform the conversion but do not store them beyond the duration of your
              session.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we automatically collect certain information:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>
                <strong>Log data:</strong> IP address, browser type, operating system, referring
                URLs, and pages visited. This data is used for security, rate limiting, and service
                improvement.
              </li>
              <li>
                <strong>Usage data:</strong> Information about how you interact with our Service,
                including conversion requests (without storing the actual content).
              </li>
              <li>
                <strong>Cookies:</strong> We use essential cookies for rate limiting and session
                management. We do not use tracking cookies for advertising purposes.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">2.3 Analytics</h3>
            <p>
              We use Google Analytics to understand how users interact with our Service. Google
              Analytics collects anonymized usage data. You can opt out of Google Analytics by
              installing the{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Provide, operate, and maintain our Service</li>
              <li>Enforce rate limits to ensure fair access for all users</li>
              <li>Monitor and analyze usage patterns to improve the Service</li>
              <li>Detect and prevent fraud, abuse, and security incidents</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Retention</h2>
            <p>
              <strong>Converted files:</strong> We do not retain converted audio or video files.
              All temporary files are automatically deleted from our servers immediately after you
              download them, or within 5 minutes if not downloaded.
            </p>
            <p className="mt-4">
              <strong>Log data:</strong> Server logs are retained for up to 30 days for security
              and debugging purposes, then automatically deleted.
            </p>
            <p className="mt-4">
              <strong>Analytics data:</strong> Anonymized analytics data is retained according to
              Google Analytics&apos; data retention policies (default: 26 months).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Sharing Your Information</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information with:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>
                <strong>Service providers:</strong> Third-party vendors who assist in operating our
                Service (hosting, analytics), bound by confidentiality agreements.
              </li>
              <li>
                <strong>Legal requirements:</strong> When required by law, court order, or
                governmental authority.
              </li>
              <li>
                <strong>Protection of rights:</strong> When necessary to protect the rights,
                property, or safety of YT to MP3, our users, or the public.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Advertising</h2>
            <p>
              We display advertisements through Google AdSense to support our free service. Google
              AdSense may use cookies to serve ads based on your prior visits to our website or
              other websites. You can opt out of personalized advertising by visiting{' '}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline"
              >
                Google&apos;s Ads Settings
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>The right to access personal data we hold about you</li>
              <li>The right to request correction of inaccurate data</li>
              <li>The right to request deletion of your data</li>
              <li>The right to object to processing of your data</li>
              <li>The right to data portability</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at privacy@yourdomain.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children&apos;s Privacy</h2>
            <p>
              Our Service is not directed to children under the age of 13. We do not knowingly
              collect personal information from children under 13. If you are a parent or guardian
              and believe your child has provided us with personal information, please contact us
              immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect
              your information against unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the Internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any
              changes by posting the new Privacy Policy on this page and updating the &quot;Last
              updated&quot; date. Your continued use of the Service after any changes constitutes
              acceptance of the new Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please
              contact us at:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mt-4">
              <p className="font-medium text-gray-900">YT to MP3 — Privacy Team</p>
              <p className="text-gray-600">Email: privacy@yourdomain.com</p>
            </div>
          </section>
        </div>
      </article>
    </div>
  )
}

import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata(
  'Terms of Service',
  'Read our Terms of Service for using the YT to MP3 converter. Understand your rights and responsibilities when using our free YouTube to MP3 conversion service.',
  '/terms',
)

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <article>
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-500 text-sm">Last updated: January 2024</p>
        </header>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the YT to MP3 service (&quot;Service&quot;), you agree to be bound by
              these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not
              use our Service. We reserve the right to modify these Terms at any time, and your
              continued use of the Service constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p>
              YT to MP3 provides a web-based tool that allows users to convert publicly available
              YouTube videos to audio files in various formats (MP3, WAV, OGG, FLAC) or video files
              (MP4). The Service is provided &quot;as is&quot; and is intended for personal, non-commercial use
              only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Permitted Use</h2>
            <p>You may use our Service only for lawful purposes and in accordance with these Terms. You agree to use the Service only to convert content that:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>You own or have explicit permission to download</li>
              <li>Is licensed under Creative Commons or similar open licenses that permit downloading</li>
              <li>Is in the public domain</li>
              <li>You are otherwise legally entitled to download under applicable law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Prohibited Use</h2>
            <p>You agree not to use the Service to:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Download or convert copyrighted content without authorization</li>
              <li>Circumvent any technological protection measures</li>
              <li>Distribute, sell, or commercially exploit converted content</li>
              <li>Violate YouTube&apos;s Terms of Service</li>
              <li>Engage in any activity that violates applicable local, national, or international law</li>
              <li>Attempt to overload, disrupt, or interfere with our servers or networks</li>
              <li>Use automated tools, bots, or scripts to access the Service beyond normal use</li>
              <li>Attempt to reverse engineer, decompile, or extract our source code</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are owned by YT to
              MP3 and are protected by international copyright, trademark, patent, trade secret, and
              other intellectual property laws.
            </p>
            <p className="mt-4">
              We do not claim ownership of any content you convert using our Service. You are solely
              responsible for ensuring you have the right to convert and use any content processed
              through our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Rate Limits and Fair Use</h2>
            <p>
              To ensure fair access for all users, we implement rate limits on our Service. Free
              users are limited to 10 conversions per minute. Attempting to circumvent these limits
              through technical means may result in temporary or permanent suspension of access.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
              EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT
              WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, YT TO MP3 SHALL NOT BE LIABLE FOR
              ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT
              NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES,
              RESULTING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless YT to MP3 and its officers,
              directors, employees, and agents from and against any claims, liabilities, damages,
              judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos;
              fees) arising out of or relating to your violation of these Terms or your use of the
              Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to the Service immediately,
              without prior notice or liability, for any reason, including if you breach these Terms.
              Upon termination, your right to use the Service will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable law,
              without regard to its conflict of law provisions. Any disputes arising under these
              Terms shall be subject to the exclusive jurisdiction of the competent courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mt-4">
              <p className="font-medium text-gray-900">YT to MP3</p>
              <p className="text-gray-600">Email: legal@yourdomain.com</p>
            </div>
          </section>
        </div>
      </article>
    </div>
  )
}

import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata(
  'DMCA Policy — Copyright Takedown Procedure',
  'Our DMCA policy and copyright takedown procedure. Learn how to submit a DMCA notice if you believe your copyrighted content has been infringed.',
  '/dmca',
)

export default function DMCAPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <article>
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">DMCA Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: January 2024</p>
        </header>

        <div className="prose max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <p>
              YT to MP3 respects the intellectual property rights of others and expects its users to
              do the same. In accordance with the Digital Millennium Copyright Act of 1998 (DMCA), we
              will respond expeditiously to claims of copyright infringement committed using our
              service.
            </p>
            <p>
              Our service is a conversion tool that processes publicly available YouTube content at
              the request of users. We do not host, store, or distribute copyrighted content. All
              converted files are temporary and are automatically deleted from our servers immediately
              after download.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Our Service Works</h2>
            <p>
              When a user submits a YouTube URL to our service, we temporarily process the audio
              stream to convert it to the requested format. The resulting file is made available for
              download for a brief period (typically less than 5 minutes) before being permanently
              deleted from our servers. We do not maintain a library of converted files.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Submitting a DMCA Notice</h2>
            <p>
              If you believe that content accessible through our service infringes your copyright,
              you may submit a DMCA takedown notice. To be effective, your notice must include:
            </p>
            <ol className="list-decimal list-inside space-y-3 mt-4">
              <li>
                <strong>Identification of the copyrighted work:</strong> A description of the
                copyrighted work you claim has been infringed, or if multiple works are covered by a
                single notification, a representative list of such works.
              </li>
              <li>
                <strong>Identification of the infringing material:</strong> A description of the
                material you claim is infringing and information reasonably sufficient to permit us
                to locate the material (e.g., the YouTube URL being converted).
              </li>
              <li>
                <strong>Contact information:</strong> Your address, telephone number, and email
                address.
              </li>
              <li>
                <strong>Good faith statement:</strong> A statement that you have a good faith belief
                that use of the material in the manner complained of is not authorized by the
                copyright owner, its agent, or the law.
              </li>
              <li>
                <strong>Accuracy statement:</strong> A statement that the information in the
                notification is accurate, and under penalty of perjury, that you are authorized to
                act on behalf of the owner of an exclusive right that is allegedly infringed.
              </li>
              <li>
                <strong>Signature:</strong> A physical or electronic signature of a person authorized
                to act on behalf of the owner of the copyright.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Counter-Notification</h2>
            <p>
              If you believe that material you submitted was removed or disabled as a result of
              mistake or misidentification, you may submit a counter-notification. Your
              counter-notification must include:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Your physical or electronic signature</li>
              <li>Identification of the material that was removed and its location before removal</li>
              <li>
                A statement under penalty of perjury that you have a good faith belief that the
                material was removed or disabled as a result of mistake or misidentification
              </li>
              <li>
                Your name, address, and telephone number, and a statement that you consent to the
                jurisdiction of the federal district court for the judicial district in which your
                address is located
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Repeat Infringers</h2>
            <p>
              In accordance with the DMCA and other applicable law, we have adopted a policy of
              terminating, in appropriate circumstances, users who are deemed to be repeat infringers.
              We may also at our sole discretion limit access to our service and/or terminate the
              accounts of any users who infringe any intellectual property rights of others, whether
              or not there is any repeat infringement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <p>
              Please note that due to the temporary nature of our service (files are deleted
              immediately after download), DMCA notices regarding specific converted files may not
              result in any action as the files no longer exist on our servers. However, we take all
              notices seriously and will investigate any reported misuse of our service.
            </p>
            <p className="mt-4">
              To submit a DMCA notice or for any copyright-related inquiries, please contact us at:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mt-4">
              <p className="font-medium text-gray-900">DMCA Agent</p>
              <p className="text-gray-600">YT to MP3</p>
              <p className="text-gray-600">Email: dmca@yourdomain.com</p>
            </div>
          </section>
        </div>
      </article>
    </div>
  )
}

export default function TermsOfUse() {
  return (
    <div className="mx-auto min-h-screen max-w-4xl bg-white p-6 text-gray-900 sm:p-10 md:p-16">
      <h1 className="mb-8 text-center text-3xl font-bold sm:text-4xl">
        Terms of Use
      </h1>

      <div className="space-y-6">
        <div>
          <p>
            These Terms of Use (&quot;Terms&quot;) constitute a legally binding
            agreement between you and Frontier Vista Global Inc. This agreement
            is formed when you access any part of www.frontiervista.com or any
            other sites that link to these terms (&quot;Website&quot;). Your
            continued use of the website after any changes to these Terms
            signifies your acceptance of those changes. This Website is intended
            solely for business-to-business use and is not for consumer,
            private, or household purposes. By accessing the Website, you
            confirm that you are at least 18 years old and possess the legal
            authority to agree to these Terms on your own behalf or on behalf of
            the business you represent.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Who We Are and How to Contact Us
        </h2>
        <p>
          Frontier Vista Global Inc. is a company incorporated under the laws of
          Alberta, and Canada. Our primary business location is 15652 18th
          Avenue SW, Edmonton, Alberta, Canada. To get in touch with us, please
          email{" "}
          <a
            href="mailto:legal@frontieravista.com"
            className="text-blue-600 underline"
          >
            legal@frontieravista.com
          </a>{" "}
          or call us at{" "}
          <a href="tel:+18258898445" className="text-blue-600 underline">
            +1.825.889.8445
          </a>
          .
        </p>
      </div>

      <div className="mt-10 space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">
          Website Availability and Modifications
        </h2>
        <p>
          We cannot guarantee that our website or any content on it will always
          be available or uninterrupted. We reserve the right to suspend,
          withdraw, or restrict access to all or any part of our website for
          operational and business reasons.
        </p>
      </div>


      <div className="mt-10 space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Effective Date</h2>
        <p>May 22, 2025</p>
      </div>
      <div className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold">Prohibited Activities</h2>
        <p className="mb-4">
          You are strictly prohibited from using our Website to commit any
          violation of federal, provincial, local, or international laws,
          regulations, or other governmental requirements. We reserve the right
          to report any potentially unlawful activity to relevant law
          enforcement, regulators, or other third parties without prior notice
          to you. We will cooperate with such authorities by disclosing your
          identity where legally required or permitted. In the event of such a
          violation, your right to use our Website will cease immediately.
        </p>
        <p className="mb-4">
          You are forbidden from violating, or attempting to violate, the
          security of our Website. You may use the Website only for lawful
          purposes and in accordance with these Terms. You must not use the
          Website for:
        </p>
        <ul className="list-inside list-disc space-y-3">
          <li>
            Violating any applicable federal, provincial, local, or
            international law or regulation.
          </li>
          <li>Logging into a server or account without authorization.</li>
          <li>
            Accessing data or attempting to obtain services not intended for you
            or your use.
          </li>
          <li>
            Attempting to probe, scan, or test the vulnerability of any system,
            subsystem, or network related to the Website or our computer
            systems.
          </li>
          <li>
            Tampering with, hacking, modifying, or otherwise corrupting or
            breaching security or authentication measures.
          </li>
          <li>
            Introducing or transmitting material containing viruses, Trojan
            horses, worms, time bombs, logic bombs, cancelbots, or other
            technologically malicious or harmful computer programming routines
            or engines with the intent or effect of damaging, destroying,
            disrupting, or otherwise impairing a computer&apos;s functionality
            or the Website&apos;s operation.
          </li>
          <li>
            Interfering with, intercepting, or expropriating any system, data,
            or information.
          </li>
          <li>
            Interfering with service to any user, host, or network, including,
            but not limited to, by means of overloading, &quot;flooding,&quot;
            &quot;mailbombing,&quot; or &quot;crashing&quot; any system,
            subsystem, or network related to the Website.
          </li>
          <li>
            Attacking the Website via a denial-of-service attack or a
            distributed denial-of-service attack.
          </li>
        </ul>
      </div>

      <div className="mt-10 space-y-8">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">
            Functionality Disclaimer
          </h2>
          <p className="leading-relaxed text-gray-700">
            To the extent permitted by law, we do not guarantee that the
            website&apos;s functions will be uninterrupted or error-free, that
            the website or its server will be free of viruses or other harmful
            components, or that defects will be corrected even if we are aware
            of them. You are responsible for configuring your information
            technology, computer programs, and platform to access our website,
            including implementing your own virus protection software.
          </p>
        </div>

        {/* Information Accuracy Disclaimer */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold">
            Information Accuracy Disclaimer
          </h2>
          <p className="leading-relaxed text-gray-700">
            The content on our Website is provided for general informational
            purposes only. It is not intended as professional advice on which
            you should rely. You must obtain professional or specialist advice
            before taking or refraining from any action based on the content on
            our Website. We make no representations, warranties, or guarantees,
            express or implied, that the content on the Website is accurate,
            complete, or up-to-date.
          </p>
        </div>
      </div>
    </div>
    
  );
}

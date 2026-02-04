import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-heading text-xl">Dr. Maya Reynolds, PsyD</h3>
              <div className="space-y-2 text-sm text-dark-lighter">
                <p>123th Street 45 W</p>
                <p>Santa Monica, CA 90401</p>
                <p className="mt-4">
                  <a href="mailto:hello@drmayareynolds.com" className="hover:opacity-70">
                    hello@drmayareynolds.com
                  </a>
                </p>
                <p>
                  <a href="tel:+1-424-555-0123" className="hover:opacity-70">
                    (424) 555-0123
                  </a>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-4">
              <h4 className="font-heading text-lg">Office Hours</h4>
              <div className="space-y-2 text-sm text-dark-lighter">
                <p>Monday – Thursday</p>
                <p>9:00 AM – 7:00 PM</p>
                <p className="mt-2">Friday</p>
                <p>9:00 AM – 5:00 PM</p>
                <p className="mt-3 text-xs italic">Telehealth & in-person sessions available</p>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-4 text-right">
              <h4 className="font-heading text-lg">Find</h4>
              <nav className="space-y-2 text-sm">
                <p>
                  <Link href="/" className="hover:opacity-70">
                    Home
                  </Link>
                </p>
                <p>
                  <Link href="/contact" className="hover:opacity-70">
                    Contact
                  </Link>
                </p>
                <p>
                  <Link href="/blog" className="hover:opacity-70">
                    Blog
                  </Link>
                </p>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-light py-8">
        <div className="container-custom">
          <div className="text-center space-y-4 text-sm">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/privacy-policy" className="hover:opacity-70">
                Privacy & Cookies Policy
              </Link>
              <Link href="/good-faith-estimate" className="hover:opacity-70">
                Good Faith Estimate
              </Link>
              <Link href="/terms-conditions" className="hover:opacity-70">
                Website Terms & Conditions
              </Link>
              <Link href="/disclaimer" className="hover:opacity-70">
                Disclaimer
              </Link>
            </div>
            <p>
              Website Design: Professional Therapy Website Template
            </p>
            <p className="text-xs">All Rights Reserved © 2024 Dr. Maya Reynolds, PsyD. Licensed Clinical Psychologist.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

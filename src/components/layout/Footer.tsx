import { FaTwitter, FaLinkedin, FaFacebook, FaDribbble } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-gray-900 px-14 text-gray-200 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {[
                "Blog",
                "Help Center",
                "Contact Support",
                "Release Notes",
                "Status",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {[
                "About Us",
                "Careers",
                "Legal",
                "Privacy",
                "Website Terms of Use",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <p className="text-sm mb-4">info@goabstract.com</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Social
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-700 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-800 transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-pink-600 transition-colors"
              >
                <FaDribbble size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-2xl font-bold mr-2">5</span>
            <span className="text-sm font-medium">Abstract</span>
          </div>
          <div className="text-sm text-gray-500 text-center md:text-left">
            <p>© Copyright 2025 Abstract Studio Design, Inc.</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

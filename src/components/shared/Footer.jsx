import Image from "next/image";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#ecffe8] py-16">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* LEFT SIDE - LOGO + ABOUT */}
          <div className="md:col-span-1">
            <div>
              <Image
                src={'/assets/logo-rbg.png'}
                alt="Logo"
                width={200}
                height={200}
              />
            </div>

            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              Book your favorite sports venues instantly.
              Football, cricket, badminton and more — all in one place.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold text-green-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About Us</li>
              <li>Blogs</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Partner With Us</li>
            </ul>
          </div>



          {/* PRIVACY */}
          <div>
            <h3 className="font-semibold text-green-900 mb-4">
              Privacy & Terms
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cancellation Policy</li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="font-semibold text-green-900 mb-4">Social</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-1"> <FaInstagram/> Instagram</li>
              <li className="flex items-center gap-1"> <CiFacebook /> Facebook</li>
              <li className="flex items-center gap-1"> <CiLinkedin /> LinkedIn</li>
              <li className="flex items-center gap-1"> <FaXTwitter /> Twitter</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM LINE */}
        <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Sportify. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className="py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left">
          {/* Address Section */}
          <div>
            <p className="text-sm text-gray-500 pt-[40px]">
              400 University Drive Suite 200 Coral<br />
              Gables<br /> FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div>
            <ul className="text-sm text-gray-700 space-y-4 lg:space-y-5">
              <li className="font-semibold">
                <Link href="#">Link</Link>
              </li>
              <li className="text-[#000000] font-semibold">
                <Link href="/">Home</Link>
              </li>
              <li className="text-[#000000] font-semibold">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="text-[#000000] font-semibold">
                <Link href="/account">Account</Link>
              </li>
              <li className="text-[#000000] font-semibold">
                <Link href="/product">Product</Link>
              </li>
              <li className="text-[#000000] font-semibold">
                <Link href="contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <ul className="text-sm text-gray-700 space-y-4 lg:space-y-5">
              <li className="font-semibold">Help</li>
              <li className="text-[#000000] font-semibold">Payment Options</li>
              <li className="text-[#000000] font-semibold">Returns</li>
              <li className="text-[#000000] font-semibold">Privacy Policies</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <p className="text-sm font-semibold text-gray-500 mb-4">Newsletter</p>
            <form className="flex flex-col lg:flex-row items-center lg:items-start gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="border-b-2 border-[#000000] lg:mt-[20px] focus:outline-none px-2 py-1 w-full lg:w-auto"
              />
              <button className="text-black px-4 border-b-2 lg:mt-[20px] border-[#000000] py-2 lg:py-1 rounded-md hover:bg-gray-800">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-10 lg:pt-[20px] text-sm text-gray-600 pl-[50px] border-t border-gray-300">
          <p className="pt-4">© 2022 Asia Parveen. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
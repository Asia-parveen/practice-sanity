import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosTime } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa"; // Correct imports for used icons
import ShopSlider from "../components/ShopSlider";

const ContactPage = () => {
  return (
    <>
      {/* Navigation Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-[40px] pt-4 md:pt-[60px] px-4">
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-center md:ml-[35%]">
          <Link href="/">
            <li className="text-[14px] md:text-[16px] font-semibold">Home</li>
          </Link>
          <Link href="/shop">
            <li className="text-[14px] md:text-[16px] font-semibold">Shop</li>
          </Link>
          <Link href="#">
            <li className="text-[14px] md:text-[16px] font-semibold">About</li>
          </Link>
          <Link href="/product">
            <li className="text-[14px] md:text-[16px] font-semibold">Products</li>
          </Link>
          <Link href="/">
            <li className="text-[14px] md:text-[16px] font-semibold">
              Contact
            </li>
          </Link>
        </ul>
      </div>

      {/* Banner Section */}
      <div className="relative w-full h-[350px] mt-[30px]">
        <Image
          src="/images/Group 43.png"
          alt="insta"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black px-4">
          <h1 className="text-[24px] md:text-[36px] font-bold">Contact</h1>
          <p className="opacity-[0.8] max-w-[600px] text-[16px] md:text-[18px] mt-2 font-semibold">
            Home - Contact
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="text-center md:pt-[40px]">
        <h1 className="text-[24px] md:text-[36px] font-semibold">
          Get In Touch With Us
        </h1>
        <p className="opacity-[0.5] max-w-[600px] mx-auto text-[14px] pt-[10px]">
          Find a bright ideal to suit your taste with our great selection of{" "}
          <br />
          suspension, floor, and table lights.
        </p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row justify-center items-start w-full lg:gap-[50px] px-4  py-8">
        {/* Address Section */}
        <div className="w-full lg:w-[20%] flex flex-col  space-y-8 lg:pl-[20px]">
          <div className="flex items-center text-center space-x-4">
            <IoLocationSharp className="text-xl text-gray-700" />
            <div>
              <h1 className="text-lg font-bold text-gray-800 mb-1">Address</h1>
              <p className="text-sm text-gray-600">
                236 5th SE Avenue,
                <br /> New York NY10000
                <br /> United States
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-xl text-gray-700" />
            <div>
              <h1 className="text-lg font-bold text-gray-800 mb-1">Phone</h1>
              <p className="text-sm text-gray-600">
                Mobile: 32343-54-54
                <br /> Hotline: 32343-54-54
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <IoIosTime className="text-xl text-gray-700" />
            <div>
              <h1 className="text-lg font-bold text-gray-800 mb-1">
                Working Time
              </h1>
              <p className="text-sm text-gray-600">
                Morning: 3 hours
                <br /> Evening: 3 hours
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-[40%] flex flex-col space-y-6 mt-8  lg:pb-[10px]">
          <label className="w-full">
            <span className="block text-sm font-medium mb-1">Your Name</span>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 lg:py-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </label>
          <label className="w-full">
            <span className="block text-sm font-medium mb-1">
              Email Address
            </span>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </label>
          <label className="w-full">
            <span className="block text-sm font-medium mb-1">Subject</span>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </label>
          <label className="w-full">
            <span className="block text-sm font-medium mb-1">Your Message</span>
            <textarea
              placeholder="Hi, I would like to ask you..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
              rows={5}
            ></textarea>
          </label>
          <button className="w-[170px] h-[40px] border-2 border-gray-300 text-gray-500 font-semibold rounded-lg">
            Submit
          </button>
        </div>
      </div>
      <ShopSlider/>
    </>
  );
};

export default ContactPage;
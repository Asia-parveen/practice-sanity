import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Insta = () => {
  return (
    <>
      <div className="relative w-full h-[450px]">
        {/* Background Image */}
        <Image
          src="/images/Group 43.png"
          alt="insta"
          layout="fill" // Fills the parent container
          objectFit="cover" // Ensures the image covers the container
          className="object-cover"
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#000000]px-4">
          <h1 className="text-[24px] md:text-[36px] font-bold">Our Instagram</h1>
          <p className="opacity-[0.8] max-w-[600px] text-[16px] md:text-[18px] mt-2">
            Follow our store on Instagram
          </p>
          <button className="mt-7 px-[50px] py-[16px] rounded-full shadow-2xl bg-[#FAFAFA]  text-black font-semibold hover:bg-[#000000] hover:text-white">
          <Link href= "https://www.linkedin.com/in/asia-parveen-258a952a7/">Follow Us</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Insta;
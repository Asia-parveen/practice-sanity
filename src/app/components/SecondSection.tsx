import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SecondSection = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 lg:gap-0 lg:py-[60px] bg-[#FAFAFA] p-4 lg:p-0">
        {/* First Image */}
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center">
          <Image
            src="/images/smptb.png"
            alt="Group 9"
            width={480}
            height={400}
            className="w-[480px] h-[400px] object-cover sm:w-[80%] md:w-[90%] lg:w-[480px]"
          />
          <div className="text-left mt-4 sm:mt-6 sm:ml-0 ml-2">
            <h1 className="font-semibold text-2xl sm:text-2xl lg:text-3xl">Side Table</h1>
            <Link href="/shop" passHref>
              <p className="text-[14px] md:text-[16px] font-semibold text-[#000000] inline-block relative mt-2">
                View More
                <span className="block w-full h-[2px] bg-black mt-1"></span>
              </p>
            </Link>
          </div>
        </div>

        {/* Second Image */}
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center">
          <Image
            src="/images/bigsofs.png"
            alt="Group 8"
            width={480}
            height={400}
            className="w-[480px] h-[400px] object-cover pt-[50px] lg:pt-0 sm:w-[80%] md:w-[90%] lg:w-[480px]"
          />
          <div className="text-left mt-0 lg:mt-4 sm:mt-6 sm:ml-0 ml-2">
            <h1 className="font-semibold text-2xl sm:text-2xl lg:text-3xl">Side Table</h1>
            <Link href="/shop" passHref>
              <p className="text-[14px] md:text-[16px] font-semibold text-[#000000] inline-block relative mt-2">
                View More
                <span className="block w-full h-[2px] bg-black mt-1"></span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondSection;
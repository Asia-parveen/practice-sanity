import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TopSection = () => {
  // Product data array
  const products = [
    {
      id: 1,
      image: '/images/murha.png',
      name: 'Trenton modular sofa_1',
      price: 'Rs. 25,000.00',
    },
    {
      id: 2,
      image: '/images/chair 1.png',
      name: 'Trenton modular sofa_2',
      price: 'Rs. 28,000.00',
    },
    {
      id: 3,
      image: '/images/Mask group (5).png',
      name: 'Trenton modular sofa_3',
      price: 'Rs. 30,000.00',
    },
    {
      id: 4,
      image: '/images/chair3.png',
      name: 'Trenton modular sofa_4',
      price: 'Rs. 32,000.00',
    },
  ];

  return (
    <>
      {/* Heading Section */}
      <div className="text-center pt-[40px]">
        <h1 className="text-center text-[24px] md:text-[36px] font-semibold">Top Picks For You</h1>
        <p className="opacity-[0.5] max-w-[600px] mx-auto text-[14px] mt-[10px]">
          Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
      </div>

      {/* Product Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 px-4 pb-[80px]">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`flex flex-col items-center p-4 ${
              index === 0 ? 'lg:mt-[20px]' : ''
            }`} // Adjust margin for the first image
            style={{ width: '300px', height: '300px' }} // Fixed width and height
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="object-cover"
            />
            <p className="mt-4 lg:mt-0 text-sm text-[14px] opacity-[0.6] font-semibold">{product.name}</p>
            <h2 className="text-lg font-semibold opacity-[0.8]">{product.price}</h2>
          </div>
        ))}
        <Link href="#">
          <p className="text-[14px] md:text-[18px] font-semibold text-[#000000] inline-block lg:pt-8 text-center">
           <Link href="/product"> View More</Link>
            <span className="block w-full h-[2px] bg-black mt-1 opacity-[0.7]"></span>
          </p>
        </Link>
      </div>
    </>
  );
};

export default TopSection;
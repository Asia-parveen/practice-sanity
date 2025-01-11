'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ShopTop = () => {
  const products = [
    {
      id: 1,
      image: '/images/Mask group.png',
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
    {
      id: 5,
      image: '/images/Mask group (2).png',
      name: 'Trenton modular sofa_5',
      price: 'Rs. 25,000.00',
    },
    {
      id: 6,
      image: '/images/tb1.png',
      name: 'Trenton modular sofa_6',
      price: 'Rs. 28,000.00',
    },
    {
      id: 7,
      image: '/images/Mask group (1).png',
      name: 'Trenton modular sofa_7',
      price: 'Rs. 30,000.00',
    },
    {
      id: 8,
      image: '/images/lsttb.png',
      name: 'Trenton modular sofa_8',
      price: 'Rs. 32,000.00',
    },
    {
      id: 9,
      image: '/images/smptb.png',
      name: 'Trenton modular sofa_9',
      price: 'Rs. 25,000.00',
    },
    {
      id: 10,
      image: '/images/sidtb.png',
      name: 'Trenton modular sofa_10',
      price: 'Rs. 28,000.00',
    },
    {
      id: 11,
      image: '/images/grdntb.png',
      name: 'Trenton modular sofa_11',
      price: 'Rs. 30,000.00',
    },
    {
      id: 12,
      image: '/images/Mask group (7).png',
      name: 'Trenton modular sofa_12',
      price: 'Rs. 32,000.00',
    },
    {
      id: 13,
      image: '/images/smptb.png',
      name: 'Trenton modular sofa_13',
      price: 'Rs. 25,000.00',
    },
    {
      id: 14,
      image: '/images/sofaset.png',
      name: 'Trenton modular sofa_14',
      price: 'Rs. 28,000.00',
    },
    {
      id: 15,
      image: '/images/lrgsofa.png',
      name: 'Trenton modular sofa_15',
      price: 'Rs. 30,000.00',
    },
    {
      id: 16,
      image: '/images/Outdoor.png',
      name: 'Trenton modular sofa_16',
      price: 'Rs. 32,000.00',
    },
  ];


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:my-[40px] lg:grid-cols-4 gap-6 px-4 pb-[80px]">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/shop/${product.id}`}
          className="flex flex-col items-center p-4 cursor-pointer"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover rounded-lg"
          />
          <p className="mt-4 text-sm text-gray-600 font-semibold">{product.name}</p>
          <h2 className="text-lg font-bold text-gray-800">{product.price}</h2>
        </Link>
      ))}
    </div>
  );
};

export default ShopTop;
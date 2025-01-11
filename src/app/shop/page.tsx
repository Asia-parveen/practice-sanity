
"use client";


import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import Slider from '../components/Slider';
import ShopTop from '../components/ShopTop';
import ShopSlider from '../components/ShopSlider';


const ShopPage = () => {
  


  return (
    <div>
          <div className='flex flex-col md:flex-row  items-center  w-full h-auto md:h-[40px] pt-4 md:pt-[60px] px-4 md:gap-[10rem]'>
        {/* Center section with links */}
        <ul className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-center md:ml-[20%] '>
          <Link href="/"><li className='text-[14px] md:text-[18px] font-semibold hover:text-gray-400'>Home</li></Link>
          <Link href="/shop"><li className='text-[14px] md:text-[18px] font-semibold hover:text-gray-400'>Shop</li></Link>
          <Link href="/blog"><li className='text-[14px] md:text-[18px] font-semibold hover:text-gray-400'>Blog</li></Link>
          <Link href="/product"><li className='text-[14px] md:text-[18px] font-semibold hover:text-gray-400'>Products</li></Link>
          <Link href="/contact"><li className='text-[14px] md:text-[18px] font-semibold hover:text-gray-400'>Contact</li></Link>
        </ul>

        {/* Right section with icons */}
        <div className='flex justify-center space-x-4 md:space-x-6 mt-4 md:mt-0 text-[14px] md:text-[16px] font-bold'>
        <Link href="account"><FaRegUser className="text-base md:text-lg hover:text-gray-400" /></Link>
         <Link href="/product"><IoSearch className="text-base md:text-lg hover:text-gray-400" /></Link>
          <FaRegHeart className="text-base md:text-lg hover:text-gray-400" />
         <Link href="/cart"><MdOutlineShoppingCart className="text-base md:text-lg hover:text-gray-400" /></Link>
        </div>
      </div>
      <div className="relative w-full h-[350px] mt-[30px]">
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
          <h1 className="text-[24px] md:text-[36px] font-bold">Shop</h1>
          <p className="opacity-[0.8] max-w-[600px] text-[16px] md:text-[18px] mt-2 font-semibold">
            Home - Shop
          </p>
         
        </div>
        
      </div>
      
      <Slider/>
      <ShopTop/>
      <ShopSlider/>

    </div>
  )
}

export default ShopPage;
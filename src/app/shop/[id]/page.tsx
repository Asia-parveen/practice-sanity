
"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import TopSection from "../../components/TopSection";
import Link from "next/link";

const ProductDetailPage = () => {
  const { id } = useParams();

  const products = [
    {
      id: "1",
      image: "/images/bigsofs.png",
      name: "Trenton modular sofa_1",
      price: "Rs. 25,000.00",
      description:
        "Setting the bar as one of the loudest speakers in its class the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "2",
      image: "/images/chair 1.png",
      name: "Trenton modular sofa_2",
      price: "Rs. 28,000.00",
      description:
        "Setting the bar as one of the loudest speakers in its class the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "3",
      image: '/images/Mask group (5).png',
      name: 'Trenton modular sofa_3',
      price: 'Rs. 30,000.00',
      description:
        "Setting the bar as one of the loudest speakers in its class the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "4",
      image: '/images/chair3.png',
      name: 'Trenton modular sofa_4',
      price: 'Rs. 32,000.00',
      description:
        "Setting the bar as one of the loudest speakers in its class the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "5",
      image: '/images/Mask group (2).png',
      name: 'Trenton modular sofa_5',
      price: 'Rs. 25,000.00',
      description:
        "Setting the bar as one of the loudest speakers in its class the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "6",
      image: '/images/tb1.png',
      name: 'Trenton modular sofa_6',
      price: 'Rs. 28,000.00',
      description:
        "Setting the bar as one of the loudest speakers in its class the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "7",
      image: '/images/Mask group (1).png',
      name: 'Trenton modular sofa_7',
      price: 'Rs. 30,000.00',
      description:
        "Setting the bar as one of the loudest speakers in its class the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "8",
      image: '/images/lsttb.png',
      name: 'Trenton modular sofa_8',
      price: 'Rs. 32,000.00',
      description:
        "Setting the bar as one of the loudest speakers in its class the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "9",
      image: '/images/smptb.png',
      name: 'Trenton modular sofa_9',
      price: 'Rs. 25,000.00',
      description:
        "Setting the bar as one of the loudest speakers in its class the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "10",
      image: '/images/sidtb.png',
      name: 'Trenton modular sofa_10',
      price: 'Rs. 28,000.00',
      description:
        "Setting the bar as one of the loudest speakers in its class the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "11",
      image: '/images/grdntb.png',
      name: 'Trenton modular sofa_11',
      price: 'Rs. 30,000.00',
      description:
        "Setting the bar as one of the loudest speakers in its class the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "12",
      image: '/images/Mask group (7).png',
      name: 'Trenton modular sofa_12',
      price: 'Rs. 32,000.00',
      description:
        "Setting the bar as one of the loudest speakers in its class the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "13",
      image: '/images/smptb.png',
      name: 'Trenton modular sofa_13',
      price: 'Rs. 25,000.00',
      description:
        "Setting the bar as one of the loudest speakers in its class the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "14",
      image: '/images/sofaset.png',
      name: 'Trenton modular sofa_14',
      price: 'Rs. 28,000.00',
      description:
        "Setting the bar as one of the loudest speakers in its class the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "15",
      image: '/images/lrgsofa.png',
      name: 'Trenton modular sofa_15',
      price: 'Rs. 30,000.00',
      description:
        "Setting the bar as one of the loudest speakers in its class the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "16",
      image: '/images/Outdoor.png',
      name: 'Trenton modular sofa_16',
      price: 'Rs. 32,000.00',
      description:
        "Setting the bar as one of the loudest speakers in its class the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
  ];

  const product = products.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  if (!product) {
    console.error("Product not found for ID:", id);
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4 max-screed-w-2xl text-center">

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
      <div className=" flex gap-[20px]  mt-[50px] lg:ml-[60px]">
        <p className="opacity-[0.5]">Home {">"}</p>
        <p className="opacity-[0.5]">Shop {">"}</p>
        {"|"}
        <h2 className="font-semibold">Asgaard sofa</h2>

      </div>
  
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 mt-10 lg:mt-[80px]">
  {/* Left Column: Small Images + Large Image */}
  <div className="flex  lg:flex-row gap-4 lg:gap-0 lg:w-[60%] w-full">
    {/* Small Images (150px by 150px) - Displayed Vertically */}
    <div className="flex flex-col gap-4 lg:gap-0  lg:w-1/4 lg:ml-[40px]">
      <Image
        src={product.image}
        alt="Small Image 1"
        width={150}
        height={150}
        className="object-cover bg-[#FFF9E5] rounded-lg mb-[20px]"
      />
      <Image
        src={product.image}
        alt="Small Image 2"
        width={150}
        height={150}
        className="object-cover bg-[#FFF9E5] rounded-lg mb-[20px]"
      />
      <Image
        src={product.image}
        alt="Small Image 3"
        width={150}
        height={150}
        className="object-cover bg-[#FFF9E5] rounded-lg"
      />
    </div>

    {/* Large Image (400px by 500px) */}
    <div className="flex justify-center lg:w-3/4 ">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={500}
        className="object-cover bg-[#FFF9E5] rounded-lg"
      />
    </div>
  </div>

  {/* Right Column with Product Details */}
  <div className="w-full lg:w-1/4 flex flex-col gap-6 items-start lg:mt-0 mt-6">
    <h1 className="text-2xl font-bold">{product.name}</h1>
    <p className="text-xl font-semibold mt-2 opacity-[0.5]">{product.price}</p>

    {/* 5 Yellow Stars */}
    <div className="flex justify-center space-x-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className="w-5 h-5 text-yellow-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>

    {/* Description */}
    <p className="text-gray-700 mt-2 text-justify lg:pt-[20px]">{product.description}</p>

    {/* Quantity Selector */}
    <div className="flex items-center mt-4 space-x-4">
      Size:<br />
      <button
        onClick={handleDecrement}
        className="bg-gray-200 px-4 py-2 rounded"
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={handleIncrement}
        className="bg-gray-200 px-4 py-2 rounded"
      >
        +
      </button>
    </div>

    {/* Color Options (3 Dots) */}
    <div className="mt-4 flex space-x-2 justify-center">
      Colors:<br />
      <span className="w-4 h-4 bg-[#816DFA] rounded-full cursor-pointer"></span>
      <span className="w-4 h-4 bg-[#000000] rounded-full cursor-pointer"></span>
      <span className="w-4 h-4 bg-[#CDBA7B] rounded-full cursor-pointer"></span>
    </div>
  </div>
</div>

      <hr className="mt-[50px] text-gray-500"></hr>
      <div className="flex flex-col lg:flex-row lg:gap-8 text-center items-center mt-[40px] lg:mt-[60px] lg:ml-[30%]">
  <h1 className="text-[18px] lg:text-[22px] font-semibold">Description</h1>
  <h1 className="opacity-[0.5] text-[18px] lg:text-[22px] font-semibold mt-2 lg:mt-0">Additional Information</h1>
  <h1 className="opacity-[0.5] text-[18px] lg:text-[22px] font-semibold mt-2 lg:mt-0">Reviews [5]</h1>
</div>

<div className="w-[90%] lg:w-[67%] mx-auto lg:ml-[20%] my-[20px] lg:my-[30px] opacity-[0.6] text-justify">
  <p>
    Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
  </p>
  <br />
  <p>
    Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
  </p>
</div>

<div className="flex flex-col lg:flex-row lg:gap-4 lg:ml-[5%] text-center mx-auto mt-[30px] lg:mt-[50px] w-[90%] lg:w-[75%] ">
  <Image
    src="/images/img1.png"
    alt="sofa"
    width={520}
    height={480}
    className="w-full "
  />
  <Image
    src="/images/img2.png"
    alt="sofa"
    width={520}
    height={480}
    className="w-full mt-4 lg:mt-0"
  />
</div>

      <hr className="mt-[50px] text-gray-500"></hr>
      {/* <div className=" mx-auto mt-[50px] text-center">
        <h1 className="text-[30px] text-[#000000] font-bold">Realted Products</h1>
      </div> */}
      <TopSection/>
    </div>

  );
};

export default ProductDetailPage;
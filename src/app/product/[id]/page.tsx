import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from 'next/link';

// Sanity client setup
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Replace with your dataset name
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Image URL builder
const builder = imageUrlBuilder(client);
const urlFor = (source: string) => builder.image(source);

export type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
};

const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
  const productId = params.id;

  // Fetch product data
  const product = await client.fetch(
    `*[_type == "product" && _id == $id][0]`,
    { id: productId }
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  const mainImageUrl = urlFor(product.image).width(500).height(680).url();
  const thumbnailUrl = urlFor(product.image).width(150).height(150).url();

  return (
    <div >
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
          <h1 className="text-[24px] md:text-[36px] font-bold">Product Details</h1>
          <p className="opacity-[0.8] max-w-[600px] text-[16px] md:text-[18px] mt-2 font-semibold">
            Product - Details
          </p>
         
        </div>
        
      </div>
      {/* Two-column layout */}
     <div className='max-w-screen-2xl lg: mx-[120px] md: my-[50px]'>
     <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-3">
        {/* Left Column - Images */}
        <div className="md:col-span-3 flex space-x-6 lg:space-x-8">
          {/* Small Images - Vertically aligned */}
          <div className="flex flex-col space-y-4">
            <Image
              src={thumbnailUrl}
              alt={`${product.title} Thumbnail 1`}
              width={150}
              height={150}
              className="rounded-lg shadow-md object-cover"
            />
            <Image
              src={thumbnailUrl}
              alt={`${product.title} Thumbnail 2`}
              width={150}
              height={150}
              className="rounded-lg shadow-md object-cover"
            />
            <Image
              src={thumbnailUrl}
              alt={`${product.title} Thumbnail 3`}
              width={150}
              height={150}
              className="rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Large Image */}
          <div className="flex flex-col items-center ">
            <Image
              src={mainImageUrl}
              alt={product.title}
              width={350}
              height={380}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="md:col-span-2 flex flex-col justify-center space-y-6 mt-4 md:mt-0">
          {/* Product Title */}
          <h1 className="text-4xl font-bold text-[#000000]">{product.name}</h1>

          {/* Product Price */}
          <p className="text-3xl font-semibold text-[#B88E2F]">${product.price.toFixed(2)}</p>

          {/* Stars Rating */}
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="text-yellow-500">★</span>
            ))}
          </div>

          {/* Product Description */}
          <p className="text-lg text-gray-600">{product.description}</p>

          {/* Color Options (Circles for color selection) */}
          <div className="flex space-x-3"><p>Colors:</p>
            <span className="w-6 h-6 rounded-full bg-[#816DFA] cursor-pointer"></span>
            <span className="w-6 h-6 rounded-full bg-[#000000] cursor-pointer"></span>
            <span className="w-6 h-6 rounded-full bg-[#CDBA7B] cursor-pointer"></span>
          </div>

          {/* Add to Cart Button */}
          <button
            className="px-6 py-3 border border-gray-700 text-[#000000] font-medium rounded-lg hover:bg-[#000000] hover:text-white transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
     </div>
    </div>
  );
};

export default ProductDetailPage;









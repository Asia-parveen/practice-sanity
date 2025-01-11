import { createClient } from '@sanity/client';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegUser } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa6';
import ProductCard from '../components/ProductList'; 
import CartIcon from '../components/CartIcon';
import { Product } from '../components/ProductList';  // Import Product type

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const ProductPage = async () => {
  const product = await client.fetch(
    `*[_type == "product"]{
      _id, // Fetch _id for the key
      name,
      description,
      price,
      discountPercentage,
      priceWithoutDiscount,
      rating,
      ratingCount,
      tags,
      sizes,
      "imageUrl": image.asset->url
    }`
  );

  if (product.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="px-4 py-8 lg:my-[50px] lg:mt-0 mx-auto md:mx-0 md:w-full">
      <div className="flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-[40px] pt-4 px-4 fixed top-0 z-30">
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-center md:ml-[35%]">
          <Link href="/">
            <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">Home</li>
          </Link>
          <Link href="/shop">
            <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">Shop</li>
          </Link>
          <Link href="/account">
            <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">Account</li>
          </Link>
          <Link href="/contact">
            <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">Contact</li>
          </Link>
          <CartIcon/>
        </ul>
        <div className="flex justify-center space-x-4 md:space-x-6 mt-4 md:mt-0 md:mr-[200px] text-[14px] md:text-[16px] font-bold">
          <FaRegUser className="text-base md:text-lg hover:text-gray-400" />
          <IoSearch className="text-base md:text-lg hover:text-gray-400" />
          <Link href="/blog">
            <FaRegHeart className="text-base md:text-lg hover:text-gray-400" />
          </Link>
        </div>
      </div>
      <div className="relative w-full h-[250px] md:h-[350px] mt-[30px]">
        <Image
          src="/images/Group 43.png"
          alt="insta"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#000000] px-4 md:px-0">
          <h1 className="text-[20px] md:text-[36px] font-bold">Our Products</h1>
          <p className="opacity-[0.8] max-w-[600px] text-[14px] md:text-[18px] mt-2 font-semibold">
            Home - Products
          </p>
        </div>
      </div>
      <div className="grid gap-y-8 gap-x-6 lg:gap-x-8 lg:gap-y-12 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:my-[30px]">
        {product.map((product: Product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;





// import { createClient } from '@sanity/client';
// import Image from 'next/image';
// import Link from 'next/link';
// import { FaRegUser } from 'react-icons/fa6';
// import { IoSearch } from 'react-icons/io5';
// import { FaRegHeart } from 'react-icons/fa6';
// import ProductCard from '../components/ProductList'; 
// import CartIcon from '../components/CartIcon';
// import { Product } from '../components/ProductList';

// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   token: process.env.SANITY_API_TOKEN,
//   useCdn: false,
// });

// export type Product = {
//   _id: string;
//   name: string;
//   description?: string; // Make description optional
//   price: number;
//   discountPercentage: number;
//   priceWithoutDiscount: number;
//   rating: number;
//   ratingCount: number;
//   tags: string[];
//   sizes: string[];
//   imageUrl?: string;
// };



// const ProductPage = async () => {
//   const product = await client.fetch(
//     `*[_type == "product"]{
//       _id, // Fetch _id for the key
//       name,
//       description,
//       price,
//       discountPercentage,
//       priceWithoutDiscount,
//       rating,
//       ratingCount,
//       tags,
//       sizes,
//       "imageUrl": image.asset->url
//     }`
//   );

//   if (product.length === 0) {
//     return <p>No products available.</p>;
//   }

//   return (
//     <div className="px-4 py-8 lg:my-[50px] lg:mt-0 mx-auto md:mx-0 md:w-full">
//       <div className="flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-[40px] pt-4 px-4 fixed top-0 z-30">
//         <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-center md:ml-[35%]">
//           <Link href="/">
//             <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">Home</li>
//           </Link>
//           <Link href="/shop">
//             <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">Shop</li>
//           </Link>
//           <Link href="/account">
//             <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">Account</li>
//           </Link>
//           <Link href="/contact">
//             <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">Contact</li>
//           </Link>
//           <CartIcon/>
//         </ul>
//         <div className="flex justify-center space-x-4 md:space-x-6 mt-4 md:mt-0 md:mr-[200px] text-[14px] md:text-[16px] font-bold">
//           <FaRegUser className="text-base md:text-lg hover:text-gray-400" />
//           <IoSearch className="text-base md:text-lg hover:text-gray-400" />
//           <Link href="/blog">
//             <FaRegHeart className="text-base md:text-lg hover:text-gray-400" />
//           </Link>
//         </div>
//       </div>
//       <div className="relative w-full h-[250px] md:h-[350px] mt-[30px]">
//         <Image
//           src="/images/Group 43.png"
//           alt="insta"
//           layout="fill"
//           objectFit="cover"
//           className="object-cover"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#000000] px-4 md:px-0">
//           <h1 className="text-[20px] md:text-[36px] font-bold">Our Products</h1>
//           <p className="opacity-[0.8] max-w-[600px] text-[14px] md:text-[18px] mt-2 font-semibold">
//             Home - Products
//           </p>
//         </div>
//       </div>
//       <div className="grid gap-y-8 gap-x-6 lg:gap-x-8 lg:gap-y-12 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:my-[30px]">
//         {product.map((product: Product) => (
//           <ProductCard key={product._id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;

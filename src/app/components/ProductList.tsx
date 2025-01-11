"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

// In ProductList.tsx
export type Product = {
  _id: string;
  name: string;
  description?: string;
  price: number;
  discountPercentage?: number;
  priceWithoutDiscount?: number;
  rating?: number;
  ratingCount?: number;
  tags?: string[];
  sizes?: string[];
  colors?: string[];
  imageUrl: string;
};

const ProductList = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const [currentInventory, setCurrentInventory] = useState<number>(5); // Inventory simulation

  const handleAddToCart = () => {
    if (currentInventory > 0) {
      setCurrentInventory(currentInventory - 1);
      addToCart({
        id: product._id,
        title: product.name,
        price: product.price,
        image: product.imageUrl,
        quantity: 1,
        colors: product.colors || [], // Handle undefined colors
      });
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform lg:my-[20px]">
      {/* Adjust image display */}
      <div className="relative w-full h-56">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width="140"
          height="90"

         
          className="objectFit cover fill "
        />
        
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold truncate">{product.name}</h2>
        <p className="text-gray-600 font-medium mt-2">${product.price.toFixed(2)}</p>

        {/* Display Colors */}
        {product.colors && product.colors.length > 0 && (
          <div className="mt-3">
            <span className="text-md font-medium">Colors:</span>
            <div className="flex mt-1 space-x-2">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: color }}
                  title={color}
                ></div>
              ))}
            </div>
          </div>
        )}

        {/* Display Sizes */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="mt-3">
            <span className="text-md font-medium">Sizes:</span>
            <div className="flex mt-1 space-x-2">
              {product.sizes.map((size, index) => (
                <span
                  key={index}
                  className="px-2 py-1 border rounded-md text-sm font-medium"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Display Inventory */}
        <div className="mt-3">
          <span className="text-md font-medium text-green-700">Inventory: </span>
          <span className="text-green-700">{currentInventory}</span>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <Link href={`/product/${product._id}`}>
            <span className="text-md text-blue-900 hover:underline font-semibold">
              View More
            </span>
          </Link>
          <button
            className="px-5 py-1 border border-gray-700 text-black rounded-md hover:bg-[#000000] hover:text-white hover:border-none"
            onClick={handleAddToCart}
            disabled={currentInventory <= 0}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;




// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "../../context/CartContext";
// import { useState } from "react";

// // In ProductList.tsx
// export type Product = {
//   _id: string;
//   name: string;
//   description?: string; // Allow description to be undefined
//   price: number;
//   discountPercentage?: number;
//   priceWithoutDiscount?: number;
//   rating?: number;
//   ratingCount?: number;
//   tags?: string[];
//   sizes?: string[];
//   colors?: string[];
//   imageUrl: string;
// };


// const ProductList = ({ product }: { product: Product }) => {
//   const { addToCart } = useCart();
//   const [currentInventory, setCurrentInventory] = useState<number>(5); // Inventory simulation

//   const handleAddToCart = () => {
//     if (currentInventory > 0) {
//       setCurrentInventory(currentInventory - 1);
//       addToCart({
//         id: product._id,
//         title: product.name,
//         price: product.price,
//         image: product.imageUrl,
//         quantity: 1,
//         colors: product.colors || [], // Handle undefined colors
//       });
//     }
//   };

//   return (
//     <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform lg:my-[20px]">
//       <Image
//         src={product.imageUrl}
//         alt={product.name}
//         width={150}
//         height={200}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-3">
//         <h2 className="text-base font-semibold truncate">{product.name}</h2>
//         <p className="text-gray-600 font-medium mt-1">${product.price.toFixed(2)}</p>

//         {/* Display Colors */}
//         {product.colors && product.colors.length > 0 && (
//           <div className="mt-2">
//             <span className="text-md font-medium">Colors:</span>
//             <div className="flex mt-1 space-x-2">
//               {product.colors.map((color, index) => (
//                 <div
//                   key={index}
//                   className="w-3 h-3 rounded-full"
//                   style={{ backgroundColor: color }}
//                   title={color}
//                 ></div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Display Sizes */}
//         {product.sizes && product.sizes.length > 0 && (
//           <div className="mt-2">
//             <span className="text-md font-medium">Sizes:</span>
//             <div className="flex mt-1 space-x-2">
//               {product.sizes.map((size, index) => (
//                 <span
//                   key={index}
//                   className="px-2 py-1 border rounded-md text-sm font-medium"
//                 >
//                   {size}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Display Inventory */}
//         <div className="mt-2">
//           <span className="text-md font-medium text-green-700">Inventory: </span>
//           <span className="text-green-700">{currentInventory}</span>
//         </div>

//         <div className="mt-3 flex justify-between items-center">
//           <Link href={`/product/${product._id}`}>
//             <span className="text-md text-blue-900 hover:underline font-semibold">
//               View More
//             </span>
//           </Link>
//           <button
//             className="px-5 py-1 border border-gray-700 text-black rounded-md hover:bg-[#000000] hover:text-white hover:border-none"
//             onClick={handleAddToCart}
//             disabled={currentInventory <= 0}
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductList;

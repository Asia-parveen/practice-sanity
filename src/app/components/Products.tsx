// "use client";

// import { useEffect, useState } from 'react';

// // Define the interface for product data
// interface Product {
//   name: string;
//   price: number;
//   discountPercentage: number;
//   priceWithoutDiscount: number;
//   rating: number;
//   ratingCount: number;
//   tags: string[];
//   sizes: string[];
//   imageUrl?: string; // Optional field
// }

// export default function Products() {
//   // Use the Product[] type for the state
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('/api/products'); // Fetch data from API route
//         const data: Product[] = await response.json(); // Type the fetched data
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Products</h1>
//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//           gap: '20px',
//         }}
//       >
//         {products.map((product) => (
//           <div
//             key={product.name} // Ensure name is unique or use a unique field like product ID
//             style={{
//               border: '1px solid #ccc',
//               borderRadius: '10px',
//               overflow: 'hidden',
//               boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//               textAlign: 'center',
//               backgroundColor: '#fff',
//             }}
//           >
//             {product.imageUrl && (
//               <img
//                 src={product.imageUrl}
//                 alt={product.name}
//                 style={{
//                   width: '100%',
//                   height: '200px',
//                   objectFit: 'cover',
//                 }}
//               />
//             )}
//             <div style={{ padding: '15px' }}>
//               <h2 style={{ fontSize: '18px', margin: '10px 0' }}>
//                 {product.name}
//               </h2>
//               <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
//                 Price: ${product.price.toFixed(2)}
//               </p>
//               <p style={{ fontSize: '14px', color: '#666' }}>
//                 Discount: {product.discountPercentage}%
//               </p>
//               <p style={{ fontSize: '14px', color: '#666' }}>
//                 Original Price: ${product.priceWithoutDiscount.toFixed(2)}
//               </p>
//               <p style={{ fontSize: '14px', color: '#666' }}>
//                 Rating: {product.rating} ({product.ratingCount} reviews)
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }











"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";

// Define types for cart items
interface CartItem {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<string>(""); // Track the selected payment method
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [isOrderPlaced, setIsOrderPlaced] = useState<boolean>(false); // Track order placement status

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const items = query.get("cartItems");
    const total = query.get("totalAmount");

    if (items) {
      setCartItems(JSON.parse(items));
    }
    if (total) {
      setTotalAmount(parseFloat(total));
    }
  }, []);

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleCardDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Payment method:", paymentMethod);
    console.log("Card details:", cardDetails);

    setIsOrderPlaced(true);
    setTimeout(() => setIsOrderPlaced(false), 3000);

    setTimeout(() => {
      window.location.href = "/ship"; // Ensure the path matches your tracking page route
    }, 3000);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-[40px] pt-4 md:pt-[60px] px-4">
        {/* Center section with links */}
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-center md:ml-[35%]">
          <Link href="/">
            <li className="text-[14px] md:text-[18px] font-semibold">Home</li>
          </Link>
          <Link href="/shop">
            <li className="text-[14px] md:text-[18px] font-semibold">Shop</li>
          </Link>
          <Link href="/blog">
            <li className="text-[14px] md:text-[18px] font-semibold">Blog</li>
          </Link>
          <Link href="/contact">
            <li className="text-[14px] md:text-[18px] font-semibold">Contact</li>
          </Link>
        </ul>

        {/* Right section with icons */}
        <div className="flex justify-center space-x-4 md:space-x-6 mt-4 md:mt-0 md:mr-[200px] text-[14px] md:text-[16px] font-bold">
          <Link href="/account">
            <FaRegUser className="text-base md:text-lg hover:opacity-[0.5]" />
          </Link>
          <Link href="/product">
            <IoSearch className="text-base md:text-lg hover:opacity-[0.5]" />
          </Link>
          <Link href="/">
            <FaRegHeart className="text-base md:text-lg hover:opacity-[0.5]" />
          </Link>
          <Link href="/cart">
            <IoCartOutline className="text-base md:text-lg hover:opacity-[0.5]" />
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
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#000000] px-4">
          <h1 className="text-[20px] md:text-[36px] font-semibold">CheckOut</h1>
          <p className="opacity-[0.8] max-w-[600px] text-[14px] md:text-[18px] mt-2 font-semibold">
            Home - CheckOut
          </p>
        </div>
      </div>

      <div className="container mx-auto p-6 md:pt-[30px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>
            <div className="space-y-6">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start p-4 bg-[#FFF9E5] rounded-lg shadow-md"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="rounded-md object-cover"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-600">Price: ${item.price}</p>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                      <p className="text-lg font-semibold mt-2 text-[#B88E2F]">
                        Total: ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 font-semibold">Your cart is empty.</p>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#FFF9E5] p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold">${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-[#B88E2F]">${totalAmount.toFixed(2)}</span>
              </div>
            </div>

            {/* Billing Details */}
            <div className="p-6 rounded-lg shadow-md bg-[#FFF9E5]">
              <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-600 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    required
                  />
                </div>
                {/* <div className="mb-4">
                  <label className="block text-gray-600 font-medium mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    required
                  />
                </div> */}
                <div className="mb-4">
                  <label className="block text-gray-600 font-medium mb-2">
                    Payment Method
                  </label>
                  <select
                    value={paymentMethod}
                    onChange={handlePaymentMethodChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  >
                    <option value="">Select Payment Method</option>
                    <option value="creditCard">Credit/Debit Card</option>
                    <option value="paypal">PayPal</option>
                  </select>
                </div>
                {paymentMethod === "creditCard" && (
                  <div>
                    <div className="mb-4">
                      <label className="block text-gray-600 font-medium mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="Enter your card number"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        required
                        onChange={handleCardDetailsChange}
                      />
                    </div>
                    <div className="mb-4 flex space-x-4">
                      <div>
                        <label className="block text-gray-600 font-medium mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          placeholder="MM/YY"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2"
                          required
                          onChange={handleCardDetailsChange}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-600 font-medium mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          placeholder="Enter CVV"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2"
                          required
                          onChange={handleCardDetailsChange}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <button
                  type="submit"
                  className="bg-[#B88E2F] text-white px-6 py-3 rounded-lg w-full font-semibold"
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {isOrderPlaced && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
          <div className=" p-6 rounded-lg text-center bg-green-300">
            <h2 className="text-xl font-bold mb-4">Order Placed Successfully!</h2>
            <p>Redirect to shipping Page</p>
          </div>

        </div>
      )}
    </>
  );
};

export default CheckoutPage;



// "use client";

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { FaRegUser } from "react-icons/fa6";
// import { IoSearch } from "react-icons/io5";
// import { FaRegHeart } from "react-icons/fa6";
// import { IoCartOutline } from "react-icons/io5";
// import Link from 'next/link';

// interface CartItem {
//   id: string;
//   image: string;
//   title: string;
//   price: number;
//   quantity: number;
// }

// const CheckoutPage = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const [totalAmount, setTotalAmount] = useState<number>(0);
//   const [isOrderPlaced, setIsOrderPlaced] = useState<boolean>(false); // Track order placement status

//   // Fetch cartItems and totalAmount from query params
//   useEffect(() => {
//     const query = new URLSearchParams(window.location.search);
//     const items = query.get('cartItems');
//     const total = query.get('totalAmount');

//     if (items) {
//       setCartItems(JSON.parse(items));
//     }
//     if (total) {
//       setTotalAmount(parseFloat(total));
//     }
//   }, []);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Simulate successful payment and show popup
//     setIsOrderPlaced(true);
//     setTimeout(() => setIsOrderPlaced(false), 3000); // Hide the success popup after 3 seconds

//     setIsOrderPlaced(true);
//     setTimeout(() => {
//       // After successful order, redirect to the tracking page
//       window.location.href = '/track'; // Ensure the path matches your tracking page route
//     }, 3000); // Redirect after 3 seconds
//   };

//   return (
//     <>
//       <div className='flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-[40px] pt-4 md:pt-[60px] px-4'>
//         <ul className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-center md:ml-[35%]'>
//           <Link href="/"><li className='text-[14px] md:text-[18px] font-semibold'>Home</li></Link>
//           <Link href="/shop"><li className='text-[14px] md:text-[18px] font-semibold'>Shop</li></Link>
//           <Link href="blog"><li className='text-[14px] md:text-[18px] font-semibold'>Blog</li></Link>
//           <Link href="/contact"><li className='text-[14px] md:text-[18px] font-semibold'>Contact</li></Link>
//         </ul>

//         <div className='flex justify-center space-x-4 md:space-x-6 mt-4 md:mt-0 md:mr-[200px] text-[14px] md:text-[16px] font-bold'>
//           <Link href="account"><FaRegUser className="text-base md:text-lg hover:opacity-[0.5]" /></Link>
//           <Link href="/product"><IoSearch className="text-base md:text-lg hover:opacity-[0.5]" /></Link>
//           <Link href="/"><FaRegHeart className="text-base md:text-lg hover:opacity-[0.5]" /></Link>
//           <Link href="/cart"><IoCartOutline className="text-base md:text-lg hover:opacity-[0.5]" /></Link>
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
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#000000] px-4">
//           <h1 className="text-[20px] md:text-[36px] font-semibold">CheckOut</h1>
//           <p className="opacity-[0.8] max-w-[600px] text-[14px] md:text-[18px] mt-2 font-semibold">
//             Home - CheckOut
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto p-6 md:pt-[30px]">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <h2 className="text-xl font-bold mb-4">Your Cart</h2>
//             <div className="space-y-6">
//               {cartItems.length > 0 ? (
//                 cartItems.map((item) => (
//                   <div key={item.id} className="flex items-start p-4 bg-[#FFF9E5] rounded-lg shadow-md">
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       width={100}
//                       height={100}
//                       className="rounded-md object-cover"
//                     />
//                     <div className="ml-4 flex-1">
//                       <h3 className="font-semibold text-lg">{item.title}</h3>
//                       <p className="text-gray-600">Price: ${item.price}</p>
//                       <p className="text-gray-600">Quantity: {item.quantity}</p>
//                       <p className="text-lg font-semibold mt-2 text-[#B88E2F]">
//                         Total: ${(item.price * item.quantity).toFixed(2)}
//                       </p>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-gray-600 font-semibold">Your cart is empty.</p>
//               )}
//             </div>
//           </div>

//           <div className="space-y-6">
//             <div className="bg-[#FFF9E5] p-6 rounded-lg shadow-md">
//               <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//               <div className="flex justify-between mb-2">
//                 <span className="text-gray-600">Subtotal:</span>
//                 <span className="font-semibold">${(totalAmount).toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between text-lg font-bold">
//                 <span>Total:</span>
//                 <span className='text-[#B88E2F]'>${totalAmount.toFixed(2)}</span>
//               </div>
//             </div>

//             <div className="p-6 rounded-lg shadow-md bg-[#FFF9E5]">
//               <h2 className="text-xl font-semibold mb-4">Place Order</h2>
//               <form onSubmit={handleSubmit}>
//                 <button
//                   type="submit"
//                   className="w-full bg-[#B88E2F] text-white font-bold py-2 rounded-lg"
//                 >
//                   <Link href="/ship" className="text-white text-lg font-semibold">
//                   Confirm your order
//                   </Link>
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CheckoutPage;






// "use client";

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { FaRegUser } from "react-icons/fa6";
// import { IoSearch } from "react-icons/io5";
// import { FaRegHeart } from "react-icons/fa6";
// import { IoCartOutline } from "react-icons/io5";
// import Link from 'next/link';
// // import ShopSlider from '../components/ShopSlider';

// // Define types for cart items
// interface CartItem {
//   id: string;
//   image: string;
//   title: string;
//   price: number;
//   quantity: number;
// }

// const CheckoutPage = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const [totalAmount, setTotalAmount] = useState<number>(0);
//   const [paymentMethod, setPaymentMethod] = useState<string>(''); // Track the selected payment method
//   const [cardDetails, setCardDetails] = useState({
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//   });
//   const [isOrderPlaced, setIsOrderPlaced] = useState<boolean>(false); // Track order placement status

//   // Fetch cartItems and totalAmount from query params
//   useEffect(() => {
//     const query = new URLSearchParams(window.location.search);
//     const items = query.get('cartItems');
//     const total = query.get('totalAmount');

//     if (items) {
//       setCartItems(JSON.parse(items));
//     }
//     if (total) {
//       setTotalAmount(parseFloat(total));
//     }
//   }, []);

//   const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setPaymentMethod(e.target.value);
//   };

//   const handleCardDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setCardDetails((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission logic for payment
//     console.log('Payment method:', paymentMethod);
//     console.log('Card details:', cardDetails);

//     // Simulate successful payment and show popup
//     setIsOrderPlaced(true);
//     setTimeout(() => setIsOrderPlaced(false), 3000); // Hide the success popup after 3 seconds

//     setIsOrderPlaced(true);
//     setTimeout(() => {
//       // After successful order, redirect to the tracking page
//       window.location.href = '/track'; // Ensure the path matches your tracking page route
//     }, 3000); // Redirect after 3 seconds
//   };

//   return (
//     <>
//      <div className='flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-[40px] pt-4 md:pt-[60px] px-4'>
//         {/* Center section with links */}
//         <ul className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-center md:ml-[35%]'>
//           <Link href="/"><li className='text-[14px] md:text-[18px] font-semibold'>Home</li></Link>
//           <Link href="/shop"><li className='text-[14px] md:text-[18px] font-semibold'>Shop</li></Link>
//           <Link href="blog"><li className='text-[14px] md:text-[18px] font-semibold'>Blog</li></Link>
//           <Link href="/contact"><li className='text-[14px] md:text-[18px] font-semibold'>Contact</li></Link>
//         </ul>

//         {/* Right section with icons */}
//         <div className='flex justify-center space-x-4 md:space-x-6 mt-4 md:mt-0 md:mr-[200px] text-[14px] md:text-[16px] font-bold'>
//           <Link href="account"><FaRegUser className="text-base md:text-lg hover:opacity-[0.5]" /></Link>
//           <Link href="/product"><IoSearch className="text-base md:text-lg hover:opacity-[0.5]" /></Link>
//         <Link href="/"><FaRegHeart className="text-base md:text-lg hover:opacity-[0.5" /></Link>
//          <Link href="/cart"><IoCartOutline className="text-base md:text-lg hover:opacity-[0.5]" /></Link>
//         </div>
//       </div>

//        <div className="relative w-full h-[250px] md:h-[350px] mt-[30px]">
//               {/* Background Image */}
//               <Image
//                 src="/images/Group 43.png"
//                 alt="insta"
//                 layout="fill"
//                 objectFit="cover"
//                 className="object-cover"
//               />
//               {/* Text Overlay */}
//               <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#000000] px-4">
//                 <h1 className="text-[20px] md:text-[36px] font-semibold">CheckOut</h1>
//                 <p className="opacity-[0.8] max-w-[600px] text-[14px] md:text-[18px] mt-2 font-semibold">
//                   Home - CheckOut
//                 </p>
//               </div>
//             </div>


//     <div className="container mx-auto p-6 md:pt-[30px]">
//       {/* <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1> */}
     


//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <h2 className="text-xl font-bold mb-4">Your Cart</h2>
//           <div className="space-y-6">
//             {cartItems.length > 0 ? (
//               cartItems.map((item) => (
//                 <div key={item.id} className="flex items-start p-4 bg-[#FFF9E5] rounded-lg shadow-md">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     width={100}
//                     height={100}
//                     className="rounded-md object-cover"
//                   />
//                   <div className="ml-4 flex-1">
//                     <h3 className="font-semibold text-lg">{item.title}</h3>
//                     <p className="text-gray-600">Price: ${item.price}</p>
//                     <p className="text-gray-600">Quantity: {item.quantity}</p>
//                     <p className="text-lg font-semibold mt-2 text-[#B88E2F]">
//                       Total: ${(item.price * item.quantity).toFixed(2)}
//                     </p>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-600 font-semibold">Your cart is empty.</p>
//             )}
//           </div>
//         </div>

//         <div className="space-y-6 ">
//           <div className="bg-[#FFF9E5] p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//             <div className="flex justify-between mb-2">
//               <span className="text-gray-600">Subtotal:</span>
//               <span className="font-semibold">${(totalAmount - 5.99).toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between mb-2">
//               <span className="text-gray-600">Shipping:</span>
//               <span className="font-semibold">$5.99</span>
//             </div>
//             <div className="flex justify-between text-lg font-bold">
//               <span>Total:</span>
//               <span className='text-[#B88E2F]'>${totalAmount.toFixed(2)}</span>
//             </div>
//           </div>

//           <div className=" p-6 rounded-lg shadow-md bg-[#FFF9E5]"> 
//              <h2 className="text-xl font-semibold mb-4">Billing Details</h2> 
//             <form onSubmit={handleSubmit}> 
//                <div className="mb-4 ">
//                 <label className="block text-gray-600 font-medium mb-2">Full Name</label>
//                 <input
//                   type="text "
//                   placeholder="Enter your name "
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2"
//                   required 
//                 />
//               </div> 
//               <div className="mb-4">
//                 <label className="block text-gray-600 font-medium mb-2">Email Address</label>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2"
//                   required 
//                 />
//               </div> 
//                <div className="mb-4">
//                 <label className="block text-gray-600 font-medium mb-2">Address</label>
//                 <input
//                   type="text "
//                   placeholder="Enter your address"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 "
//                   required 
//                 />
//               </div> 

//                {/* Payment Method Section  */}
//                <div className="mb-4">
//                 <label className="block text-gray-600 font-medium mb-2">Payment Method</label>
//                 <select
//                   value={paymentMethod}
//                   onChange={handlePaymentMethodChange}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2"
//                 >
//                   <option value="">Select Payment Method</option>
//                   <option value="creditCard">Credit/Debit Card</option>
//                   <option value="paypal">PayPal</option>
//                 </select>
//               </div> 

//               {/* Credit Card Details */}
//               {paymentMethod === 'creditCard' && ( 
//                <div>
//                   <div className="mb-4">
//                     <label className="block text-gray-600 font-medium mb-2">Card Number</label>
//                     <input
//                       type="text"
//                       name="cardNumber"
//                       value={cardDetails.cardNumber}
//                       onChange={handleCardDetailsChange}
//                       placeholder="Enter your card number"
//                       className="w-full border border-gray-300 rounded-lg px-4 py-2"
//                     />
//                   </div> 
//                   <div className="grid grid-cols-2 gap-4 mb-4"> 
//                     <div>
//                       <label className="block text-gray-600 font-medium mb-2">Expiry Date</label>
//                       <input
//                         type="text"
//                         name="expiryDate"
//                         value={cardDetails.expiryDate}
//                         onChange={handleCardDetailsChange}
//                         placeholder="MM/YY"
//                         className="w-full border border-gray-300 rounded-lg px-4 py-2"
//                       />
//                     </div> 
//                    <div>
//                       <label className="block text-gray-600 font-medium mb-2">CVV</label>
//                       <input
//                         type="text"
//                         name="cvv"
//                         value={cardDetails.cvv}
//                         onChange={handleCardDetailsChange}
//                         placeholder="CVV"
//                         className="w-full border border-gray-300 rounded-lg px-4 py-2"
//                       />
//                     </div> 
//                   </div> 
//                </div> 
//             )} 

//              <button
//                 type="submit"
//                 className="w-full bg-[#B88E2F] text-white font-bold py-2 rounded-lg"
//               >
//                 Place Order
//               </button> 
//             </form> 
//           </div> 
//                       {/* Tracking Link Section */}
//   <div className="tracking-link mt-10 text-center">
//   <Link href="/ship"   className="text-[#B88E2F] text-lg font-semibold">
   
//       Track Your Order
    
//   </Link>
//   </div>
//         </div>
        
//       </div>

//       {/* Success Popup */}
      // {isOrderPlaced && (
      //   <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
      //     <div className="bg-white p-6 rounded-lg shadow-md text-center">
      //       <h2 className="text-xl font-semibold text-green-600">Payment Successful!</h2>
      //       <p className="text-gray-600 mt-2">Your order has been placed successfully.</p>
      //       <button
      //         onClick={() => setIsOrderPlaced(false)}
      //         className="mt-4 bg-[#B88E2F] text-white py-2 px-4 rounded-lg"
      //       >
      //         Close
      //       </button>
      //     </div>

          
      //   </div>
        
      // )}
//     </div>
//     {/* <ShopSlider/> */}
//     </>
//   );
// };

// export default CheckoutPage;





















// // components/ShipmentComponent.tsx
// "use client";

// import { useState } from "react";

// const ShipmentComponent = () => {
//   const [shippingRates, setShippingRates] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const fetchShippingRates = async () => {
//     setLoading(true);
//     setError(null);

//     const response = await fetch("/api/shipengine/get-rates", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         shipToAddress: {
//           name: "Michael Smith",
//           phone: "+1 555 987 6543",
//           addressLine1: "456 Oak Avenue",
//           addressLine2: "Suite 200",
//           cityLocality: "Los Angeles",
//           stateProvince: "CA",
//           postalCode: "90001",
//           countryCode: "US",
//           addressResidentialIndicator: "no",
//         },
//         packages: [
//           {
//             weight: { value: 5, unit: "ounce" },
//             dimensions: { height: 3, width: 15, length: 10, unit: "inch" },
//           },
//         ],
//       }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       setError(errorData.error || "Failed to fetch shipping rates.");
//     } else {
//       const data = await response.json();
//       setShippingRates(data);
//     }

//     setLoading(false);
//   };

//   return (
//     <div>
//       <button onClick={fetchShippingRates} disabled={loading}>
//         {loading ? "Fetching rates..." : "Get Shipping Rates"}
//       </button>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {shippingRates && (
//         <div>
//           <h3>Shipping Rates</h3>
//           <pre>{JSON.stringify(shippingRates, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShipmentComponent;





// "use client";

// import { useState } from "react";

// const ShipmentComponent = () => {
//   const [shippingRates, setShippingRates] = useState<any>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch shipping rates from the API
//   const fetchShippingRates = async () => {
//     setLoading(true);
//     setError(null);

//     const response = await fetch("/api/shipengine/get-rates", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         shipToAddress: {
//           name: "Michael Smith",
//           phone: "+1 555 987 6543",
//           addressLine1: "456 Oak Avenue",
//           addressLine2: "Suite 200",
//           cityLocality: "Los Angeles",
//           stateProvince: "CA",
//           postalCode: "90001",
//           countryCode: "US",
//           addressResidentialIndicator: "no",
//         },
//         packages: [
//           {
//             weight: { value: 5, unit: "ounce" },
//             dimensions: { height: 3, width: 15, length: 10, unit: "inch" },
//           },
//         ],
//       }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       setError(errorData.error || "Failed to fetch shipping rates.");
//     } else {
//       const data = await response.json();
//       setShippingRates(data);
//     }

//     setLoading(false);
//   };

//   return (
//     <div>
//       {/* Button to trigger shipping rate fetch */}
//       <button onClick={fetchShippingRates} disabled={loading}>
//         {loading ? "Fetching rates..." : "Get Shipping Rates"}
//       </button>

//       {/* Display error if any */}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {/* Display shipping rates if available */}
//       {shippingRates && (
//         <div>
//           <h3>Shipping Rates</h3>

//           {/* Shipping Rates details */}
//           <div>
//             <p><strong>Service Type:</strong> {shippingRates.serviceType}</p>

//             {/* Check if shippingAmount exists before accessing its properties */}
//             {shippingRates.shippingAmount && (
//               <p>
//                 <strong>Shipping Amount:</strong>{" "}
//                 {shippingRates.shippingAmount.amount}{" "}
//                 {shippingRates.shippingAmount.currency}
//               </p>
//             )}

//             <p>
//               <strong>Estimated Delivery Date:</strong>{" "}
//               {shippingRates.estimatedDeliveryDate || "N/A"}
//             </p>
//             <p><strong>Carrier:</strong> {shippingRates.carrierFriendlyName}</p>
//           </div>

//           {/* Display error messages if available */}
//           {shippingRates.errorMessages && shippingRates.errorMessages.length > 0 && (
//             <div style={{ color: "red" }}>
//               <h4>Errors:</h4>
//               <ul>
//                 {shippingRates.errorMessages.map((message: string, index: number) => (
//                   <li key={index}>{message}</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Display full shipping rates data (for debugging or extended view) */}
//           <pre>{JSON.stringify(shippingRates, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShipmentComponent;


  


// "use client";

// import { useState } from "react";

// const ShipmentComponent = () => {
//   const [shippingRates, setShippingRates] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const fetchShippingRates = async () => {
//     setLoading(true);
//     setError(null);

//     const response = await fetch("/api/shipengine/get-rates", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         shipToAddress: {
//           name: "Michael Smith",
//           phone: "+1 555 987 6543",
//           addressLine1: "456 Oak Avenue",
//           addressLine2: "Suite 200",
//           cityLocality: "Los Angeles",
//           stateProvince: "CA",
//           postalCode: "90001",
//           countryCode: "US",
//           addressResidentialIndicator: "no",
//         },
//         packages: [
//           {
//             weight: { value: 5, unit: "ounce" },
//             dimensions: { height: 3, width: 15, length: 10, unit: "inch" },
//           },
//         ],
//       }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       setError(errorData.error || "Failed to fetch shipping rates.");
//     } else {
//       const data = await response.json();
//       setShippingRates(data);
//     }

//     setLoading(false);
//   };

//   return (
//     <div>
//       <button onClick={fetchShippingRates} disabled={loading}>
//         {loading ? "Fetching rates..." : "Get Shipping Rates"}
//       </button>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {shippingRates && (
//         <div>
//           <h3>Shipping Rates</h3>
//           <pre>{JSON.stringify(shippingRates, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShipmentComponent;

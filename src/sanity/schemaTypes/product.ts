export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description'
    },
    {
      name: 'price',
      type: 'number',
      title: 'Product Price',
    },
    {
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount Percentage',
    },
    {
      name: 'priceWithoutDiscount',
      type: 'number',
      title: 'Price Without Discount',
      description: 'Original price before discount'
    },
    {
      name:'rating',
      type:'number',
      title:'Rating',
      description:'Rating of the product'
    },
    {
      name: 'ratingCount',
      type: 'number',
      title: 'Rating Count',
      description: 'Number of ratings'
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      description: 'Add tags like "new arrival", "bestseller", etc.'
    },
   
    {
      name: 'sizes',
      type: 'array',
      title: 'Sizes',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      description: 'Add sizes like S , M , L , XL , XXL'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Product Image',
      options: {
        hotspot: true // Enables cropping and focal point selection
      }
    }
  ]
};



// // arif schema

// export default {
//     name: "products",
//     title: "Products",
//     type: "document",
//     fields: [
//       {
//         name: "id",
//         title: "Id",
//         type: "number",
//         description: "Product id",
//       },
//       {
//         name: "title",
//         title: "Title",
//         type: "string",
//         description: "The name of the product",
//       },
//       {
//         name: "price",
//         title: "Price",
//         type: "number",
//         description: "The price of the product",
//       },
//       {
//         name: "description",
//         title: "Description",
//         type: "text",
//         description: "A brief description of the product",
//       },
//       {
//         name: "category",
//         title: "Category",
//         type: "string",
//         description: "The category to which the product belongs",
//       },
//       {
//         name: "image",
//         title: "Image",
//         type: "image",
//         options: {
//           hotspot: true,
//         },
//         description: "Product image",
//       },
//       {
//         name: "rating",
//         title: "Rating",
//         type: "object",
//         fields: [
//           {
//             name: "rate",
//             title: "Rate",
//             type: "number",
//             description: "Average rating of the product",
//           },
//           {
//             name: "count",
//             title: "Count",
//             type: "number",
//             description: "Number of ratings received",
//           },
//         ],
//       },
//     ],
//   };


// sir ali jawad ka schema
// export default {
//     name: 'product',
//     type: 'document',
//     title: 'Product',
//     fields: [
//         {
//             name: 'name',
//             type: 'string',
//             title: 'Product Name',
//         },
//         {
//             name: 'description',
//             type: 'string',
//             title: 'Description'
//         },
//         {
//             name: 'price',
//             type: 'number',
//             title: 'Product Price',
//         },
//         {
//             name: 'discountPercentage',
//             type: 'number',
//             title: 'Discount Percentage',
//         },
//         {
//             name: 'priceWithoutDiscount',
//             type: 'number',
//             title: 'Price Without Discount',
//             description: 'Original price before discount'
//         },
//         {
//             name:'rating',
//             type:'number',
//             title:'Rating',
//             description:'Rating of the product'
//         },
//         {
//             name: 'ratingCount',
//             type: 'number',
//             title: 'Rating Count',
//             description: 'Number of ratings'
//         },
//         {
//             name: 'tags',
//             type: 'array',
//             title: 'Tags',
//             of: [{ type: 'string' }],
//             options: {
//                 layout: 'tags'
//             },
//             description: 'Add tags like "new arrival", "bestseller", etc.'
//         },
//         {
//             name: 'sizes',
//             type: 'array',
//             title: 'Sizes',
//             of: [{ type: 'string' }],
//             options: {
//                 layout: 'tags'
//             },
//             description: 'Add sizes like S , M , L , XL , XXL'
//         },
//         {
//             name: 'image',
//             type: 'image',
//             title: 'Product Image',
//             options: {
//                 hotspot: true // Enables cropping and focal point selection
//             }
//         }
//     ]
// };


  
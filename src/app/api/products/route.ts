import { NextResponse } from 'next/server';
import { client } from '../../../sanity/lib/client';

export async function GET() {
  try {
    const products = await client.fetch(
      `*[_type == "product"]{
        _id, // Include the _id field
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

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ message: 'Failed to fetch data', error }, { status: 500 });
  }
}




// import { NextResponse } from 'next/server';
// import {client} from '../../../sanity/lib/client';

// export async function GET() {
//   try {
//     const product = await client.fetch(
//       `*[_type == "product"]{
//         name,
//         description,
//         price,
//         discountPercentage,
//         priceWithoutDiscount,
//         rating,
//        ratingCount,
//         tags,
//         sizes,
       
//         "imageUrl": image.asset->url
//       }`
//     );

//     return NextResponse.json(product, { status: 200 });
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     return NextResponse.json({ message: 'Failed to fetch data', error }, { status: 500 });
//   }
// }

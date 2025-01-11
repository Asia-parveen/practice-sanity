// app/api/product/[id]/route.ts
import { NextResponse } from 'next/server';
import { client } from '../../../../sanity/lib/client';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const productQuery = `*[_id == "${id}"]{...}[0]`; 
    const product = await client.fetch(productQuery);

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
  }
}
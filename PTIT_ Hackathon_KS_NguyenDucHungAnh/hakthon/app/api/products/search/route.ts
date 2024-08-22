// app/api/products/search/route.ts
import { NextResponse } from 'next/server';
import { products } from '@/app/database/data';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name')?.toLowerCase() || '';

  const filteredProducts = products.filter(p => p.productName.toLowerCase().includes(name));
  return NextResponse.json(filteredProducts);
}

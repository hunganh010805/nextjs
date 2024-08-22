// app/api/products/route.ts
import { NextResponse } from 'next/server';
import { products } from '@/app/database/data';
import { Product } from '@/app/database/type';

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const newProduct: Product = await req.json();
  products.push(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}

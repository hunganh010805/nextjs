// app/api/products/[id]/route.ts
import { NextResponse } from 'next/server';
import { products } from '@/app/database/data';
import { Product } from '@/app/database/type';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const product = products.find(p => p.id === Number(params.id));
  if (!product) return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  return NextResponse.json(product);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const productIndex = products.findIndex(p => p.id === Number(params.id));
  if (productIndex === -1) return NextResponse.json({ message: 'Product not found' }, { status: 404 });

  const updatedProduct: Product = await req.json();
  products[productIndex] = updatedProduct;
  return NextResponse.json(updatedProduct);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const productIndex = products.findIndex(p => p.id === Number(params.id));
  if (productIndex === -1) return NextResponse.json({ message: 'Product not found' }, { status: 404 });

  products.splice(productIndex, 1);
  return NextResponse.json({ message: 'Product deleted' });
}

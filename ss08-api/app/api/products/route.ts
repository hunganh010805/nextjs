import React, { useReducer } from 'react'
import { NextResponse } from 'next/server'

export async function GET() {
  let products=[
    {
        id:1,
        name :"iphone5",
        price:5000,
    },
    
    {
        id:2,
        name :"iphone5",
        price:5000,
    },
    {
        id:3,
        name :"iphone5",
        price:5000,
    },

  ];
  
    return NextResponse.json({
    message:"lấy danh sách thành công",
    data:products,
  });
}

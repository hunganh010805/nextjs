import { log } from 'console';
import { NextResponse } from 'next/server'
import React from 'react'

    
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
    export async function GET(req:any,res:any) {
    console.log(":req",req);
    console.log(":res",res);
    let findItem= products.find((item)=>{
        return item.id==+res.params.idProduct;
    });
  return NextResponse.json ({
    message:"Lay danh sach 1 san pham thanh cong",
    data:findItem,
  });
}

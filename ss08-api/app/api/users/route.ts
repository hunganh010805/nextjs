import { NextRequest, NextResponse } from 'next/server'
import React from 'react'

const users= [
    {
        id:1,
        name:"Nguyen van A",
    },
    {
        id:2,
        name:"Nguyeen Van B",
    }
];

export async function GET(){
    return NextResponse.json({data: users});
}
export async function POST(request: NextRequest ) {
  
  //Buoc 1:Lấy dự liệu từ client
const dataClient = await request.json();

//Bước2 :Push dữ liệu lấy được vào trong mảng
users.push(dataClient);

//Bước 3:Trả về mảng mới vừa đươc thêm vào 
return NextResponse.json( {newUsers: users } );
}


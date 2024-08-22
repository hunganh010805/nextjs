import { NextResponse } from 'next/server';


const users = [
    { 
        id: 1,
         name: 'Bai1' 
    },
    { 
        id: 2, 
        name: 'Bai1' 
    },
    { 
        id: 3, 
        name: 'Huyen'
     }
];


export async function GET() {
  return NextResponse.json(users);
}

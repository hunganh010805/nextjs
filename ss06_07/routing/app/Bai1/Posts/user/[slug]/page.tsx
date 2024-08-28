"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation';
export default function Page() {
    const search  = useSearchParams();
    const userName  =search.get("name");
    console.log("username",userName);
    
    return (
    <div>
      Trang chi tiết User
    </div>
  )
}

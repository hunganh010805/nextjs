"use client"
import React from 'react'
import { NextPage } from 'next'
import { usePathname } from 'next/navigation'
 
const CatchAllPage:NextPage =()=>{
  const pathname= usePathname();
  
  const slug =pathname.split("/").slice(3)
  console.log(slug);
  
  return(
    <div>
      <p>Bạn đang xem blog với đường dẫn: {slug.length > 0 ? slug.join ("/") : "Trang mac dinh" }</p>

    </div>
  );
};
export default CatchAllPage;
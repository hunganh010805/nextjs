"use client"
import React from 'react'
import { NextPage } from 'next'
import { usePathname } from 'next/navigation'
 
const CatchAllPage:NextPage =()=>{
  const pathname= usePathname();
  const slug =pathname.split("/").slice(1);
  return(
    <div>
      <p> {slug.length > 0 ? slug.join ("/") : "Home" }</p>

    </div>
  );
};
export default CatchAllPage;
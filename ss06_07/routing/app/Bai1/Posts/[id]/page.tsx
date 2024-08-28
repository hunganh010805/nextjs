'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation';
export default function Page() {
    // dùng query bên cạnh dấu ?
    // dùng userSearchParam là hook được cung cấo bởi NextJS
    const searchParam = useSearchParams();
    const idPost= searchParam.get("id");
    console.log("idPosts",idPost);
    

  return (
    <div>
      Chi tiết sản phẩm
    </div>
  )
}

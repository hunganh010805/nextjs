import { log } from 'console';
import React from 'react'
interface Params{
    product: string[]
}
interface Props {
    params:Params
}
export default function ProductDetail(props:Props) {
    console.log("props",props);
    const { params }= props;
    
    
  return (
    <div>
      Trang chi tiết sản phẩm có Id là :{params.product[0]}
    </div>
  )
}

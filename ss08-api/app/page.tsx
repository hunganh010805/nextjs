import React from 'react'
import fs from 'fs'
import path from 'path'
export default function page() {
  const filePath = path.join(process.cwd(),"app/products/product.txt")
  // const data  = fs.readFileSync(filePath, "utf8");
  const data  = fs.writeFileSync(filePath,"hello word", "utf8");
  // console.log("file duoc doc voi noi dung",data);
  
  return (
    <div>
      TRANG CHU
    </div>
  )
}
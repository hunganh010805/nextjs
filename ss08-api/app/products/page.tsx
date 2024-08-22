"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [products, setProducts] = useState<any>();
  // Đi gọi api lấy data để đi render ra màn hình trình duyệt
  // fetch
  // axios
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data.data);
      })
      .catch((err) => {});
  }, []);
  const handleDetail = (id: number) => {
    axios
      .get(`http://localhost:3000/api/products/${id}`)
      .then((res) => {
        console.log("Chi tiết sản phẩm", res.data.data);
      })
      .catch((err) => {});
  };
  return (
    <div>
      Danh sách sản phẩm
      {products?.map((item: any) => {
        return (
          <div key={item.id}>
            <p>Tên : {item.name}</p>
            <p>Giá : {item.price}</p>
            <button onClick={() => handleDetail(item.id)}>
              Chi tiết sản phẩm
            </button>
            <p>*******************</p>
          </div>
        );
      })}
      
    </div>
  );
}
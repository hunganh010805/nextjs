'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function ProductsPage() {
  const searchParams = useSearchParams();

  // Lấy các giá trị từ URL
  const initialName = searchParams.get('name') || '';
  const initialCategory = searchParams.get('category') || '';

  // State cho input form
  const [name, setName] = useState(initialName);
  const [category, setCategory] = useState(initialCategory);

  // Xử lý submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Tạo URL mới khi người dùng tìm kiếm
    const url = `/products?name=${encodeURIComponent(name)}&category=${encodeURIComponent(category)}`;
    window.location.href = url;
  };

  return (
    <div>
      <h1>Tên sản phẩm: {initialName}</h1>
      <h2>Danh mục: {initialCategory}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nhập tên sản phẩm"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Nhập danh mục"
        />
        <button type="submit">Tìm kiếm</button>
      </form>
    </div>
  );
}

'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function Posts() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search'); // Lấy giá trị "search" từ URL
  const [search, setSearch] = useState<string>('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search) {
      router.push(`/Bai1/Posts?search=${search}`); // Đẩy giá trị lên URL
    }
  };

  return (
    <div>
      <h1>Bai1 va Bai2</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Nội dung"
        />
        <button type="submit" onClick={handleSearch}>Tìm kiếm</button>
      </form>

      {/* Hiển thị giá trị lấy từ URL */}
      {searchQuery ? (
        <p>Kết qua tìm kiếm: {searchQuery}</p>
      ) : (
        <p></p>
      )}
    </div>
  );
}

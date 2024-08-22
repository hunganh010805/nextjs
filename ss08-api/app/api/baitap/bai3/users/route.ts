import { NextResponse } from 'next/server';

// Dữ liệu người dùng được lưu trữ trong một mảng
const users = [
    { 
        id: 1,
         name: 'Bai3' 
    },
    { 
        id: 2, 
        name: 'Ba33333' 
    },
    { 
        id: 3, 
        name: 'Huyen'
     }
];

// Xử lý yêu cầu GET với query parameter 'name'
export async function GET(request: Request) {
  const url = new URL(request.url);
  const name = url.searchParams.get('name'); // Lấy giá trị của query parameter 'name'

  // Nếu không có tên được cung cấp, trả về toàn bộ danh sách người dùng
  if (!name) {
    return NextResponse.json(users);
  }

  // Tìm kiếm người dùng có tên chứa chuỗi tìm kiếm
  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));

  // Trả về danh sách người dùng phù hợp
  return NextResponse.json(filteredUsers);
}

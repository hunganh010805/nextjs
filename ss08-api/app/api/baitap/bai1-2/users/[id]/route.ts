import { NextResponse } from 'next/server';

// Dữ liệu người dùng được lưu trữ trong một mảng
const users = [
    { 
        id: 1,
         name: 'Bai2' 
        },
    { 
        id: 2, 
        name: 'Bai2' 
    },
    { 
        id: 3, 
        name: 'Bai2'
     }
];

// Xử lý yêu cầu GET với đường dẫn động
export async function GET(request: Request, params: { id: string }) {
  const { id } = params; // Lấy id từ đường dẫn

  // Tìm người dùng theo id
  const user = users.find(user => user.id === +id);

  // Nếu tìm thấy người dùng, trả về thông tin của họ
  if (user) {
    return NextResponse.json(user);
  }

  // Nếu không tìm thấy, trả về thông báo lỗi
  return NextResponse.json({ message: `Không tìm thấy người dùng có id = ${id}` }, { status: 404 });
}

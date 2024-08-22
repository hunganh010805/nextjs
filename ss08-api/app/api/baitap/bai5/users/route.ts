import { NextResponse } from 'next/server';

// Dữ liệu người dùng (giả lập)
let users = [
    { 
        id: 1,
         name: 'Bai4' 
    },
    { 
        id: 2, 
        name: 'Ba5' 
    },
    { 
        id: 3, 
        name: 'Huyen'
     }
];

// Xử lý yêu cầu GET để trả về danh sách người dùng
export async function GET() {
  return NextResponse.json(users);
}

// Xử lý yêu cầu POST để thêm người dùng mới
export async function POST(request: Request) {
  const { name } = await request.json(); // Lấy dữ liệu từ body của yêu cầu POST

  // Tạo người dùng mới và thêm vào danh sách
  const newUser = {
    id: users.length + 1, // Tạo id đơn giản cho người dùng
    name
   
  };
  users.push(newUser);

  return NextResponse.json({ message: 'Thêm mới thông tin người dùng thành công', user: newUser });
}

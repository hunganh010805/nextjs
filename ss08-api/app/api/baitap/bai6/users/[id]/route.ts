import { NextResponse } from 'next/server';

// Dữ liệu người dùng được lưu trữ trong một mảng (giả lập)
let users = [
  { 
    id: 1,
     name: 'Bai5' 
},
{ 
    id: 2, 
    name: 'Bai6' 
},
{ 
    id: 3, 
    name: 'Huyen'
 }
];

// Xử lý yêu cầu GET để lấy thông tin người dùng theo ID
export async function GET(request: Request, params: { id: string }) {
  const userId = parseInt(params.id); // Lấy ID từ params và chuyển thành số nguyên
  const user = users.find(user => user.id === userId);

  if (!user) {
    return NextResponse.json({ message: `Không tìm thấy người dùng có ID = ${userId}` }, { status: 404 });
  }

  return NextResponse.json(user);
}

// Xử lý yêu cầu PUT để cập nhật thông tin người dùng
export async function PUT(request: Request,  params: { id: string } ) {
  const userId = parseInt(params.id); // Lấy ID từ params và chuyển thành số nguyên
  const { name } = await request.json(); // Lấy dữ liệu mới từ body của yêu cầu PUT

  // Tìm vị trí người dùng có ID tương ứng
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex === -1) {
    return NextResponse.json({ message: `Không tìm thấy người dùng có ID = ${userId}` }, { status: 404 });
  }

  // Cập nhật thông tin người dùng
  users[userIndex] = { ...users[userIndex], name };

  return NextResponse.json({ message: 'Cập nhật thông tin người dùng thành công', user: users[userIndex] });
}

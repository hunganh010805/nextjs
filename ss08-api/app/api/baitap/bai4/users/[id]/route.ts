import { NextResponse } from 'next/server';

// Dữ liệu người dùng (được chia sẻ)
let users = [
    { 
        id: 1,
         name: 'Bai1' 
    },
    { 
        id: 2, 
        name: 'Bai1' 
    },
    { 
        id: 3, 
        name: 'Huyen'
     }
];

// Xử lý yêu cầu DELETE để xóa người dùng dựa trên 'id'
export async function DELETE(request: Request,  params: { id: string } ) {
  const userId = parseInt(params.id); // Lấy 'id' từ params và chuyển thành số nguyên

  // Kiểm tra xem người dùng có tồn tại hay không
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex === -1) {
    return NextResponse.json({ message: `Không tìm thấy người dùng có id = ${userId}` }, { status: 404 });
  }

  // Xóa người dùng khỏi danh sách
  users.splice(userIndex, 1);

  return NextResponse.json({ message: 'Xóa thông tin người dùng thành công' });
}

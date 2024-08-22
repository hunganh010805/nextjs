import { log } from "console";
import { NextRequest, NextResponse } from "next/server";

const users = [
  {
    id: 1,
    name: "Nguyen van A",
  },
  {
    id: 2,
    name: "Nguyeen Van B",
  },
];

export async function GET(request: NextRequest, params: { id: string }) {
  //Bước 1:Lấy Id từ Params
  const { id } = params; //params.params.id
  // console.log(id);

  // Bước 2: Tìm kiếm Uers theo Id trong mảng
  const findUser = users.find((user) => user.id === +id);


  //Bước 3:Trả về kết quả cho người dùng
  if (findUser) {
    return NextResponse.json(findUser);
  }
}

export async function PUT(
  request: NextRequest,
  params: { params: { id: string } }
) {
  //Bước 1 :Lấy Id từ dữ liệu cần cập nhật từ người dùng
  const id = params.params.id;

  const dataClient = await request.json();

  //Tìm kiếm vị trí của User trong mảng
  const findIndex = users.findIndex((user) => user.id === +id);

  if (findIndex !== -1) {
    // Buoc3 :cap nhat du lieu
    users[findIndex].name = dataClient.name;
  }

  return NextResponse.json({ data: users });
}
export async function DELETE(request:NextRequest, params: { params:{id:string, name:string}}){
  // Bước 1 : lấy id của từng params
  const id = params.params.id
  const dataClient = await request.json();
  // Bước 2 : Lọc ra những bản ghi có id khác vơi id cần xóa
  const usersFilter = users.filter((users) => users.id!== +id);
  // Bước 3 : Trả về dữ liệu cho phía client 
  return NextResponse.json({newData:usersFilter})
}

 
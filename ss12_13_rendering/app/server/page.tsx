import React from 'react'
//hàm đi lấy duex liệu bằng cách call API
async function getUser() {
    const res= await fetch("https://jsonplaceholder.typicode.com/posts")
    const data= await res.json();
    return data;
}
export default async function page(){
    const users = await getUser();
  return (
    <div>
      Bai1 
      
      {users.map((item:any)=>{
        return <li key={item.id}>{item.name}</li>
      })}
    </div>
  )
}

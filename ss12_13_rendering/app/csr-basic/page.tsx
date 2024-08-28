

import React, { useEffect, useState } from 'react';


interface User {
  id: number;
  username: string;
}


export default function UsersPage() {

  const [users, setUsers] = useState<User[]>([]);


  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Danh sách Người dùng (CSR)</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

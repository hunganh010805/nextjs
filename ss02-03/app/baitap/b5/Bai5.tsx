import React from 'react';

export default function Bai5() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-gray-300 w-[320px] p-4 rounded-lg shadow-lg'>
        <div className='flex items-center'>
          <img 
            className='w-[80px] h-[80px] mr-4' 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/497px-Error.svg.png" 
            alt="Error Icon"
          />
          <p className='font-bold text-xl'>DELETE BLOG POST</p>
        </div>
        <p className='mt-4 mb-6'>Are you sure you want to delete this blog post? This action cannot be undone.</p>
        <div className='flex justify-end gap-4'>
          <button className='border border-black w-[100px] h-[40px] rounded hover:bg-gray-400 transition'>Cancel</button>
          <button className='border border-black w-[100px] h-[40px] rounded bg-red-500 text-white hover:bg-red-700 transition'>Delete</button>
        </div>
      </div>
    </div>
  );
}

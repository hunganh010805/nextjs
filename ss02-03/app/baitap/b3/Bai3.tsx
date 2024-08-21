import React from 'react';

export default function Bai3() {
  return (
    <div className='flex justify-center items-center'>
      <div className='border-2 border-gray-500 w-[300px] h-auto rounded p-4'>
        <p className='font-bold text-lg mb-4 text-center'>Form Sign Up</p>
        
        <label className='block mb-3'>
          <span className='font-semibold'>Name</span>
          <input 
            type="text" 
            className='border-2 border-gray-300 w-full mt-1 p-2 rounded focus:border-blue-500 focus:outline-none' 
          />
        </label>
        
        <label className='block mb-3'>
          <span className='font-semibold'>Email</span>
          <input 
            type="text" 
            className='border-2 border-gray-300 w-full mt-1 p-2 rounded focus:border-blue-500 focus:outline-none' 
          />
        </label>

        <label className='block mb-3'>
          <span className='font-semibold'>Phone Number</span>
          <input 
            type="text" 
            className='border-2 border-gray-300 w-full mt-1 p-2 rounded focus:border-blue-500 focus:outline-none' 
          />
        </label>

        <label className='block mb-3'>
          <span className='font-semibold'>Address</span>
          <textarea 
            className='border-2 border-gray-300 w-full mt-1 p-2 rounded focus:border-blue-500 focus:outline-none resize-none' 
            rows="3"
          />
        </label>
        
        <div className='font-semibold mb-2'>
          Skills
        </div>
        
        <label className='block mb-2'>
          <input type="checkbox" className='mr-2' />
          HTML
        </label>

        <label className='block mb-2'>
          <input type="checkbox" className='mr-2' />
          UX Design
        </label>

        <label className='block mb-2'>
          <input type="checkbox" className='mr-2' />
          CSS
        </label>

        <label className='block mb-2'>
          <input type="checkbox" className='mr-2' />
          JavaScript
        </label>
        
        <div className='flex justify-center mt-6'>
          <button className='p-2 bg-blue-500 text-white rounded w-[250px]'>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

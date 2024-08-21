import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEye } from "@fortawesome/free-solid-svg-icons"; 

export default function Bai1() {
  return (
    <div>
      <div>Bai1</div>
      <div className='bg-gray-300 w-[300px] h-[100px] rounded p-4'>
        <div className='relative'>
          <p className='text-blue-500 mb-1'>Label</p>
          <div className='flex items-center'>
            <input 
              type="text" 
              placeholder='.....' 
              className='rounded w-full pr-10'
            />
            <FontAwesomeIcon 
              className='w-[15px] absolute right-2 top-1/2 transform -translate-y-1/2' 
              icon={faEye} 
            />
          </div>
          <p className='mt-2 text-gray-600'>Helper Text</p>
        </div>
      </div>
    </div>
  );
}

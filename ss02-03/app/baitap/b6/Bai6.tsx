import React from 'react';

export default function Bai6() {
  return (
    <>
      <header className='bg-red-400 text-black p-4'>
        <div className='container mx-auto flex justify-between items-center'> 
          <div className='font-bold text-xl'>Logoispum</div>
          <nav>
            <ul className='flex space-x-8'>
              <li>
                <a href="home" className='hover:underline'>Home</a>
              </li>
              <li>
                <a href="updates" className='hover:underline'>Updates</a>
              </li>
              <li>
                <a href="services" className='hover:underline'>Services</a>
              </li>
              <li>
                <a href="features" className='hover:underline'>Features</a>
              </li>
              <li>
                <a href="about-us" className='hover:underline'>About Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

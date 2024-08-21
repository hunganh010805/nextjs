import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faCaretUp, faClock } from "@fortawesome/free-solid-svg-icons"; 

export default function Bai2() {
  return (
    <div>
      Bai2
      <br />
      <div className='bg-gray-300 w-[300px] p-4 rounded'>
        <div>
          <p className='mb-2'>Input Label</p>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder=""
              className="rounded border border-blue-700 h-[30px] w-full pl-8 pr-6"
            />
            <FontAwesomeIcon
              className="w-[15px] absolute top-1/2 transform -translate-y-1/2 text-gray-400 left-2"
              icon={faClock}
            />
            <FontAwesomeIcon
              className="w-[10px] absolute top-1/2 transform -translate-y-1/2 text-black right-2"
              icon={faCaretUp}
            />
          </div>
          <div className="border-2 border-gray-400 w-full h-[160px] rounded p-3 bg-white flex flex-col justify-between">
            {["Label", "Label", "Label", "Label"].map((label, index) => (
              <label key={index} className="flex items-center justify-between">
              

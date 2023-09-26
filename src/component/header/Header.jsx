
import React from 'react'
import { AiOutlineShoppingCart, AiTwotoneNotification } from "react-icons/ai";
import img1 from '../../assets/img/img.jpeg'

const Header = () => {
  return (
    <div className='text-[#f2f2f2] text-[1.2rem] z-[999] sticky'>
      <div className='bg-[#0047b3] p-4 flex items-center justify-between fixed w-full'>
        <div className="flex text-black text-[1.5rem] bg-gray items-center text-[#f2f2f2] cursor-pointer">
                <AiOutlineShoppingCart className='text-[#d580ff] x  '/>
            <h1>DavRit</h1>
        </div>
        <div className="flex">
            <ul className='flex items-center gap-5 cursor-pointer'>
                <li>Home</li>
                <li>featured</li>
                <li>shop</li>
            </ul>
        </div>
        <div className='flex'>
            <input type="text" name="" id="" placeholder='search product' className='pt-[5px] text-[0.9rem] text-[gray] pb-[5px] p-[10px] outline-none rounded-t-md rounded-r-none  rounded-l-md'/>
            <button className='pt-[5px] text-[0.9rem] pb-[5px] p-[10px] outline-none rounded-t-red rounded-r-md bg-[red]  rounded-l-none'>Search</button>
        </div>
        <div className='flex gap-6 items-center text-[#f2f2f2]'>
            <div className='relative cursor-pointer'>
                <AiTwotoneNotification className='relative text-[1.2rem]'/>
                <div className="absolute bg-[red] top-[-6px] left-[9px] w-[15px] h-[15px] text-[40%] text-[white] rounded-[50%] flex justify-center items-center">10</div>
            </div>
            <div className='flex gap-1 items-center'>
                <p className='text-[0.8rem]'>welcome user</p>
                <img src={img1} alt="" className='w-[35px] h-[35px] rounded-[50%] object-cover cursor-pointer'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header

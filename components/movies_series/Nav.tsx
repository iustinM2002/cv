import React from 'react';
import { NextPage } from 'next';
// images and links imports
import logo from '../../img/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Nav:NextPage = () : JSX.Element => {
  return (
    <div className='flex min-h-[10vh] fixed bg-[#000000cf] w-full md:flex-col md:items-center z-10'>
        <div className="logo w-[150px] pt-[0.5rem] px-[2rem] flex items-center">
            <Image src={logo}/>
        </div>
        <ul className="nav-links flex items-center w-[50%] justify-between text-white md:w-full md:px-[1rem] md:text-[0.8rem]">
            <li className='cursor-pointer hover:underline transition-all '><Link href="/movies">Homepage</Link></li>
            <li className='cursor-pointer hover:underline transition-all '><Link href="/series_table">Series</Link></li>
            <li className='cursor-pointer hover:underline transition-all '><Link href="/movie_table">Movies</Link></li>
        </ul>
    </div>
  )
}

export default Nav
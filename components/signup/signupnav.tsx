import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
// images
import Image from 'next/image';
import logo from '../../img/logo.png';

const SignUpNav:NextPage = ():JSX.Element => {
  return (
        <div className='nav w-full flex items-center sm:flex-col border-b-[1px] border-[#00000036]' id='nav'>
          <div className=" mx-[2rem] image w-[200px] lg:w-[150px] cursor-pointer">
          <Link href='/'>
          <Image id='logo' src={logo}/>
          </Link>
          </div>
       </div>
  )
}

export default SignUpNav
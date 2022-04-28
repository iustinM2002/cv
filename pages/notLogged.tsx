import React from 'react';
import Link from 'next/link';

const NotLogged = () => {
  return (
    <div className='bg-[#141414] min-h-[100vh] w-full flex flex-col justify-center items-center text-white' >
    <h1>You are not logged to have acces, please login or register. </h1>
      <Link href='/sign_in'>Sign In</Link>
    </div>
  )
}

export default NotLogged
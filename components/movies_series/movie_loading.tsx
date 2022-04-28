import React from 'react';
import { NextPage } from 'next';

const MovieLoading:NextPage = (): JSX.Element => {
  return (
    <div className='fixed min-h-[100vh] top-0 bg-black w-full z-20 flex justify-center items-center'>
        <h2 className='text-white text-[2rem] px-[2rem] md:text-[1.2rem]'>Loading</h2>
        <div className="circle border-t-[2px] border-l-[2px] border-b-[2px] rounded-full  min-h-[50px] border-red-800 w-[50px] animate-spin"></div>
    </div>
  )
}

export default MovieLoading;
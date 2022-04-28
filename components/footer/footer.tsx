import React from 'react';
import { NextPage } from 'next';
// import  data from utils
import { footerData } from 'data';
// importing components
import FooterElements from './footer-elements';

const Footer:NextPage = ():JSX.Element => {
  return (
    <div className='w-full bg-black text-[#646464]'>
        <p className='ml-[4rem] pt-[4rem]'>Questions? Call 0808 196 5391</p>
        <div className="grid grid-cols-auto  ml-[4rem] ">
          {footerData.map((items, index) => <FooterElements key={index} items={items}/>)}
        </div>
        <p className='ml-[4rem] pb-[4rem] '>Netflix - Iustin Morosanu</p>
    </div>
  )
}

export default Footer
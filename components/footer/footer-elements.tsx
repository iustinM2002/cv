import React from 'react';
import { NextPage } from 'next';

interface Footer{
  items:string[]
}

const FooterElements:NextPage<Footer> = ({items}):JSX.Element => {
  return (
    <div className='py-[1rem]'>
        {items.map(item => <p key={item} className='text-[0.8rem] py-[0.3rem]'>{item}</p>)}
    </div>
  )
}

export default FooterElements
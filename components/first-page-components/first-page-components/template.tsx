import React,{useContext} from 'react';
import type { NextPage } from 'next';
// context
import { LangContext } from 'contexts/language';
// images
import Image, { StaticImageData } from 'next/image';
import tv from '../../../img/tv.png';
import phone from '../../../img/mobile.jpg';
import devicePile from '../../../img/device-pile.png';
import kids from "../../../img/kids.png";

const Template: NextPage<{enText:string[],roText:string[],index:number}> = ({enText,roText,index}) => {
  const imgs :StaticImageData[] = [tv,phone,devicePile,kids]
  const [lang] = useContext(LangContext)
  return (
    <div className='border-b-[5px] border-[#383838]   bg-[#000000] text-white flex flex-wrap items-center justify-center w-full min-h-[60vh]'>
        <div className={`text  flex flex-col items-center justify-center min-h-[20vh] basis-[40rem] w-full ${index %2 !== 0 ? 'order-2' : ''} xl:order-1 `}>
            <h2 className='text-[2rem] font-bold pb-[1rem] lg:text-[1.5rem] lg:px-[3rem] text-center sm:text-[1.2rem]'>{lang === 'en' ? enText[0] : roText[0] }</h2>
            <h4 className='text-center lg:px-[2rem] sm:text-[0.9rem]' >{lang === 'en' ? enText[1] : roText[1]}</h4>
        </div>
        <div className={`${index %2 !== 0 ? 'order-1' : ''} xl:order-2 w-full flex justify-center  basis-[40rem]`}>
        <div className={` image w-[40vw]`} >
        <Image   src={imgs[index]}></Image>
        </div> 
        </div>
    </div>
  )
}

export default Template
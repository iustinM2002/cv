import React,{useState} from 'react';
import { NextPage } from 'next';
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faXmark} from "@fortawesome/free-solid-svg-icons";
interface QeustionProps {
  lang:string | React.Dispatch<React.SetStateAction<string>>,
  enText:string,
  roText:string,
}

const Questions:NextPage<QeustionProps> = ({lang,enText,roText}):JSX.Element => {
  const [activeFaq,setActiveFaq] = useState<boolean>(false)
  return (
    <div className="questions w-full">
          <div className="title bg-[#303030] text-white w-[40rem] md:w-[100%] m-auto min-h-[8vh] flex items-center justify-between mb-[1px] cursor-pointer" onClick={() => setActiveFaq(!activeFaq)} ><h2 className="text-[1.8rem] px-[2rem] lg:text-[1.5rem]  md:text-[1.2rem] sm:text-[1rem]"> {lang === 'en'? enText[0] : roText[0]}</h2> <FontAwesomeIcon className="text-[1.8rem] px-[2rem] text-[#dbdbdb] sm:text-[1rem] h-[50px] md:h-[30px] " icon={activeFaq? faXmark : faPlus}/></div>
          {activeFaq ? <p className='bg-[#303030] text-white w-[40rem] m-auto px-[2rem] text-[1.5rem] py-[3rem] lg:text-[1.5rem]  md:text-[1.2rem] md:w-full sm:text-[0.9rem]'>{lang === 'en'? enText[1] : roText[1]}</p> : ""}
          <div className="space pb-[0.4rem]"></div>
    </div>
  )
  
}

export default Questions
import React,{useContext} from 'react';
import { NextPage } from 'next';
// importing components
import Questions from './questions';
import { faqData } from '../../../data';
import Email from '../../email/email';
// context
import { LangContext } from 'contexts/language';

const Faq:NextPage = ():JSX.Element => {
  const [lang] = useContext(LangContext)
  return (
    <div className='bg-[#000000] flex flex-col items-center border-b-[5px] border-[#383838] pb-[3rem] '>
        <h2 className='text-white text-[3rem] font-bold py-[2rem] md:text-[1.5rem]' >Frequently Asked Questions</h2>
        {faqData.map((item:any, index: number) => <Questions key={index} lang ={lang} enText={item?.enText} roText={item?.roText}/>)}
        <p className='text-white text-[1.3rem] pt-[2rem] lg:text-[1.5rem]  md:text-[1.2rem] text-center sm:text-[0.9rem] sm:px-[1rem]'>{lang ==='en' ?`Ready to watch? Enter your email to create or restart your membership. `: 'Ești gata de vizionare? Introdu adresa de e-mail pentru a te abona sau pentru a reactiva abonamentul.  '}</p>
        <Email/>
    </div>
  )
}

export default Faq
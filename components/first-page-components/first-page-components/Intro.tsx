import React,{useContext} from 'react';
import { NextPage } from 'next';
// importing components
import FirstPageNav from './first-page-nav';
import FirstEmail from './first-page-email';
// context
import { LangContext } from 'contexts/language';

const Intro:NextPage = ():JSX.Element => {
  const [lang] = useContext(LangContext)
  return (
    <div id='intro' className="border-b-[5px] border-[#383838]  bg-[url(../img/netflixbg.jpg)] bg-center bg-cover min-h-[70vh] bg-black ">
      <div className="bg-[#00000081] w-full min-h-[80vh] ">
      <FirstPageNav  />
      <FirstEmail lang={lang}/>
      </div>
    </div>
  )
}

export default Intro
import React,{useState} from 'react';
import type { NextPage } from 'next'
// importing components
import Intro from '../components/first-page-components/first-page-components/Intro';
import Template from '../components/first-page-components/first-page-components/template';
import Faq from '../components/first-page-components/first-page-components/faq';
import Footer from '../components/footer/footer';
// data
import { Data } from '../data';
// context provider
import { LanguageProvider } from 'contexts/language';
import { RegisterProvider } from 'contexts/registerContext';

// importing images

const Home: NextPage = () :JSX.Element => {
  const [lang,setLang] = useState('en');
  interface template{
    enText: string[];
    roText: string[];
    index: number;
}
  type itemProp= {
    enText: string[];
    roText: string[];
  } 
  return (
    <LanguageProvider>
    <div>
     <Intro/>
      {Data.map((item:itemProp | any ,index:number) => <Template key={index}  enText ={item.enText} roText = {item.roText} index={index}  />)} 
     <Faq />
    <Footer/>
    </div>
    </LanguageProvider>
  )
}

export default Home
import React,{useContext} from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import logo from '../../../img/logo.png';
import Link from 'next/link';
import { LangContext } from 'contexts/language';

const FirstPageNav :NextPage = ():JSX.Element => {
    const [lang,setLang] = useContext(LangContext)
    const setLangHandler = (e: React.SyntheticEvent) => {
        let target = e.target as HTMLInputElement;
        if(typeof setLang !== 'string'){
            setLang(target.value)

        }
    }
  
    return (
    <div className='nav w-full flex items-center sm:flex-col' id='nav'>
        <div className="image w-[200px] lg:w-[150px]">
        <Image id='logo' src={logo}/>
        </div>
        <div className="nav-second-column flex w-full justify-end sm:justify-center">
        <select data-testid="change-lang-select" onChange={setLangHandler} className='bg-[#000000ad] text-white p-[0.1rem] border-[1px] border-[#ffffffa6] rounded-[2px]' name="" >
            <option value="en">English</option>
            <option value="ro">Romana</option>
        </select>
        <div className="sign-in-button px-[1rem]">
            <button id="login" className='bg-[#e50712] text-white rounded-[2px] px-[1rem] py-[0.4rem] sm:text-[0.9rem]'>
                {lang === 'en' ? <Link href='/sign_in'>Sign In</Link> : <Link href='/sign_in'>Conectare</Link>}
            </button>
        </div>
        </div>
    </div>
  )
}

export default FirstPageNav
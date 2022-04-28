import React,{useContext} from 'react';
import { NextPage } from 'next';
// context
import { LangContext } from 'contexts/language';
// images and links
import Image from 'next/image';
import logo from '../../img/logo.png';
import Link from 'next/link';

const SignInNav :NextPage = ():JSX.Element => {
  // context
  const [lang,setLang] = useContext(LangContext);
  // function for changing language
  const setLangHandler = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLInputElement;
    if(typeof setLang !== 'string')
      setLang(target.value)
  }
  
  return (
    <div className='nav w-full flex items-center sm:flex-col md:bg-black' id='nav'>
        <div className="image w-[200px] lg:w-[150px] cursor-pointer">
          <Link href='/' >
            <div className="navbar-brand">
            <Image id='logo' src={logo} priority className=''  />
            </div>
          </Link>
        </div>
        <div className="nav-second-column flex w-full justify-end sm:justify-center">
          <select onChange={setLangHandler} className='bg-[#000000ad] text-white p-[0.1rem] mx-[2rem] border-[1px] border-[#ffffffa6] rounded-[2px]' name="" id="">
              <option value="en">English</option>
              <option value="ro">Romana</option>
          </select>
        </div>
    </div>
  )};

export default SignInNav;
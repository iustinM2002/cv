import React,{useContext} from 'react'
import Router from 'next/router';
import { NextPage } from 'next';
// font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// context
import { LangContext } from 'contexts/language';
import { RegisterContext } from 'contexts/registerContext';
// yup & react hook form
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface dataContact{
  email:string,
  password?:string
}
interface FormValues extends Record<string,any>{
  email:string,
  password?:string
}

const schema = yup.object().shape({
  email: yup.string().required()
});
const Email:NextPage = ():JSX.Element => {
  const [lang] = useContext(LangContext);
  const [registerData,dispatch] = useContext(RegisterContext);
  const {register,handleSubmit} = useForm<FormValues>({
    resolver:yupResolver(schema)
  });
  const onSubmit = (data:dataContact) =>{
      dispatch({type:'ADD_USER',payload:{data:data.email}})
      Router.push('sign_up')
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="email-input pt-[1rem] flex flex-wrap md:flex-col w-full justify-center items-center">
        <input type='email' className='bg-[#ffffff] w-[500px] min-h-[70px] border-[1.5px] rounded-[2px] border-[#8a8a8a85] px-[0.8rem] py-[0.4rem] lg:w-[400px] lg:min-h-[60px] md:w-[100%] md:min-h-[45px] text-black'  placeholder={lang === 'en' ? 'Email address' : "Adresa de e-mail"} id="email" {...register('email', {required:true})} />
        <button className='bg-[#e50712] text-white rounded-[2px] px-[0.3rem] w-[200px] min-h-[70px] py-[0.4rem] lg:min-h-[60px] sm:text-[0.9rem] md:min-h-[45px] text-[1.5rem] lg:text-[1.3rem] md:text-[1.1rem] md:w-[140px] md:mt-[2rem] flex items-center justify-center' >{lang === 'en' ? 'Get Started' : 'Incepe'} <FontAwesomeIcon className='w-[10px] mx-[0.5rem]' icon={faAngleRight}/> </button>
      </form>
  )
}

export default Email
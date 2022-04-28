import { useState,useContext,useEffect } from "react";
import Router from "next/router";
import { NextPage } from "next";
// context
import { LoginContext } from "contexts/loginContext";
import { LangContext } from "contexts/language";
// yup and react hook form
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// interfaces

interface dataContact{
    email:string,
    password:string
}
interface SignInProps{
    initialContacts:[],
    onSubmit : (data:dataContact) => void;
}
interface FormValues extends Record<string,any>{
    email:string,
    password:string
}

// yup schema
const schema = yup.object().shape({
    email: yup.string().required(),
    password : yup.string().required()
})

const SignInBody: NextPage<SignInProps> = ({initialContacts,onSubmit}) => {
   
    const  {register,handleSubmit} = useForm<FormValues>({
        resolver: yupResolver(schema)
    });
    // declaring state
    const [learnButton ,setLearnButton] = useState<Boolean>(false);
    const [err,setErr] = useState<string>('');
    const [passwordVis,setPasswordVis] = useState<string>('show');
    const [passwordBtn,setPasswordBtn] = useState<Boolean>(false);
    // deconstruct context
    const [loginData,dispatch,isLogged,setIsLogged] = useContext(LoginContext);
    const [lang] = useContext(LangContext)
    //function for submiting data
    onSubmit = (data:dataContact)   => {
        dispatch({type:'ADD_USER',payload:{data:data}});
        initialContacts.forEach((contact:dataContact) =>{
            if(contact.email === data.email && contact.password === data.password){
                Router.push('/movies')
                setIsLogged(true);
                sessionStorage.setItem('logged','true')
                setErr('')
            }else{
                setErr('Email and password invalid, please try again.')
            }
        })
        
    }
    
    // implement function for showing or hidding password
    const showHidePassHandler = (e:any) : void =>{
        e.preventDefault()
        if(passwordVis === 'show'){
            setPasswordVis('hide')
        }else{
            setPasswordVis('show')
        }
    }

  return (
    <div className="form flex justify-center items-center min-h-[80vh] ">
        <form action="" className='flex flex-col w-[30rem] min-h-[65vh] bg-[#000000a9] pt-[3rem]  md:w-[100%] md:min-h-[80vh] md:bg-black' onSubmit={handleSubmit(onSubmit)}>
            <div className="signin-intro w-[70%] mx-auto">
                <h2 className='text-white text-[2rem] font-bold  md:text-[1.5rem]' >Sign In</h2>
            </div>
            <input autoComplete='off' data-testid="email-input" className='w-[70%] rounded-[0.3rem] mx-auto py-[0.8rem] my-[1rem] bg-[#333333] px-[1rem] text-white' type="email" placeholder={lang ==='en' ? "Email or phone number" : 'Email sau numar de telefon'} required {...register('email' ,{required: lang === 'en' ? 'Please enter a valid email adress or phone number.' : 'Introdu o adresa de e-mail valida sau un numar de telefon valabil.'})}/>
            <div className="password w-[70%] rounded-[0.3rem] mx-auto  bg-[#333333]  text-white relative">
                <input className='py-[0.8rem] px-[1rem] w-full bg-[#333333] ' data-testid="password-input" type={passwordVis === 'show' ? 'password' : 'text'} placeholder={lang ==='en' ? "Password" : 'Parola'} onClick={() => setPasswordBtn(true)} {...register('password',{required:true,minLength:8})} />
                
                {passwordBtn?
                <button  className='text-[#7f7d7d] absolute top-[50%] translate-y-[-50%]  right-[5%]' onClick={showHidePassHandler}>{passwordVis.toLocaleUpperCase()}</button>
                : ''}
            </div>
            <button type='submit' className='text-white bg-[#ff0000] w-[70%] mx-auto mt-[2.5rem] text-[1.1rem] font-bold py-[0.8rem] rounded-[0.3rem]' data-testid='submit-button' >{lang === 'en' ? "Sign In" : 'Conectare'}</button>
            <div className="remember-div text-[#B3B3B3] flex w-[70%] mx-auto justify-between pt-[0.8rem]">
                <div className="check-box">
                    <input type="checkbox" id='remember-check' className='' /> 
                    <label htmlFor="remember-check" className='text-[0.9rem] pl-[0.2rem]'>{lang === 'en' ? 'Remember me' : 'Memorare utilizator'} </label>
                </div>
                <div className="p text-[0.9rem]">{lang === 'en' ? 'Need help?' : 'Ai nevoie de ajutor ?'}</div>
            </div>
            <div className="signup text-[#7f7d7d] pt-[2rem] w-[70%] mx-auto flex">
                <p>{lang ==='en' ? 'Now to netflix?' : 'Esti nou pe netflix?'}</p>
                <p className='text-white pl-[0.3rem]'>{lang === 'en' ? 'Sign up now' : 'Inregistreaza-te acum'}</p>
            </div>
            <div className="captcha-descripton text-[#7f7d7d] w-[70%] mx-auto text-[0.8rem] pb-[2rem]">
                { lang ==='en' ? (<p className='py-[1rem]'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span onClick={() => setLearnButton(!learnButton)} className='text-[#0170DF] hover:underline cursor-pointer'> Learn more </span></p>) : (<p className='py-[1rem]'>Această pagină este protejată de Google reCAPTCHA pentru a vă asigura că nu sunteți un bot.<span onClick={() => setLearnButton(!learnButton)} className='text-[#0170DF] hover:underline cursor-pointer'> Detalii </span></p>)}
                {learnButton? lang === 'en'? 'The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).' : 'Informațiile colectate de Google reCAPTCHA sunt supuse Politicii de confidențialitate și Termenilor și condițiilor Google și sunt utilizate pentru furnizarea, întreținerea și îmbunătățirea serviciului reCAPTCHA și în scopuri generale de securitate (nu sunt utilizate pentru publicitate personalizată de către Google).' : ''}
            </div>
            <div className="error w-[70%] mx-auto">
                {err.length > 1 ? <p className="text-white">{err}</p> : ''}
            </div>
        </form>
    </div>
  )
}

export default SignInBody
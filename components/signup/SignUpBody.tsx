import React,{useContext} from 'react'
import Router from 'next/router';
import { NextPage } from 'next';
// yup and react hook form
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// context
import { RegisterContext } from 'contexts/registerContext';
import { dataContact,FormValues } from 'data';


const schema = yup.object().shape({
    password : yup.string().required()
});

async function saveContact(contact:any){
    const response = await fetch('/api/register',{
        method: 'POST',
        body:JSON.stringify(contact)
    });
    if(!response.ok){
        throw Error(response.statusText)
    }
    return await response.json();
}

const SignUpBody: NextPage = () : JSX.Element => {
    const [registerData,dispatch] = useContext(RegisterContext);
    const {register,handleSubmit} = useForm<FormValues>({
        resolver:yupResolver(schema)
    });
    const onSubmit = async (data:dataContact) =>{
        await saveContact({email:registerData,password:data.password});
        Router.push('/movies')
    }
    console.log(registerData)
  return (
    <div className="sign-up-zone mdx:mx-[1rem]">
    <h2 className='text-[2.5rem] font-bold pt-[4rem] md:text-[1.5rem]'>Welcome back! <br/> Joining Netflix is easy.</h2>
    <h6 className='text-[1.2rem] md:text-[1rem]'>Enter your password, and you'll be watching in no time.</h6>
    <p>Email:{registerData} </p>
    <form  className="form flex w-full flex-col "onSubmit={handleSubmit(onSubmit)}>
        <input className='w-full border-[1px] border-[#00000036] px-[0.5rem] py-[1rem] my-[1rem] rounded-[0.1rem]' type="text" placeholder='Enter your password'  id='password' {...register('password')}/>
            <button type='submit' className='w-full bg-[#E50914] text-white py-[1rem] rounded-[0.1rem] text-[1.3rem]'>Next</button>
    </form>
</div> 
  )
}

export default SignUpBody
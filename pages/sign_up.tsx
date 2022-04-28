import React from 'react';
import { NextPage } from 'next';
// importing components
import SignUpNav from '../components/signup/signupnav';
import SignUpBody from '../components/signup/SignUpBody';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
interface SignUpFunc{
  initialContacts:[]
}

export async function getServerSideProps(){
    const contact = await prisma.contact.findMany();
    return{
      props:{
        initialContacts: contact
      }
    }
  }



const SignUp:NextPage<SignUpFunc> = ({initialContacts}:{initialContacts:[]}) : JSX.Element => {
  
  return (
    <div>
        <SignUpNav/>
        <div className="registation w-full min-h-[90vh] flex flex-col  items-center">
        <SignUpBody/>
        </div>
    </div>
    
  )
}

export default SignUp
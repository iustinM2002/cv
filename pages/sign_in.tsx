import React from 'react';
import { NextPage } from 'next';
// components
import Footer from '../components/footer/footer';
import Nav from '../components/signin/signinNav';
// providers and prisma
import { LanguageProvider } from 'contexts/language';
import SignInBody from '../components/signin/sign_in_body';
import {LoginProvider} from 'contexts/loginContext';
import { PrismaClient } from '@prisma/client';

interface SignInProps{
  initialContacts:[],
  
}

const prisma = new PrismaClient()
export async function getServerSideProps(){
    const contact = await prisma.contact.findMany();
    return{
      props:{
        initialContacts: contact
      }
    }
  }

const SignIn:NextPage<SignInProps> = ({initialContacts}):JSX.Element => {
  let onSubmit:any;

  return (
    <LanguageProvider>
        <LoginProvider>
        <div id='intro'  className="border-b-[5px] border-[#383838]  bg-[url(../img/netflixbg.jpg)] bg-center bg-cover min-h-[80vh] bg-black ">
            <div className="bg-[#00000081] w-full min-h-[80vh]">
            <Nav  />
            <SignInBody initialContacts={initialContacts} onSubmit={onSubmit}/>
            </div>
            <Footer/>
        </div>
        </LoginProvider>
    </LanguageProvider>
  )
}

export default SignIn
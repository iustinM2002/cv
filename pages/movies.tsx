import React,{useContext,useEffect,useState} from 'react';
import { NextPage } from 'next';
// importing components
import Nav from '../components/movies_series/Nav';
import MoviesFirst from '../components/movies_series/movies_first';
import MoviesBody from '../components/movies_series/movies_body';
import Footer from '../components/footer/footer';
import Link from 'next/link';
import NotLogged from './notLogged';
// provider
import {MovieProvider} from 'contexts/MovieContext';
import { LoginContext } from 'contexts/loginContext';

const Movies:NextPage = (): JSX.Element => {
  const  [loginData,dispatch,isLogged,setIsLogged] = useContext(LoginContext);
  useEffect(() =>{
    setIsLogged(sessionStorage.getItem('logged'));

  },[]);
  
   
  return (
    <MovieProvider>
      {isLogged === 'true'? 
      <div className='bg-[#141414]' >
          <Nav/>
          <MoviesFirst/>
          <MoviesBody/>
          <Footer/>
      </div>
  : <NotLogged/> }
    </MovieProvider>
  )
}

export default Movies
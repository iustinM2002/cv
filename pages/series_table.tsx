import React,{useContext,useEffect} from 'react';
import Nav from '../components/movies_series/Nav';
import SeriesTableBody from '@/components/tables/series_table_body';
import Footer from '../components/footer/footer';
import { MovieProvider } from '../contexts/MovieContext';
import { LoginContext } from 'contexts/loginContext';
import NotLogged from './notLogged';
const SeriesTable = () => {
  const  [loginData,dispatch,isLogged,setIsLogged] = useContext(LoginContext);
  useEffect(() =>{
    setIsLogged(sessionStorage.getItem('logged'))
  })
  console.log(isLogged)
  return (
    <MovieProvider>
      {isLogged === 'true' ? 
    <div className='bg-black'>
        <Nav/>
        <SeriesTableBody/>
        <Footer/>
    </div> 
    : <NotLogged/>
    }
    </MovieProvider>
  )
}

export default SeriesTable
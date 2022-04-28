import React,{useEffect,useContext} from 'react';
// components
import Nav from '../components/movies_series/Nav';
import MovieTableBody from '../components/tables/movie_table_body';
import Footer from '../components/footer/footer';
import NotLogged from './notLogged';
// context and providers
import { MovieProvider } from '../contexts/MovieContext';
import { LoginContext } from 'contexts/loginContext';

const MovieTable = () => {
  const  [loginData,dispatch,isLogged,setIsLogged] = useContext(LoginContext);
  useEffect(() =>{
    setIsLogged(sessionStorage.getItem('logged'))
  })
  return (
    <MovieProvider>
      {isLogged === 'true' ? 
    <div className='bg-black'>
        <Nav/>
        <MovieTableBody/>
        <Footer/>
    </div>
    : <NotLogged/>}
    </MovieProvider>
  )
}

export default MovieTable
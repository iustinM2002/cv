import React,{useState,useContext} from 'react';
import { NextPage } from 'next';
// framer motion
import { motion } from 'framer-motion';
// context
import { MovieContext } from 'contexts/MovieContext';

const MovieSerie:NextPage<{movie_serie:any}> = ({movie_serie}) : JSX.Element => {
    const {selectedMovies} = useContext(MovieContext);
    const [isSelected,setIsSelected,selectedMovie,setSelectedMovie] = selectedMovies;
    // select movie to appear on double click
    const selectMovieHandler = () =>{
       setIsSelected(true);
       setSelectedMovie(movie_serie)
    }

    return (
      <motion.div onDoubleClick={selectMovieHandler} className='movie w-[500px] min-h-[150px] bg-cover bg-center mx-[0.1rem] cursor-grab'  style={{backgroundImage: "url(\"https://image.tmdb.org/t/p/original" + movie_serie.backdrop_path + "\")"}} ></motion.div>
    )
}

export default MovieSerie;
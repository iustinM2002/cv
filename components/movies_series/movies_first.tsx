import React,{useContext} from 'react';
import { NextPage } from 'next';
// context
import { MovieContext } from 'contexts/MovieContext';

const MoviesFirst: NextPage = () : JSX.Element => {
    const {moviesSeries} = useContext(MovieContext);
    const [movie] = moviesSeries;
    if(movie.isLoading){
        return <div>...Loading</div>
    }

    return (
      <div className='min-h-[60vh] w-full bg-cover text-white flex flex-col justify-end lg:min-h-[60vh] md:bg-center'  style={{backgroundImage: "url(\"https://image.tmdb.org/t/p/original" + movie.data.backdrop_path + "\")"}}>
              <h3 className='text-white  bottom-[2rem] left-[2rem] text-[2rem] px-[2rem] '>{movie.data.original_title}</h3>
              <p className='w-[50%] px-[2rem] pb-[5rem] pt-[1rem] md:w-full'>{movie.data.overview}</p>
      </div>
    )
}

export default MoviesFirst
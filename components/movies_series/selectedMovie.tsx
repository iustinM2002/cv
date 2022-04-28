import React,{useContext} from 'react';
import { NextPage } from 'next';
// context
import { MovieContext } from 'contexts/MovieContext';

const SelectedMovie:NextPage = (): JSX.Element => {
    // deconstruct movie context
    const {selectedMovies} = useContext(MovieContext);
    const [isSelected,setIsSelected,selectedMovie,setSelectedMovie] = selectedMovies;
    
    return (
        <div className='fixed bg-black w-[500px] min-h-[50vh] md:w-full md:rounded-none top-[50%] translate-y-[-50%]  translate-x-[-50%] left-[50%] z-10 text-white rounded-[1rem]'>
            <div className="relative image w-[500px] md:w-full min-h-[200px] bg-cover rounded-t-[1rem] md:rounded-none " style={{backgroundImage: "url(\"https://image.tmdb.org/t/p/original" + selectedMovie.backdrop_path + "\")"}}>
            <div className="close absolute bg-black px-[0.5rem] top-[1rem] right-[1rem] cursor-pointer rounded-[0.5rem]" onClick={() => setIsSelected(false)}>X</div></div>
            <div className="text p-[2rem]  ">
                <h2 className='py-[2rem]'>{selectedMovie.original_title || selectedMovie.original_name}</h2>
                <p>{selectedMovie.overview}</p>
            </div>
        </div>
    )
}

export default SelectedMovie
import React,{useContext,useRef,useEffect,useState} from 'react';
import { NextPage } from 'next';
// components
import MovieSerie from './movie_serie';
import SelectedMovie from './selectedMovie';
// context
import { MovieContext } from 'contexts/MovieContext';
import { motion } from 'framer-motion';
import MovieLoading from './movie_loading';
// uuid 
import { uuid } from 'uuidv4';

const MoviesBody:NextPage = ():JSX.Element => {
    interface refElement {
        current:HTMLDivElement
    }
    // deconstruct context
    const {moviesSeries,selectedMovies}= useContext(MovieContext);
    const [movie,popularMovies,topMovies,comingMovies,actionMovies,popularSeries,topSeries] = moviesSeries;
    const [isSelected] = selectedMovies;
    // use ref for the sliders
    const carousel1 = useRef() as refElement;
    const carousel2 = useRef() as refElement;
    // state for carousel slider width
    const [width,setWidth] = useState<number>(0);
    const [extendedWidth,setExtendedWidth] = useState<number>(0);
    // object containing movies and series data
    const dataMovieSerie = [
        {
            title:'Popular Movies',
            data:popularMovies.data.results,
        },{
            title:'Top Movies',
            data:topMovies.data.results,
        }
        ,{
            title:'Coming Movies',
            data:comingMovies.data.results,
        }
        ,{
            title:'Top Series',
            data:topSeries.data.results,
        }
        ,{
            title:'Popular Series',
            data:popularSeries.data.results,
        }
    ];

    const extendedDataMovieSerie = [
       {
            title:'Action Movies',
            data:actionMovies.data.items,
            extended_width:true
        }
    ]
    useEffect(()=>{
        setTimeout(()=>
        {
            // setting first witdh for framer motion dragconstraints
            setWidth(carousel1.current.scrollWidth - carousel1.current.offsetWidth)
            setExtendedWidth(carousel2.current.scrollWidth - carousel2.current.offsetWidth)
        },2000)
        
    },[]);
    if(popularMovies.isLoading || movie.isLoading || topMovies.isLoading || comingMovies.isLoading   || popularSeries.isLoading || topSeries.isLoading){
        return <div><MovieLoading/></div>
    }
   
  return (
    <div  className='min-h-[100vh] overflow-hidden relative w-full'>
        
        <div className='w-full' ref={carousel1}>
        {dataMovieSerie.map(obj =>(
            <>
                <div   className="movies-category-text text-white px-[2rem] py-[1rem] text-[1.5rem] w-full" >
                    <h3>{obj.title}</h3>

                </div>
                <motion.div    drag='x' dragConstraints={{right:0,left: -width}} className='movies flex w-[4500px]' onClick={()=> setWidth(carousel1.current.scrollWidth - carousel1.current.offsetWidth)}  >
                    {obj.data.map((movie:any) => <MovieSerie key={uuid()}  movie_serie={movie}/> )}

                </motion.div>
            </>
        ))}
        </div>
        <div ref={carousel2}  className='w-full'>

        {extendedDataMovieSerie.map(obj =>(
            <>
            <div className="movies-category-text text-white px-[2rem] py-[1rem] text-[1.5rem]" >
                <h3>{obj.title}</h3>

            </div>
            <motion.div   drag='x' dragConstraints={{right:0,left: -extendedWidth}} className='movies flex w-[21000px]' onClick={()=> setWidth(carousel2.current.scrollWidth - carousel2.current.offsetWidth)}  >
            {obj.data.map((movie:any) => <MovieSerie key={uuid()}  movie_serie={movie}/> )}

            </motion.div>
        </>
        ))}
        </div>
        
        {isSelected ? <SelectedMovie/> : ''}
        

    </div>
  )
}

export default MoviesBody
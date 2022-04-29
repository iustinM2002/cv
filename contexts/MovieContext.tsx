import {createContext,useState} from 'react';
import { useQuery,dehydrate,QueryClient } from 'react-query';
import MovieLoading from '../components/movies_series/movie_loading'

let initValue:any;
export const MovieContext =  createContext(initValue);
// fetching movies api s
const firstMovie = async () => await(await fetch('https://api.themoviedb.org/3/movie/550?api_key=8550cbc503198174b8c1f43b78c9cb14')).json();
const MovieApi:any= async ({queryKey}:{queryKey:any}) => await(await fetch(`https://api.themoviedb.org/3/movie/${queryKey[0]}?api_key=8550cbc503198174b8c1f43b78c9cb14&language=en-US&page=1`)).json();
const actionMoviesApi = async () => await(await fetch(`https://api.themoviedb.org/3/list/28?api_key=8550cbc503198174b8c1f43b78c9cb14&language=en-US`)).json();
// fetching series api 's
const SeriesApi:any = async ({queryKey}:{queryKey:any}) => await(await fetch(`https://api.themoviedb.org/3/tv/${queryKey[0]}?api_key=8550cbc503198174b8c1f43b78c9cb14&language=en-US&page=1`)).json();

export const MovieProvider = (props:any) => {
  // movies  querry 
  const movie = useQuery('movie',firstMovie);
  const popularMovies = useQuery(['popular','movie'],MovieApi);
  const topMovies = useQuery(['top_rated','movie'],MovieApi);
  const comingMovies = useQuery(['upcoming','movie'],MovieApi);
  const actionMovies = useQuery('action_movies',actionMoviesApi)

  // series querry s
  const popularSeries = useQuery(['popular','series'],SeriesApi);
  const topSeries = useQuery(['top_rated','series'],SeriesApi);
  console.log(comingMovies.data)
  
  // states for showing movie details when double click
  const [selectedMovie,setSelectedMovie] = useState<{}>({});
  const [isSelected,setIsSelected] = useState<Boolean>(false);

  if(popularMovies.isLoading || movie.isLoading || topMovies.isLoading || comingMovies.isLoading || comingMovies.isLoading ||actionMovies.isLoading  || popularSeries.isLoading || topSeries.isLoading  ){
    return <div><MovieLoading/></div>
  }
  return (
    <MovieContext.Provider value={{moviesSeries:[movie,popularMovies,topMovies,comingMovies,actionMovies,popularSeries,topSeries],selectedMovies:[isSelected,setIsSelected,selectedMovie,setSelectedMovie],dataMoviesSeries:{}}}>
      {props.children}
    </MovieContext.Provider>
  )
}

export async function getStaticProps(){
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('movie',firstMovie);
  await queryClient.prefetchQuery('popular_movies',MovieApi);
  await queryClient.prefetchQuery('top_movies',MovieApi);
  await queryClient.prefetchQuery('coming_movies',MovieApi);
  await queryClient.prefetchQuery('popular_series',SeriesApi);
  await queryClient.prefetchQuery('top_series',SeriesApi);


  return{
    props:{
      dehydratedState: dehydrate(queryClient)
    }
  }
}


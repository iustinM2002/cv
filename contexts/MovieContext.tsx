import {createContext,useState} from 'react';
import { useQuery,dehydrate,QueryClient } from 'react-query';
import MovieLoading from '../components/movies_series/movie_loading'

let initValue:any;
// fetching movies api s
const firstMovie = async () => await(await fetch('https://api.themoviedb.org/3/movie/550?api_key=8550cbc503198174b8c1f43b78c9cb14')).json();
const popularMoviesApi= async () => await(await fetch('https://api.themoviedb.org/3/movie/popular?api_key=8550cbc503198174b8c1f43b78c9cb14&language=en-US&page=1')).json();
const topMoviesApi = async () => await(await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=8550cbc503198174b8c1f43b78c9cb14&language=en-US&page=1')).json();
const comingMoviesApi = async () => await(await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=8550cbc503198174b8c1f43b78c9cb14&language=en-US&page=1')).json();
const actionMoviesApi = async () => await(await fetch(`https://api.themoviedb.org/3/list/28?api_key=8550cbc503198174b8c1f43b78c9cb14&language=en-US`)).json();



// fetching series api 's
const popularSeriesApi = async () => await(await fetch('https://api.themoviedb.org/3/tv/popular?api_key=8550cbc503198174b8c1f43b78c9cb14&language=en-US&page=1')).json();
const topSeriesApi = async () => await(await fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=8550cbc503198174b8c1f43b78c9cb14&language=en-US&page=1')).json();
const comingSeriesApi = async () => await(await fetch('https://api.themoviedb.org/3/tv/latest?api_key=8550cbc503198174b8c1f43b78c9cb14&language=en-US&page=1')).json();
export const MovieContext =  createContext(initValue);

export const MovieProvider = (props:any) => {
  // movies  querry s
  const arr = [];
  const movie = useQuery('movie',firstMovie);
  const popularMovies = useQuery('popular_movies',popularMoviesApi);
  const topMovies = useQuery('top_movies',topMoviesApi);
  const comingMovies = useQuery('coming_movies',comingMoviesApi);
  const actionMovies = useQuery('action_movies',actionMoviesApi)

  // series querry s
  const popularSeries = useQuery('popular_series',popularSeriesApi);
  const topSeries = useQuery('top_series',topSeriesApi);
 
  const comingSeries = useQuery('coming_series',comingSeriesApi);
  // states for showing a movie details when double click
  const [selectedMovie,setSelectedMovie] = useState<{}>({});
  const [isSelected,setIsSelected] = useState<Boolean>(false);

  if(popularMovies.isLoading || movie.isLoading || topMovies.isLoading || comingMovies.isLoading || comingMovies.isLoading ||actionMovies.isLoading  || popularSeries.isLoading || topSeries.isLoading || comingSeries.isLoading  ){
    return <div><MovieLoading/></div>
  }
  return (
    <MovieContext.Provider value={{moviesSeries:[movie,popularMovies,topMovies,comingMovies,actionMovies,popularSeries,topSeries,comingSeries],selectedMovies:[isSelected,setIsSelected,selectedMovie,setSelectedMovie],dataMoviesSeries:{}}}>
      {props.children}
    </MovieContext.Provider>
  )
}

export async function getStaticProps(){
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('movie',firstMovie);
  await queryClient.prefetchQuery('popular_movies',popularMoviesApi);
  await queryClient.prefetchQuery('top_movies',topMoviesApi);
  await queryClient.prefetchQuery('coming_movies',comingMoviesApi);
  await queryClient.prefetchQuery('popular_series',popularSeriesApi);
  await queryClient.prefetchQuery('top_series',topSeriesApi);
  await queryClient.prefetchQuery('coming_series',comingSeriesApi);
  
  return{
    props:{
      dehydratedState: dehydrate(queryClient)
    }
  }
}


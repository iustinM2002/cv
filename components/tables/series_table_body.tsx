import React,{useContext} from 'react';
import { MovieContext } from '../../contexts/MovieContext';
// importing components
import TableLayout from './table_layout';
const SeriesTableBody = () => {
    const {moviesSeries}= useContext(MovieContext);
    const [movie,popularMovies,topMovies,comingMovies,actionMovies,popularSeries,topSeries,comingSeries] = moviesSeries;
    const movies= [...popularSeries.data.results,...topSeries.data.results]
    
    
    return (
    <div className='min-h-[100vh]'>
        <TableLayout movies={movies} />
            
    </div>
  )
}

export default SeriesTableBody
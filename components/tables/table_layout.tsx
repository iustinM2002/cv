import React,{useMemo} from 'react';
// react table
import {useFilters, useGlobalFilter, useSortBy, useTable,usePagination} from 'react-table';
import GlobalFilter from './GlobalFilter';
// uuid
import { uuid } from 'uuidv4';

type TableColumns = {
    Header:string,
    accessor:string
}[];

const TableLayout = ({movies}:{movies:any}) => {

const data = useMemo(() => 
    movies.map((movie:any) => {
        return {
        col1:movie.original_title || movie.original_name,
        col2:movie.overview,
        col3:movie.original_language.toUpperCase(),
        col4:movie.vote_average,

        }
    }
), []);

const columns:TableColumns | any = useMemo(() =>[
    {
        Header:'Name',
        accessor:'col1'
    },{
        Header:'Overview',
        accessor:'col2'
    
    },{
        Header:'Lang',
        accessor:'col3'
    
    },{
        Header:'Rating',
        accessor:'col4'
    }
],[]);

const tableIntance = useTable({columns,data}, useFilters,useGlobalFilter,useSortBy,usePagination);
const {getTableProps,getTableBodyProps,headerGroups,page,prepareRow,state,setGlobalFilter,nextPage,previousPage,canNextPage,canPreviousPage} = tableIntance;
const {globalFilter} = state;

  return (
    <div className='pt-[5rem] bg-black text-white'>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        <table className='' {...getTableProps()}>
            <thead className='w-full  '>
                {headerGroups.map(headerGroup => (
                <tr className='flex justify-around w-full items-center min-h-[10vh]' {...headerGroup.getHeaderGroupProps()}>
                    {
                        headerGroup.headers.map(column =>(
                        <th className='px-[2rem]' {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
                        ))}
                </tr>
                 ))}
            </thead>
            <tbody  className='' {...getTableBodyProps()}>
                {page.map((row:any) =>{
                    prepareRow(row)
                        return(
                            <tr key={uuid()} className='bg-cover bg-center text-white ' style={{backgroundImage: "url(\"https://image.tmdb.org/t/p/original" + movies[row.id].backdrop_path + "\")"}}  {...row.getRowProps()}>
                                <div className='flex  min-h-[300px] border-[1px] border-[#ffffff98]  w-full bg-[#00000094] justify-center items-center px-[5rem] text-center lg:flex-col'>
                                {row.cells.map((cell:any) =>{
                                    return(
                                        <td  className='w-full p-[1rem]'    >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                                </div>
                            </tr> )})}
            </tbody>
        </table>
        <div className="buttons flex justify-center min-h-[10vh] items-center">
            <div className="button bg-[#9e0404] rounded-[0.1rem] hover:bg-[#6d0c0c] transition-all">
                <button className='px-[1rem] py-[0.5rem] '  onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
            </div>
            <div className="button bg-[#9e0404] mx-[1rem] rounded-[0.1rem] hover:bg-[#6d0c0c] transition-all">
                <button className='px-[2rem] py-[0.5rem] '  onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
            </div>
        </div>
    </div>)
//   style={{backgroundImage: "url(\"https://image.tmdb.org/t/p/original" + movies[index].backdrop_path + "\")"}}  {...row.getRowProps()}
}

export default TableLayout
import React from 'react'

const GlobalFilter = ({filter,setFilter}:{filter:any,setFilter:any}) => {
  return (
    <span className='text-white w-full flex justify-center mt-[3rem]'>
        Search  :{''}
        <input className='mx-[2rem] text-black'  value={filter || ''} onChange={e => setFilter(e.target.value)}/>
    </span>
  )
}

export default GlobalFilter
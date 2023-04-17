import React from 'react'

const MovieInfo = ({movie}) => {
  return (
    <div className='w-full xl:h-screen relative text-white'>
    <img  src={`/images/Movies/${movie?.image}`} alt="hello" className='w-full hidden xl:inline-block h-full object-cover'
    />
    </div>
  )
}

export default MovieInfo
import React from 'react'

const MovieInfo = ({movie}) => {
  return (
    <div className='w-full xl:h-screen relative text-white'>
    <img  src={`/images/Movies/${movie?.image}`} alt={movie?.name} 
    className='w-full hidden xl:inline-block h-full object-cover'
    />
    <div className='xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 bottom-0 right-0 left-0 '>
        <div className='container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8 '>
        <div className='w-70 xl:col-span-1  xl:order-none order-last h-header bg-dry border  border-gray-800 rounded-lg overflow-hidden'>
<img src={`/images/BannerImages/${movie?.titleImage}`} alt={movie.name}
    className='w-full h-full object-cover'
/>
   </div>
        </div>
   
    </div>
    </div>
  )
}

export default MovieInfo
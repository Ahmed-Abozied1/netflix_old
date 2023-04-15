import React from 'react'
import Layout from '../layout/Layout'
import Filters from '../components/Filters'
import Movie from "../components/Movie";
import {Movies} from "../Data/MovieData"
const MoviesPage = () => {
  return (
    <Layout>
    <div className='min-h-screen container mx-auto px-2 my-2'>
    <Filters/>
      <p className='text-lg font-medium my-6'>
        Total <span className='font-bold text-submain'>
          {Movies?.length}
        </span>{" "} items Found
      </p>
      <div className='grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6  '>

        {Movies.map((movie,index)=>(
<Movie key={index} movie={movie}/>
        ))}
      </div>
    </div>
        </Layout>
  )
}

export default MoviesPage
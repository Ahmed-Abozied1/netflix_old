import React from 'react'
import { useParams } from 'react-router-dom'
import { Movies } from '../Data/MovieData';
import Layout from '../layout/Layout';
import MovieInfo from "../components/Single/MovieInfo"
import MovieCasts from '../components/Single/MovieCasts';
import MovieRate from '../components/Single/MovieRate';
const SingleMovie = () => {
  const {id}=useParams();
  const movie=Movies.find((movie)=>movie.name===id);

  return (
 

<Layout>
<MovieInfo movie={movie}/>
<div className='container mx-auto min-h-screen px-2 my-6'>
  <MovieCasts/>
  {/* rate */}
  <MovieRate movie={movie}/>
</div>
</Layout>
 
  )
}

export default SingleMovie
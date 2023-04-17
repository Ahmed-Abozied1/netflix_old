import React from 'react'
import { useParams } from 'react-router-dom'
import { Movies } from '../Data/MovieData';
import Layout from '../layout/Layout';
import MovieInfo from "../components/Single/MovieInfo"
const SingleMovie = () => {
  const {id}=useParams();
  const movie=Movies.find((movie)=>movie.name===id);

  return (
 

<Layout>
<MovieInfo movie={movie}/>
</Layout>
 
  )
}

export default SingleMovie
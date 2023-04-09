import React from 'react'
import Layout from '../layout/Layout'
import Filters from '../components/Filters'

const MoviesPage = () => {
  return (
    <Layout>
    <div className='min-h-screen container mx-auto px-2 my-2'>
    <Filters/>
      
    </div>
        </Layout>
  )
}

export default MoviesPage
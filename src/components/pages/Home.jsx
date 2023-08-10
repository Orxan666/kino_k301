import React from 'react'
import HeroSlider from '../hero-slider/HeroSlider'
import MovieGrid from '../movie-grid/MovieGrid'

const Home = () => {
  return (
    <div>
<HeroSlider/>
<MovieGrid type={'movie'}/>
<MovieGrid type={'tv'}/>
    </div>
  )
}

export default Home
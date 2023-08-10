import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/Home'
import Catalog from '../components/pages/Catalog'
import TvShow from '../components/pages/TvShow'
import MyDetail from '../components/pages/MyDetail'

const MyRoutes = () => {
  return (
    <Routes>

<Route path='/' element={<Home/>}/>
<Route path='/catalog' element={<Catalog/>}/>
<Route path='/tv-show' element={<TvShow/>}/>
<Route path='/movie/:id/' element={<MyDetail/>}/>

    </Routes>
  )
}

export default MyRoutes
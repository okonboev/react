import React from 'react'
import Navbar from '../component/Navbar'
import Homes from '../component/Homes'
import Contact from '../component/Contact'
import Category from '../component/Category'
import About from '../component/About'
import News from '../component/News'
import Sport from '../component/Sport'
import {Route, Routes} from 'react-router-dom'
import Error from '../component/Error'

function Root() {
  return (
    <div>
      {/* <Navbar/> */}
      <Routes>
        <Route element={<Navbar/>}>
          <Route  path={'/'} element={<Homes />}/>
          <Route path={'/home'} element={<Homes/>}/>
          <Route path={'/contact'} element={<Contact/>}/>
          <Route path={'/category'} element={<Category/>}/>
          <Route path={'/about'} element={<About/>}/>
          <Route path={'/news'} element={<News/>}/>
          <Route path={'/sport'} element={<Sport/>}/>
        </Route>
        <Route exact path={'*'} element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default Root
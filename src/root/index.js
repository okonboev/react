import React from 'react'
import Navbar from '../component/Navbar'
import Homes from '../component/Homes'
import Contact from '../component/Contact'
import Category from '../component/Category'
import About from '../component/About'
import News from '../component/News'
import Sport from '../component/Sport'
import {Route, Switch} from 'react-router-dom'
import Error from '../component/Error'
 

function Root() {
  return (
    <div>
      
      <Switch>
        <Route exact path={'/'} component={Navbar}/> 
        <Route path={'/home'} component={Navbar}/>
        <Route path={'/contact'} component={Navbar}/>
        <Route path={'/category'} component={Navbar}/>
        <Route path={'/about'} component={Navbar}/>
        <Route path={'/news'} component={Navbar}/>
        <Route path={'/sport'} component={Navbar}/>
        {/* <Route exact path={'*'} component={Error}/> */}
      </Switch>
      
      <Switch>
        {/* <Route exact path={'/'} component={Homes}/> */}
        <Route exact path={'/'}>
          <Homes />
        </Route>
        <Route path={'/home'} component={Homes}/>
        <Route path={'/contact'} component={Contact}/>
        <Route path={'/category'} component={Category}/>
        <Route path={'/about'} component={About}/>
        <Route path={'/news'} component={News}/>
        <Route path={'/sport'} component={Sport}/>
        <Route exact path={'*'} component={Error}/>
      </Switch>
    </div>
  )
}

export default Root
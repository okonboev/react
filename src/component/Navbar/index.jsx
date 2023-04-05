import React from 'react'
import {Container} from './styled'
import {Link} from './styled'
import {NavLink, Outlet} from 'react-router-dom'

function Navbar() {
  // const active = (url) => {
  //    return window.location.pathname.includes(url)
  // }
  return (
    <>
    <Container>
        <NavLink style={({isActive})=>{return {color:isActive?"red":"white"}}}  to={'/'}>Logo</NavLink>
        <NavLink style={({isActive})=>{return {color:isActive?"red":"white"}}}  to={'/home'}>Home</NavLink>
        <NavLink style={({isActive})=>{return {color:isActive?"red":"white"}}}  to={'/contact'}>Contact</NavLink>
        <NavLink style={({isActive})=>{return {color:isActive?"red":"white"}}}  to={'/category'}>Category</NavLink>
        <NavLink style={({isActive})=>{return {color:isActive?"red":"white"}}}  to={'/about'}>About</NavLink>
        <NavLink style={({isActive})=>{return {color:isActive?"red":"white"}}}  to={'/news'}>News</NavLink>
        <NavLink style={({isActive})=>{return {color:isActive?"red":"white"}}}  to={'/sport'}>Sport</NavLink>
    </Container>
    <Outlet/>
    </>
  )
}

export default Navbar
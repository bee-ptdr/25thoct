import React from 'react'
import Section from './Section'
import Navbar from '../Layout/Navbar'
import Slids from './Slids';

// import { Link } from 'react-router-dom';

function Show() {
  // const getAddRest = () => {
  //   let getRest = localStorage.getItem('restList');
  //   if (getRest) {
  //     return JSON.parse(getRest)
  //   } else {
  //     return []
  //   }
  // }
  // const getRestaurent = getAddRest();
  // console.log(getRestaurent)
  return (
    <>
      <Navbar/>
      <Slids/>
      <Section />
    </>
  )
}

export default Show

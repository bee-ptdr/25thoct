import React from 'react';
import Section from './Section';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Layout/Navbar';



export default function Home() {
  const navigate = useNavigate()
  const handleLogout = ()=>{
    navigate('/')
  }
  const getLoginProfile = ()=>{
    let getlogPro = localStorage.getItem('loginProfile');
    if(getlogPro){
      return JSON.parse(getlogPro)
    }else{
      return[]
    }
  }
  const showProfile = getLoginProfile();
  // console.log(showProfile)
  return (
    <>
    <Navbar/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="img-bar">
              <img src="img/caurosal1.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card " style={{ width: '18rem' }}>
              <img src="img/caurosal2.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                {
                  showProfile.map((ele,index)=>{
                   return(
                    <h5 className="card-title" key={index}>{ele.name} </h5>
                   )

                  })
                }
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/" className="btn btn-primary w-100" onClick={handleLogout}>Logout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section/>

    </>
  )
}

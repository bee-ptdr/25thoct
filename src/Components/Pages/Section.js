import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Section() {
    // const getAddRest = () => {
    //     let getRest = localStorage.getItem('restList');
    //     if (getRest) {
    //       return JSON.parse(getRest)
    //     } else {
    //       return []
    //     }
    //   }
      // const getRestaurent = getAddRest();
    //   console.log(getRestaurent)
    const [getRestaurent,setGetRestaurent] = useState([])
    useEffect(()=>{
      getItem()

    },[])
    const getItem = async ()=>{
      await axios.get("http://localhost:3000/posts").then((res)=>{
         console.log(res.data);
         setGetRestaurent(res.data)
       })
     }
      return (
        <>
          <section>
            <div className="container">
              <div className="section-text text-center mt-5">
                <h6>OUR RESTAURENTS</h6>
              </div>
              <div className="section-card">
                <div className="row">
                  {
                    getRestaurent.map((element, index) => {
                      return (
                        <div className="col-md-4 mt-3" key={index}>
                          <div className="card"  style={{ width: '18rem' }}>
                            <img src="img/caurosal2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                              <h5 className="card-title">{element.restName}</h5>
                              <p className="card-title">{element.address}</p>
                              <p className="card-title">{element.contact}</p>
                              <p className="card-title">Time : 10 AM - 10 PM</p>
                              <Link to="#" className="btn btn-primary">Know More..</Link>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </section >
    
          {/* <Section /> */}
        </>
      )
}

export default Section

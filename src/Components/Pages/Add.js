import React, { useEffect, useState } from 'react'
import Navbar from '../Layout/Navbar';
import axios from 'axios';

function Add() {


    const getAddRest = () => {
        let restList = localStorage.getItem('restList');
        if (restList) {
            return JSON.parse(restList)
        } else {
            return []
        }
    }

    const [addRest, setAddRest] = useState({
        "restName": "",
        "restOwnName": "",
        "contact": "",
        "altContact": "",
        "address": "",
        "city": "",
        "zip": ""
    }
    );
    const [restArray, setRestArray] = useState(getAddRest())


    const handleChange = (e) => {
        setAddRest({ ...addRest, [e.target.name]: e.target.value })
    }

    const handleAddRestaurent = (e) => {
        e.preventDefault()

        let number = Math.round(
            Math.random() * 9000 + 1000
        )
        let data = {
            "id": number,
            "restName": addRest.restName,
            "restOwnName": addRest.restOwnName,
            "contact": addRest.contact,
            "altContact": addRest.altContact,
            "address": addRest.address,
            "city": addRest.city,
            "zip": addRest.zip
        }

        console.log(data)

        setRestArray([...restArray,data]);
        axios.post("http://localhost:3000/posts",addRest)
            // console.log(res.data)

        setAddRest({
            restName : "",
            restOwnName : "",
            contact : "",
            altContact : "",
            address : "",
            city : "",
            zip : ""
        })
    }
    // console.log(restArray)
    // useEffect(() => {
    //     localStorage.setItem('restList', JSON.stringify(restArray))
    // }, [restArray])

    return (
        <>
            <Navbar />
            <div className="container">
                <form className="row g-3 mt-3">
                    <div className="col-md-6">
                        <label htmlFor="inputName" className="form-label">Restaurent Name</label>
                        <input type="text" className="form-control" name='restName' value={addRest.restName} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputOwn" className="form-label" >Restaurent Owner Name</label>
                        <input type="text" className="form-control" name='restOwnName' value={addRest.restOwnName} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputContact" className="form-label">Contact No.</label>
                        <input type="text" className="form-control" name='contact' value={addRest.contact} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label" >Alt Contact No.</label>
                        <input type="text" className="form-control" name='altContact' value={addRest.altContact} onChange={handleChange} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" placeholder="1234 Main St" name='address' value={addRest.address} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" name='city' value={addRest.city} onChange={handleChange} />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" name='zip' value={addRest.zip} onChange={handleChange} />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={handleAddRestaurent}>Add Restaurent</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Add

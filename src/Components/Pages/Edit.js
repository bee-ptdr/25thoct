import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';


function Edit() {
    // const [ab,setAb] = useState(null);

    let [editItem, setEditItem] = useState(
        {
            restName: "",
            restOwnName: "",
            contact: "",
            altContact: "",
            address: "",
            city: "",
            zip: ""
        }
    )
    let [ind, setIndex] = useState()
 
   
    const [getRestaurent, setGetRestaurent] = useState(() => {
        let getRest = localStorage.getItem('restList');
        if (getRest != null) {
            return JSON.parse(getRest)
        } else {
            return []
        }
    })

    const handleDelete = (id) => {     
        const deleteItem = getRestaurent.filter((e,ind) => {
            return ind !== id
        });
        setGetRestaurent(deleteItem)
    }

    const handleEdit = (i) => {
        setIndex(i)
        let newEditRest = getRestaurent.filter((e, index) => {
            return i === index
        })
        setEditItem(
            {
                restName: newEditRest[0].restName,
                restOwnName: newEditRest[0].restOwnName,
                contact: newEditRest[0].contact,
                altContact: newEditRest[0].altContact,
                address: newEditRest[0].address,
                city: newEditRest[0].city,
                zip: newEditRest[0].zip
            }
        )
    }

    const handleEditSave = () => {
        getRestaurent[ind] = editItem;
        setGetRestaurent(getRestaurent);
        localStorage.setItem('restList', JSON.stringify(getRestaurent))
        setEditItem(
            {
                restName: "",
                restOwnName: "",
                contact: "",
                altContact: "",
                address: "",
                city: "",
                zip: ""
            }
        )

    }
    const handleOnchange = (e) => {
        setEditItem({ ...editItem, [e.target.name]: e.target.value })
    }


    useEffect(() => {
        localStorage.setItem('restList', JSON.stringify(getRestaurent))
    }, [getRestaurent])
    return (

        <>
            <Navbar />
            <section>
                <div className="container">
                    <div className="section-text text-center mt-5">
                        <h6>OUR RESTAURENTS</h6>
                    </div>
                    <div className="section-card mt-5">
                        <div className="row">
                            {
                                getRestaurent?.map((element, index) => {
                                    return (
                                        <div className="col-md-4" key={index}>
                                            <div className="card" style={{ width: '18rem' }}>
                                                <img src="img/caurosal2.jpg" className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{element.restName}</h5>
                                                    <p className="card-title">{element.address}</p>
                                                    <p className="card-title">{element.contact}</p>
                                                    <p className="card-title">Time : 10 AM - 10 PM</p>
                                                    <Link to="#" className="btn btn-primary me-3" onClick={() => handleDelete(index)}>Delete</Link>
                                                    <Link to="/ModalPopUp" className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { handleEdit(index) }}>Edit</Link>
                                                    {/* <------Modal PopUp start------> */}
                                                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Your Restaurent</h1>
                                                                    {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /> */}
                                                                </div>
                                                                <div className="modal-body">
                                                                    <div className="container">
                                                                        <form className="row g-3 mt-3">
                                                                            <div className="col-md-6">
                                                                                <label htmlFor="inputEmail4" className="form-label">Restaurent Name</label>
                                                                                <input type="text" className="form-control" name='restName'
                                                                                    value={editItem.restName} onChange={handleOnchange} />
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <label htmlFor="inputPassword4" className="form-label">Restaurent Owner Name</label>
                                                                                <input type="text" className="form-control" name='restOwnName'
                                                                                    value={editItem.restOwnName} onChange={handleOnchange} />
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <label htmlFor="inputEmail4" className="form-label">Contact No.</label>
                                                                                <input type="text" className="form-control" name='contact'
                                                                                    value={editItem.contact} onChange={handleOnchange} />
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <label htmlFor="inputPassword4" className="form-label">Alt Contact No.</label>
                                                                                <input type="text" className="form-control" name='altContact'
                                                                                    value={editItem.altContact} onChange={handleOnchange} />
                                                                            </div>
                                                                            <div className="col-12">
                                                                                <label htmlFor="inputAddress" className="form-label">Address</label>
                                                                                <input type="text" className="form-control" placeholder="1234 Main St" name='address'
                                                                                    value={editItem.address} onChange={handleOnchange} />
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <label htmlFor="inputCity" className="form-label">City</label>
                                                                                <input type="text" className="form-control" name='city'
                                                                                    value={editItem.city} onChange={handleOnchange} />
                                                                            </div>
                                                                            <div className="col-md-3">
                                                                                <label htmlFor="inputZip" className="form-label">Zip</label>
                                                                                <input type="text" className="form-control" name='zip' value={editItem.zip} onChange={handleOnchange} />
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                    <button type="button" className="btn btn-primary" onClick={handleEditSave}>Save changes</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <------Modal PopUp end------> */}
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Edit

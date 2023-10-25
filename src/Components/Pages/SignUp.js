import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const content = {
        backgroundColor: "black",
        padding: "25px",
        borderRadius: "10px",
        marginTop : '40px'
    }
    const formInput = {
        width: "100%",
        borderRadius: "50px",
        border: "none",
        padding: "8px 10px",
        outline: "none"
    }
    const mainSection = {
        width: "100wh",
        height: "100vh",
        backgroundImage: 'url("img/caurosal2.jpg")',
        backgroundSize: 'cover', // You can adjust these properties as needed
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
    }

    const getLocalItem = () => {
        let data = localStorage.getItem("list")
        if (data) {
            return JSON.parse(data)
        } else {
            return []
        }
    }


    let [myArray, setMyArray] = useState(getLocalItem())

    const navigate = useNavigate();

    const [user, setUser] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleSignUp = () => {
        let existEmail = myArray.filter((item) => {
            return item.email === user.email
        })
        if (user.name === "" || user.email === "" || user.password === "") {
            alert("You must Write Something")
        } else if (existEmail.length > 0) {
            alert("already ragistered")
        }
        else {
            setMyArray([...myArray, user])
            setTimeout(() => {
                navigate('/')
            }, 1000);

        }
        setUser({ name: "", email: "", password: "" });
    }

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(myArray))
    }, [myArray])
    return (
        <>
            <section style={mainSection}>
                <div className="container-fluid">
                    <div className="row justify-content-evenly p-5">
                        <div className="col-md-4">
                            <div style={content}>
                                <form >
                                    <h3 className="text-center pb-3 text-primary">Signup</h3>
                                    <input type="text" className='my-2' style={formInput} name="name" placeholder="Full Name" onChange={handleChange} value={user.name} />
                                    <input type="text" className='my-2' style={formInput} name="email" placeholder="Email" onChange={handleChange} value={user.email} />
                                    <input type="password" className='my-2' style={formInput} name="password" placeholder="Creat password" onChange={handleChange} value={user.password} />
                                    <button className="btn btn-outline-primary w-100" type="button" onClick={handleSignUp}>Signup</button>
                                    <p className="text-center mt-2 text-primary">Already have an account? <Link to="/" className='btn btn-outline-primary'>Login</Link></p>
                                    <hr className="text-white" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default SignUp

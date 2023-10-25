import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const content = {
        backgroundColor: "black",
        padding: "25px",
        borderRadius: "10px",
        marginTop: "40px"
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
    const navigate = useNavigate()


    const getItem = () => {
        let list = localStorage.getItem('LoginList')
        if (list) {
            return JSON.parse(list)
        } else {
            return []
        }
    }

    const getSignUpUser = () => {
        let userList = localStorage.getItem('list');
        if (userList) {
            return JSON.parse(userList)
        } else {
            return []
        }
    }
    const signupUser = getSignUpUser()



    const [logUser, setLogUser] = useState({ email: "", password: "" });
    const [logUserArray, setLogUserArray] = useState(getItem());




    const handleLogin = () => {
        const userLogin = signupUser.filter((ele) => {
            return ele.email === logUser.email && ele.password === logUser.password
        })
        localStorage.setItem('loginProfile', JSON.stringify(userLogin))
        if (userLogin.length === 0) {
            alert('Invalid User')
        } else {
            setLogUserArray([...logUserArray, logUser])
            setLogUser({ email: "", password: "" })
            setTimeout(() => {
                navigate('/Home')
               
            }, 500);
           

        }


    }
    const handleOnChang = (e) => {
        setLogUser({ ...logUser, [e.target.name]: e.target.value })

    }
    useEffect(() => {
        localStorage.setItem('LoginList', JSON.stringify(logUserArray))
    }, [logUserArray])

    return (
        <>
            <section style={mainSection}>
                <div className="container-fluid">
                    <div className="row justify-content-evenly p-5">
                        <div className="col-md-4">
                            <div style={content}>
                                <form>
                                    <h3 className="text-center text-primary pb-3">Login</h3>
                                    <input type="text" className='my-2' style={formInput} name="email" placeholder="Email" onChange={handleOnChang} value={logUser.email} />
                                    <input type="password" style={formInput} name="password" placeholder="Password" onChange={handleOnChang} value={logUser.password} />
                                    <p className="text-center"><Link className='text-white nav-link' to="#">Forgot password ?</Link></p>
                                    <button className="btn btn-outline-primary w-100 text-white" type="button" onClick={handleLogin}>Login</button>
                                    <p className="text-center mt-2 text-white">Don't have an account? <Link to="/SignUp" className='btn btn-outline-primary text-white' >Signup</Link></p>
                                    <hr className='text-white' />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Login

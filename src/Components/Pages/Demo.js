import React, { useEffect, useState } from 'react'

function Demo() {

    // let arr = [
    //     'Mobile', "Laptop", "Bottal", "12345"
    // ];
    // const [array, setArray] = useState(arr);
    // const [index, setIndex] = useState([])
    // const handleClick = (ind) => {
    //     setArray(array[ind] = "Computer")
    // }
    // const[otp,setOtp] = useState();



    const [inputOtp, setInputOtp] = useState("");
    const [item, setItem] = useState([]);
    const [ind, setInd] = useState()
    // const getOtp = (e)=>{
    //     e.preventDefault();
    //     let gotp = Math.round(
    //         Math.random()*9000 + 1000
    //     )
    //     setOtp(gotp)
    //     alert(otp)

    // }



    const handleSubmit = (e) => {
        // if(inputOtp === otp){
        //     alert("success")
        // }else{
        //     alert("Not matched")
        // }
        // console.log(inputOtp)
        // setInputOtp([...inputOtp, e.target.value]);
        // console.log(inputOtp)

        if (inputOtp === '') {
            alert("You Should Write Something")
        } else if (ind) {
            item[ind] = inputOtp;
            setItem(item);
            setInputOtp("")

        } else {
            let id = Math.round(Math.random() * 900 + 100);
            //console.log(num)
            let data = {
                "id": id,
                "name": inputOtp

            }
            console.log(data)
            setItem([...item,data])
            setInputOtp("")
            //console.log(item)

            // setInputOtp({ ...inputOtp , data })

            // let data = {
            //     "id": num,
            //     "name": inputOtp.name
            // }

            // setInputOtp("")
            // console.log(data)

        }
    }
    useEffect(()=>{
        setItem(item)
        // console.log(item)
    },[item])
    // const handleChange = (e) => {
    //     setInputOtp({ ...inputOtp, [e.target.name]: e.target.value })
    // }
    const handleDel = (id) => {
        // console.log("This is Del" + id);
        const delItem = item.filter((ele, index) => {
            return index !== id
        })
        setItem(delItem)

    }
    const handleEdit = (id) => {
        // console.log(id)
        setInd(id)
        // console.log(ind)
        const editItem = item.filter((ele) => {
            return ele.id === id
        })
        // setInputOtp(editItem);
        console.log(editItem.id)

    }

    return (
        // <div>
        //     {arr.map((ele, index) => {
        //         return (
        //             <div key={index} onClick={() => handleClick(index)}>
        //                 {ele}
        //             </div>
        //         )
        //     })
        //     }
        //     <b>{index}</b>
        // </div>
        <>
            <div className="container">
                <div className="form-group w-50">
                    {/* <input type="text" placeholder='Enter Your Phone Number' /><br /> */}
                    {/* <h1>{otp}</h1> */}
                    {/* <button onClick={getOtp}>Click</button><br /> */}
                    <input type="text" placeholder='Enter Your Item' value={inputOtp}  onChange={(e) => setInputOtp(e.target.value)} /><br />
                    <button onClick={handleSubmit}>{ind ? "Edit" : "Add"}</button>
                    {
                        item.map((ele, index) => {
                            return (
                                <div key={index}>
                                    <b >{ele.name}</b>
                                    <button onClick={() => handleDel(index)}>Del</button>
                                    <button onClick={() => handleEdit(ele.id)}>Edit</button>
                                </div>
                            )
                        })
                    }
                    {
                        // item.length >= 1 && <button>Remove All</button>
                    }

                </div>
            </div>
        </>
    )
}

export default Demo

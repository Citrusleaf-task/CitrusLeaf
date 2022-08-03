import React, { useState ,useEffect } from 'react'

import axios from 'axios'
import { useLocalStorage } from "../../useLocalStorage";
import { useNavigate } from "react-router-dom";

const Home = () => {

  
  let navigate = useNavigate(); 
// get user token
    const userValidate = async ()=>{
       let token = localStorage.getItem('token')
       console.log(token);

       const res = await fetch("validuser",{
        method: "GET",
        headers: {
            "Content-Type":"application/json",
            "Authorization": token
        }
       }).then((data)=>console.log(data.headers.Authorization))
      
      // console.log(res)
      //  const data = await res.json();
      //  console.log(data)
    }

    useEffect(()=>{
        userValidate();
    })

    const routeChange = () =>{ 
      let path = `/alltask`; 
      navigate(path);
    }

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [file, setFile] = useState("");
    const [email, setEmail] = useLocalStorage("email", "");
   console.log(email);

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/add-task", {
            title: title,
            date: date,
            file: file,
            email:email,
        }).then((response) => {
          console.log(response);
        //   navigate("/login")
        });
      };


  return (
    <div className='container' style={{marginTop:"20pzx"}}>
    <div className='w-75 mx-auto shadow p-5'>
        <h2 className='text-center mb-4'>ADD TASK</h2>
        <form onSubmit={e=> onSubmit(e)}>
            <div className='form-group' style={{marginTop:"20px"}}>
                <input
                    type="text"
                    className="form-control from-control-lg"
                    placeholder="Enter Title"
                    name="name"
              
                    onChange={e => setTitle(e)}
                />
            </div>
            <div className='form-group' style={{marginTop:"20px"}}>
                <input
                    type="date"
                    className="form-control from-control-lg"
                    placeholder="Enter Email"
                    name="date"
              
                    onChange={e => setDate(e)}
                />
            </div>
            <div className='form-group' style={{marginTop:"20px"}}>
                <input
                    type="file"
                    className="form-control from-control-lg"
                    placeholder="file"
                    name="file"
              
                    onChange={e => setFile(e)}
                />
            </div>
            <div className='form-group' style={{marginTop:"20px"}}>
                <input
                    type="email"
                    className="form-control from-control-lg"
                    placeholder="Enter User"
                    name="email"
              
                    onChange={e => setEmail(e)}
                />
            </div>
        
            <button className='btn btn-primary btn-block'  style={{marginTop:"20px",width:"100%"}}>ADD TASK</button>
            

        </form>
    </div>
    {/* <button className='btn btn-primary btn-block' onClick={routeChange} style={{marginTop:"10px",width:"50%"}}>ADD TASK</button> <br/> */}
    <button className='btn btn-primary btn-block' onClick={routeChange} style={{marginTop:"10px",width:"50%"}}>ALL TASK</button>


</div>
  
  )
}

export default Home
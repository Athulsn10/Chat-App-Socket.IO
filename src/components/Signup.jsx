import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

function Signup() {
   const [name, setName] = useState();
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [confirmpassword, setConfirmpassword] = useState();
   const [pic, setPic] = useState();

   const postDetails =(pics)=>{

   }

   const submitHandler = () =>{

   }
  return (
    <>
      <div className="my-4">
        <div className=" d-flex align-items-center justify-content-center">
          <div className='container-fluid'>
            <Form.Control
            className='my-3'
              placeholder="Username"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Control
            className='my-3'
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control
            className='my-3'
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Control
            className='my-3'
              placeholder="Confirm Password"
              type="password"
              onChange={(e) => setConfirmpassword(e.target.value)}
            />

            <Form.Control
            className='mt-3'
              type="file"
              accept="image/*"
              onChange={(e) => postDetails(e.target.files[0])}
            />
            <p className='text-end pe-3 pt-1' style={{fontSize:'12px',color:'white'}}>Upload Your Profile Picture</p>
          </div>
        </div>
        <div className="mb-2 d-flex align-items-center justify-content-center">
          <button onClick={submitHandler} style={{backgroundColor:'#3c46ff',color:'white'}} className="mx-2 btn  w-100"> Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default Signup
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const submitHandler = () =>{

  }
  return (
    <>
    <div className="my-2">
        <div className=" d-flex align-items-center justify-content-center">
          <div className='container-fluid'>
            <Form.Control
            style={{backgroundColor:'white',border:'none', color:'white'}}
            className='my-3 w-100'
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control
            style={{backgroundColor:'white',border:'none',color:'white'}}
            className='my-3 w-100'
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-2 d-flex align-items-center justify-content-center">
          <button onClick={submitHandler} style={{backgroundColor:'#3c46ff',color:'white'}} className="mx-2 btn  w-100">Log In</button>
        </div>
        <div className="mb-2 d-flex align-items-center justify-content-center">
          <button onClick={()=>{
            setEmail("guest@gmail.com");
            setPassword("123456")
          }} 
          style={{backgroundColor:'transparent',color:'white',border:'none'}}
          className="mx-2 text-light w-100">Chat As A Guest</button>
        </div>
      </div>
    </>
  )
}

export default Login
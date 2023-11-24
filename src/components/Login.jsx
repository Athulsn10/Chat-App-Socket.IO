import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const submitHandler = async() =>{
    setLoading(true);
    if(!email || !password){
      toast.warn("Fill all fields")
      setLoading(false)
    }
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user/login",
        { email, password},
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chats");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <div className="my-2">
        <div className=" d-flex align-items-center justify-content-center">
          <div className='container-fluid'>
            <Form.Control
            style={{backgroundColor:'white',border:'none', color:'black'}}
            className='my-3 w-100'
              placeholder="Email"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control
            style={{backgroundColor:'white',border:'none',color:'black'}}
            className='my-3 w-100'
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-2 d-flex align-items-center justify-content-center">
          <button onClick={submitHandler} 
          disabled={loading}
          style={{backgroundColor:'#3c46ff',color:'white'}} className="mx-2 btn  w-100">Log In</button>
        </div>
        <div className="mb-2 d-flex align-items-center justify-content-center">
          <button onClick={()=>{
            setEmail("guestuser@gmail.com");
            setPassword("123456")
          }} 
          style={{backgroundColor:'transparent',color:'white',border:'none'}}
          className="mx-2 text-light w-100">Chat As A Guest</button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default Login
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import {BASE_URL} from '../context/url'
 


function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [progress, setProgress] = useState(0)
  const navigate = useNavigate();


  const submitHandler = async() =>{
    if(!email || !password){
      toast.warn("Fill all fields")
    }else{ 
    try {
      setProgress(80)
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${BASE_URL}/api/user/login`,
        { email, password},
        config
      );
      // console.log(BASE_URL);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setProgress(100)
      navigate("/chats");
    } catch (error) {
      setProgress(0)
      // console.log(progress);
      console.log(error);
      toast.error('invalid credentials')
    }
  }
  };
  return (
    <>
     <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <div className=" d-flex justify-content-center" >
        <div className=" d-flex align-items-center justify-content-center" style={{width:'400px'}}>
          <div className='container-fluid'>
          <h4 className='text-dark fw-bolder text-center'>Welcome back</h4>
            <Form.Control
            style={{backgroundColor:'white', color:'black'}}
            className='my-3 w-100'
              placeholder="Email"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
      
            <Form.Control
            style={{backgroundColor:'white',color:'black'}}
            className='my-3 w-100'
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          <div className="mb-2 d-flex align-items-center justify-content-center">
          <button onClick={submitHandler} 
          // disabled={loading}
          style={{backgroundColor:'#9439ef',color:'white'}} className=" btn  w-100">Log In</button>
        </div>
        {/* <div className="mb-2 d-flex align-items-center justify-content-center">
          <button onClick={()=>{
            setEmail("guestuser@gmail.com");
            setPassword("123456")
          }} 
          style={{backgroundColor:'transparent',color:'white',border:'none'}}
          className="mx-2 text-dark w-100">Chat As A Guest</button>
        </div> */}
          </div>
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
        theme="light"
      />
    </>
  )
}

export default Login
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import {MY_URL} from '../context/url'

function Signup() {
   const [name, setName] = useState();
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [confirmpassword, setConfirmpassword] = useState();
   const [pic, setPic] = useState();
   const navigate = useNavigate();
   const [progress, setProgress] = useState(0)


   const postDetails = (pics) => {
    console.log(`${MY_URL}`);
     setProgress(40)
     if (pics === undefined) {
       toast.error("select your profile photo");
       return;
     }
     if (
       pics.type === "image/jpeg" ||
       pics.type === "image/png" ||
       pics.type === "image/jpg"
     ) {
       const data = new FormData();
       data.append("file", pics);
       data.append("upload_preset", "chatify");
       data.append("cloud_name", "athulcloud");
       fetch("https://api.cloudinary.com/v1_1/athulcloud/image/upload", {
         method: "post",
         body: data,
       })
         .then((res) => res.json())
         .then((data) => {
           setPic(data.url.toString());
           // console.log(data.url.toString());
         })
      
      // axios.post(`${MY_URL}/upload`,data)
      // .then(response => {
      //   // Handle the successful response here
      //   console.log("Response:", response.data);
      //   setPic(response.data.url.toString());
      //   setProgress(90);
      // })
         .catch((err) => {
           console.log(err);
           setProgress(0)
         });
     } else {
       toast.error("select valid image");
     }
   };

   const submitHandler = async () => {
     if (!name || !email || !password || !confirmpassword) {
       toast.warn("Fill all fields");
       return;
     }
     if (password !== confirmpassword) {
       toast.warn("Password does not match");
       return;
     }
     try {
      
       const config = {
         headers: {
           "content-type": "application/json",
         },
       };
       const { data } = await axios.post(
         "/api/user",
         { name, email, password, pic },
         config
       );
       localStorage.setItem("userInfo", JSON.stringify(data));
       setProgress(90)
       navigate("/chats");
     } catch (error) {
       console.log(error);
       setProgress('')
       toast.error("User already exists")
     }
   };
  return (
    <>
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="d-flex justify-content-center" style={{height:'100vh',backgroundColor:'rgb(0 0 46)'}}>
        <div className=" d-flex align-items-center justify-content-center " style={{width:'340px'}}>
          <div className="container-fluid">
          <h4 className='text-light text-center'>Sign Up</h4>

            <Form.Control
              className="my-3"
              placeholder="Username"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Control
              className="my-3"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control
              className="my-3"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Control
              className="my-3"
              placeholder="Confirm Password"
              type="password"
              onChange={(e) => setConfirmpassword(e.target.value)}
            />

            <Form.Control
              className="mt-3"
              type="file"
              accept="image/*"
              onChange={(e) => postDetails(e.target.files[0])}
            />
            <p
              className="text-end pe-3 pt-1"
              style={{ fontSize: "12px", color: "white" }}
            >
              Upload Your Profile Picture
            </p>
            <div className="mb-2 d-flex align-items-center justify-content-center">
          <button
            onClick={submitHandler}
            style={{ backgroundColor: "#3c46ff", color: "white" }}
            className=" btn  w-100"
            // loading={loading}
          >
            Sign Up
          </button>
        </div>
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
        theme="dark"
      />
    </>
  );
}

export default Signup
import React, { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Header from "./Header";
import "./Home.css";
import { useNavigate, Link } from "react-router-dom";
import Footer from './Footer'

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user){
     navigate("/chats");
    }
  }, [navigate]);
  const [text] = useTypewriter({
    words: [
      "Connect with Friends..",
      "Engage in Conversations..",
      "Brainstorm Ideas..",
      "Login Now",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 1000,
  });

  return (
    <>
      <div className="">
        <Header />
        <div className="c1 pb-5 " style={{ height: "fit-content" }}>
          <div className="fs-3  justify-content-start mt-5 pt-5">
            <div
              className="ms-4 ps-3 d-flex align-items-center"
              style={{ height: "270px" }}
            >
              <p className="fs-2 fw-bolder" style={{ color: "#d292ff" }}>
                <p className="m-0 fw-bolder fs-1">Use Chatify !</p>
                <span>{text}</span>
                <span>
                  <Cursor />
                </span>
              </p>
            </div>
            <div className="ms-4 ps-3 sub-content fs-5">
              <p>
                Welcome to Chatify, the ultimate socializing platform where
                connections happen in real-time! Whether you're looking to meet
                new friends or catch up with old ones, Chatify is the place to
                be. Engage in one-on-one conversations with strangers from
                around the world
              </p>
              <Link to={"/signup"}>
                <button className="btn px-4 py-2 rounded-pill btn-primary">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-5 developed " style={{ overflowX: 'hidden' }}>
            <p className="text-center fs-3 fw-bolder " >Developed using </p>
            <div style={{color:'grey'}} className="d-flex justify-content-center py-2  fs-1">
              <i className="me-3 fa-brands developed-icon fa-react"></i>
              <i className="mx-3 fa-brands developed-icon fa-css3-alt"></i>
              <i className="mx-3 fa-brands developed-icon fa-html5"></i>
              <i className="mx-3 fa-brands developed-icon fa-envira"></i>
              <img className="developed-img developed-icon"  src="https://www.cdnlogo.com/logos/s/14/socket-io.svg" ></img>
            </div>
          </div>
        <Footer />
      </div>
      {/* <div className="mob">
        <div className="c3" >
          <div className=" my-0 ms-3 p-0">
            <p className=" para">
              Welcome to Chatify, the ultimate socializing platform where
              connections happen in real-time! Whether you're looking to meet
              new friends or catch up with old ones, Chatify is the place to be.
              Engage in one-on-one conversations with strangers from around the
              world
            </p>
            <button className="btn btn-primary py-2 px-5">Get Started</button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;

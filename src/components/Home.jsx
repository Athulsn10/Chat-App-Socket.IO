import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Header from "./Header";
import "./Home.css";
import Auth from "./Auth";

function Home() {
  const [text] = useTypewriter({
    words: [
      "Connecting with strangers..",
      "Engaging in shared watch parties..",
      "Brainstorm Ideas Together..",
      "Use Chatify!!",
    ],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 1000,
  });

  return (
    <>
      <div className="">
        <Header />
        <div className="row d-flex" style={{ height: 'fit-content' }}>
          <div className="col-12 col-md-6 p-0 fs-3  c1 " style={{ height: '100vh' }}>
            <div className="ms-5 d-flex align-items-center mt-5 pt-5">
              <p
                className="fs-2 fw-bolder"
                style={{marginTop:'15%',color:'#d292ff'}}

              >
                <span>{text}</span>
                <span>
                  <Cursor />
                </span>
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 c2 p-0 " >
              <Auth/>
          </div>
          
        </div>
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

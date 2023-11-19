import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Header from "./Header";
import "./Home.css";

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
      <div className="desk" style={{ height: "100vh" }}>
        <div className="row" style={{ height: "100%" }}>
          <div  className="col-lg-7 col-sm-12 p-0 fs-3 h-100 c1">
            <Header />
            <div className="ms-5 d-flex align-items-center h-100">
              <p
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                }}
                className="fs-2 fw-bolder text-light"
              >
                <span>{text}</span>
                <span>
                  <Cursor />
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12 h-100 c2 p-0">
            <div className="d-flex align-items-center justify-content-center h-100 anim">
              <div>
                <p className="fw-bolder fs-1 text-light">Get Started</p>
                <button className="btn btn-light">Chat</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mob" style={{ height: "100vh" }}>
        <div className="row c3" style={{ height: "100%" }}>
          <div className="col-lg-7 col-sm-12 mt-5 col-sm-12 p-0">
          <Header />
            <p className="text-light fs-3 para ps-3 ms-4 mt-5">
            Welcome to Chatify, the ultimate socializing platform where connections happen in real-time! Whether you're looking to meet new friends or catch up with old ones, Chatify is the place to be. Engage in one-on-one conversations with strangers from around the world
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

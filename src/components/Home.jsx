import React, { useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Header from "./Header";
import "./Home.css";
import { useNavigate, Link } from "react-router-dom";
import Footer from './Footer'
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user){
     navigate("/chats");
    }
  }, [navigate]);
 
  return (
    <>
      <Header />
      <div style={{ overflow: "hidden" }} className=" bg mx-lg-5 mx-md-5 mx-3">
        <div className=" d-flex flex-column align-items-center justify-content-center h-100">
          <p
            style={{ fontWeight: "400", color: "white" }}
            className=" text-center top-p m-0 p-0"
          >
            Convo Simplified
          </p>
          <button className=" btn mt-2 py-2 rounded-pill px-4"
          style={{ backgroundColor: "#9439ef", color: 'white', border: 'none' }}
          >
            Get started
          </button>
        </div>
      </div>
      <div
        style={{ overflow: "hidden" }}
        className="container-fluid ms-lg-5 ms-md-5 ms-3 pt-5"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="row ms-lg-5 mt-5" style={{ overflow: "hidden" }}>
          <div className="col-lg-6 col-sm-12 col-md-6">
            <p className="m-0 p-0 p1">Connecting people</p>
            <p className="m-0 p-0 p2">
              <span className="p-0 m-0" style={{ color: "#F4B400" }}>
                Conversation
              </span>{" "}
              Simplified
            </p>
            <p className="m-0 p-0 p3">
              {" "}
              Chatify: Your go-to destination for effortless conversations and
              instant connections. Our user-friendly chat app enhances your
              messaging experience, making every interaction a seamless and
              enjoyable journey. Stay connected, share moments, and express
              yourself with ease on Chatify!
            </p>
            <button
              style={{ backgroundColor: "#9439ef", color: "white" }}
              className=" btn my-4 fs-5 py-3  rounded-pill px-5"
            >
              Get started
            </button>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6" data-aos="fade-up-left">
            <div className="container-fluid ps-lg-5 ms-lg-5">
              <div className="row">
                <div
                  className="col-lg-6 col-sm-6 m-1 box-sq"
                  style={{ backgroundColor: "#9439ef", borderRadius: "10px" }}
                ></div>
                <div
                  className="col-lg-6 col-sm-6 m-1 box-sq"
                  style={{ backgroundColor: "#F4B400", borderRadius: "10px" }}
                ></div>
              </div>
              <div className="row">
                <div
                  className="col-lg-6 col-sm-6 m-1 box-sq"
                  style={{ backgroundColor: "#F4B400", borderRadius: "10px" }}
                ></div>
                <div
                  className="col-lg-6 col-sm-6 m-1 box-sq"
                  style={{ backgroundColor: "#9439ef", borderRadius: "10px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ overflow: "hidden" }} className="container-fluid mt-5 ">
        <div className="row pt-5">
          <div data-aos="fade-right" className="col-lg-8 col-md-6 col-sm-12">
            <div
              className="rounded mb-5 bg-2 img-fluid shadow"
            ><img src="/images/phone2.jpg" className="img-fluid" alt="a" /></div>
          </div>
          <div
            data-aos="fade-left"
            className="col-lg-4 col-md-6 col-sm-12"
          >
             <p className="m-0 p-0 mb-3 p2" style={{ color: "#F4B400" }}>
             View complete<br/>
              <span className="p-0 m-0" style={{ color: "#9439ef" }}>
                 project in
              </span>{" "}
              <a style={{textDecoration:'none',color:'black'}} href="https://github.com/Athulsn10/Chatify-MERN-frontend" target="_blank">Github<i class="fa-solid fs-2 ps-3 fa-arrow-up-right-from-square"></i></a>
            </p>
            <Accordion style={{ border: "none" }} defaultActiveKey="0">
              <Accordion.Item style={{ border: "none" }} eventKey="2">
                <Accordion.Header>About</Accordion.Header>
                <Accordion.Body>
                  Welcome to Chatify, the premier chat application at the
                  forefront of instant communication. With a foundation built on
                  Socket.IO and the reliable MERN stack, we bring you a platform
                  that seamlessly combines real-time connectivity with
                  user-friendly design. At Chatify, we prioritize your privacy,
                  ensuring secure interactions while offering effortless
                  multimedia integration to enhance your messaging experience.
                  Our commitment to personalization, cross-platform
                  accessibility, and fostering vibrant communities sets Chatify
                  apart as the ultimate destination for dynamic and secure
                  conversations. Join us as we redefine the art of
                  communication—welcome to Chatify, where connections come alive
                  effortlessly.
                </Accordion.Body>
              </Accordion.Item>
               <Accordion.Item style={{ border: "none" }} eventKey="1">
                <Accordion.Header>Why Chatify?</Accordion.Header>
                <Accordion.Body>
                  Chatify, a dynamic chat app powered by Socket.IO and the
                  robust MERN stack, revolutionizes messaging with real-time
                  connections and user-friendly design. Offering privacy,
                  multimedia integration, and community features, Chatify
                  ensures a secure, seamless, and enjoyable chat experience
                  across devices. Elevate your conversations with Chatify—where
                  connections come to life effortlessly.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;

import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChatState } from "../../context/ChatProvider";
import axios from "axios";
import Placeholder from 'react-bootstrap/Placeholder';
import UserList from "../avatar/UserList";

function SearchBox() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const [offcanvasShow, setOffcanvasShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const { user, setSelectedChat,chats,setChats } = ChatState();
  const navigate = useNavigate();

  const firstNameLetter = user.name.charAt(0);
  let storedColor = sessionStorage.getItem('randomColor');
  if (!storedColor) {
    const colors = ["red", "blue", "green", "yellow", "purple"];
    storedColor = colors[Math.floor(Math.random() * colors.length)];
    sessionStorage.setItem('randomColor', storedColor);
  }

  const logout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  const handleOffcanvasShow = () => setOffcanvasShow(true);
  const handleOffcanvasClose = () => {
    
    setOffcanvasShow(false);
  }
  const handleModalShow = () => setModalShow(true);
  const handleModalClose = () => setModalShow(false);

  const handleSearch=async()=>{
    if(!search){
      toast.warning("Enter Username")
    }
    try {
      setLoading(true);
      const config = {
        headers:{
          Authorization: `Bearer ${user.token}`,
        }
      }
      const {data} = await axios.get(`/api/user?search=${search}`,config)
      setLoading(false);
      console.log(search);
      setSearchResult(data)
    } catch (error) {
      setLoading(false);
      toast.error('Error Occured')
    }
  }
  const accessChat = async (userId)=>{
    try {
      setLoadingChat(true)
      const config = {
        headers:{
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        }
      }
      const {data} = await axios.post('/api/chat',{userId},config)
      if(!chats.find((e)=>e._id === data._id))
      {
        setChats([data,...chats])
      }
      setSelectedChat(data);
      setLoadingChat(false);
      setOffcanvasShow(false)
    } catch (error) {
      toast.error("error while fetching chats, check log")
      console.log(error);
      
    }

  }
  return (
    <>
      <div
        className="mt-3 ms-3 rounded d-flex justify-content-between"
        style={{ backgroundColor: "white" }}
      >
        <div className="ms-2 p-3">
          <Avatar
            onClick={handleModalShow}
            sx={{ bgcolor: storedColor }}
            src={user.pic ? user.pic : null}
          >
            {firstNameLetter}
          </Avatar>
        </div>
        <div className="p-3">
          <button
            onClick={handleOffcanvasShow}
            className="btn"
            style={{ border: "none" }}
          >
            <i className="fi fs-4 fi-br-search"></i>
          </button>
        </div>
      </div>
      <Offcanvas  style={{backgroundColor:'#f5f7fa'}} show={offcanvasShow} onHide={handleOffcanvasClose}>
        <Offcanvas.Header closeButton>
          <div className="d-flex align-items-center justify-content-center m-0 p-0">
            <input
              style={{ boxShadow: "none" }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control ms-4"
              placeholder="Search for a user"
            />
            <button
              className="btn ms-2"
              style={{ border: "none" }}
              onClick={handleSearch}
            >
              <i className="fi fs-4 fi-br-search"></i>
            </button>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          
            {loading ? (
              <div style={{opacity:'0.2'}}>
                 <Placeholder   xs={12} lg={12} md={12} />
                 <Placeholder  xs={12} lg={12} md={12} />
                 <Placeholder  xs={12} lg={12} md={12} />
                 <Placeholder  xs={12} lg={12} md={12} />
                 <Placeholder  xs={12} lg={12} md={12} />
                 <Placeholder  xs={12} lg={12} md={12} />
                 <Placeholder  xs={12} lg={12} md={12} />
                 <Placeholder  xs={12} lg={12} md={12} />
              </div>
              
            ) : (
              searchResult?.map((user) => (
                <UserList
                key={user._id} 
                user={user} 
                handleFunction={()=>accessChat(user._id)}
                />
              ))
            )}
         
        </Offcanvas.Body>
      </Offcanvas>
      <Modal
        show={modalShow}
        onHide={handleModalClose}
        animation={false}
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="d-flex align-items-center justify-content-center">
            <Avatar
              sx={{ bgcolor: storedColor, width: 100, height: 100 }}
              src={user.pic ? user.pic : null}
            >
              {firstNameLetter}
            </Avatar>
          </div>
          <h4 className="text-center m-0 pt-3">{user.name}</h4>
          <p style={{ opacity: "0.6" }} className="text-center p-0 m-0">
            {user.email}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
          <button className="btn btn-primary" onClick={handleModalClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
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

export default SearchBox;

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
import ModalGroup from "./ModalGroup";

function SearchBox() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const [offcanvasShow, setOffcanvasShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const { user, setSelectedChat,selectedChat,chats,setChats } = ChatState();
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
    setSearchResult([])
    setOffcanvasShow(false);

  }
  const handleModalShow = () => setModalShow(true);
  const handleModalClose = () => setModalShow(false);

  const handleSearch=async(query)=>{
    setSearch(query);
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
  const accessChat = async (userId) => {
    try {
      setLoadingChat(true);
  
      // Check if the selected user is already in the existing chats
      const existingChat = chats.find((chat) => chat.users.includes(userId));
  
      if (existingChat) {
        // Open the existing chat
        setSelectedChat(existingChat);
      } else {
        // Create a new chat
        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        };
  
        const { data } = await axios.post('/api/chat', { userId }, config);
  
        // Check if the chat already exists in the state
        if (!chats.find((chat) => chat._id === data._id)) {
          setChats([data, ...chats]);
        }
  
        // Set the selected chat to the newly created chat
        setSelectedChat(data);
        console.log(selectedChat);
      }
  
      setLoadingChat(false);
      setOffcanvasShow(false);
    } catch (error) {
      toast.error("Error while fetching chats. Check the log.");
      console.error(error);
    }
  };
  
  return (
    <>
        <div
          fixed="top"
          className="mt-3 w-100  rounded d-flex justify-content-between search-box"
        >
          <div className="ms-2 p-3 d-flex align-items-center">
            <Avatar
              onClick={handleModalShow}
              sx={{ bgcolor: storedColor }}
              src={user.pic ? user.pic : null}
            >
              {firstNameLetter}
            </Avatar>
          </div>
          <div className="d-flex align-items-center">
            <ModalGroup >
              <button style={{border:'none'}} className="btn p-0 m-0 d-flex align-items-center">
             <i className="fs-5 fa-solid fa-user-group"></i>
              </button>
            </ModalGroup>
            <div className="p-1">
              <button
                onClick={handleOffcanvasShow}
                className="btn"
                style={{ border: "none" }}
              >
                <i className="fi fs-4 fi-br-search"></i>
              </button>
            </div>
          </div>
        </div>
        <Offcanvas className="search-user-bg" show={offcanvasShow} onHide={handleOffcanvasClose}>
          <Offcanvas.Header>
            <div className="d-flex w-100  align-items-center justify-content-center m-0 p-0">
              <input
                style={{ boxShadow: "none",backgroundColor:'#262626',border:'none',color:'white' }}
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                className="form-control mt-2 search-input"
                placeholder="Search for a user"
              />
            </div>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p className="p-0 ms-3 my-0 text-light">Search results</p>
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
      className="profile-modal" // Add the custom class to the Modal
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

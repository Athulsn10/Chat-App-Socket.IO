import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { ChatState } from "../../context/ChatProvider";
import Stack from "react-bootstrap/esm/Stack";
import Badge from "react-bootstrap/esm/Badge";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import UserList from "../avatar/UserList";
import Placeholder from "react-bootstrap/esm/Placeholder";
import PlaceholderButton from "react-bootstrap/esm/PlaceholderButton";

function EditGroupModal({fetchMessages}) {
  const [modalShow, setModalShow] = useState(false);
  const handleModalShow = () => setModalShow(true);
  const handleModalClose = () => {
    setSearchResult([])
    setModalShow(false);
  }
  const [search, setSearch] = useState("");
  const [groupChatName, setGroupChatName] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [renameload, setRenameload] = useState(false);
  const { fetchAgain, setFetchAgain, user, selectedChat, setSelectedChat } = ChatState();

  const handleRemove = async (user1) => {
    if (selectedChat.groupAdmin._id !== user._id && user1._id !== user._id) {
      toast.warning('Only admins can remove members');
      return;
    }
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.put(
        `/api/chat/groupremove`,
        {
          chatId: selectedChat._id,
          userId: user1._id,
        },
        config
      );
      user1._id === user._id ? setSelectedChat() : setSelectedChat(data);
      setFetchAgain(!fetchAgain);
      setLoading(false)
  
      setLoading(false);
    } catch (error) {
        console.log(error);
      toast.error('An error occurred');
      fetchMessages();
      setLoading(false);
    }
    setGroupChatName("");
  };

  const handleRename = async () => {
    if (!groupChatName) {
      toast.warning('Please provide a group name!');
    } else {
      try {
        setRenameload(true);

        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };

        const { data } = await axios.put(
          `/api/chat/rename`,
          {
            chatId: selectedChat._id,
            chatName: groupChatName,
          },
          config
        );
        setSelectedChat(data);
        setFetchAgain(!fetchAgain);
        setRenameload(false);
        setGroupChatName(""); // Reset the input field
      } catch (error) {
        console.error(error);
        toast.error('An error occurred while renaming the group.');
        setRenameload(false);
      }
    }
  };

  const handleSearch = async (query) => {
    setSearch(query);
    if (!query) {
      toast.warning('Enter username');
    } else {
      try {
        setLoading(true);
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
        const { data } = await axios.get(`/api/user?search=${query}`, config);
        console.log(data);
        setLoading(false);
        setSearchResult(data);
      } catch (error) {
        toast.error('Error occurred');
        setLoading(false);
      }
    }
  };

  const handleAddUser = async(user1) => {
    if(selectedChat.users.find((u)=>u._id === user1._id)){
        toast.warning("selected user is already a member")
        return
    }
    if(selectedChat.groupAdmin._id !== user._id){
        toast.warning("only admin can add members")
        return
    }
    try {
        setLoading(true);
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
        const { data } = await axios.put(
          `/api/chat/groupadd`,
          {
            chatId: selectedChat._id,
            userId: user1._id,
          },
          config
        );
        setSelectedChat(data);
        setFetchAgain(!fetchAgain);
        setLoading(false);
      } catch (error) {
       toast.error('error occured')
        setLoading(false);
      }
      setGroupChatName("");
    };


  return (
    <>
     <Avatar
     onClick={handleModalShow}
          sx={{ width: 53, height: 53, mr:1}}
            src={user.pic ? user.pic : null}
            >
             {selectedChat.chatName.charAt(0).toUpperCase()}
            </Avatar>
      <Modal className="profile-modal" show={modalShow} onHide={handleModalClose} animation={false} centered>
        <Modal.Header closeButton>
          <Avatar>{selectedChat.chatName.slice(0, 1)}</Avatar>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Stack direction="horizontal" gap={2}>
              {selectedChat.users.map((u) => (
                <Badge
                  className='d-flex justify-content-between align-items-between p-2'
                  key={u._id}
                  user={u}
                  bg="danger"
                >
                  {u.name} <span className='fw-bolder ms-2'><i onClick={() => handleRemove(u)} className="fa-solid fa-x" style={{ color: '#ffffff' }}></i></span>
                </Badge>
              ))}
            </Stack>
          </div>
          <div className="d-flex my-3 align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="Rename chat"
              style={{ boxShadow: 'none' }}
              value={groupChatName}
              onChange={(e) => setGroupChatName(e.target.value)}
            />
            <button
              className="btn btn-primary ms-2"
              onClick={handleRename}
            >
              Update
            </button>
          </div>
          <div className="d-flex my-3 align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="Search User"
              style={{ boxShadow: 'none' }}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          {loading ? (
            <div style={{ opacity: '0.2' }}>
              <PlaceholderButton xs={12} lg={12} md={12} />
              <PlaceholderButton xs={12} lg={12} md={12} />
              <Placeholder xs={12} lg={12} md={12} />
              <Placeholder xs={12} lg={12} md={12} />
              <Placeholder xs={12} lg={12} md={12} />
              <Placeholder xs={12} lg={12} md={12} />
              <Placeholder xs={12} lg={12} md={12} />
              <Placeholder xs={12} lg={12} md={12} />
            </div>
          ) : (
            searchResult?.map((user) => (
              <UserList
                key={user._id}
                user={user}
                handleFunction={() => handleAddUser(user._id)}
              />
            ))
          )}
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => handleRemove(user)}
            className="btn btn-danger"
          >
            Leave Group
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

export default EditGroupModal;

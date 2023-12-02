import React, { useEffect, useState } from 'react'
import { ChatState } from '../context/ChatProvider';
import {getSender, getSenderFull} from '../config/ChatLogic'
import Modalprofile from './chatarea/Modalprofile'
import EditGroupModal from './chatarea/EditGroupModal';
import Spinner from 'react-bootstrap/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import ScrollableChat from './ScrollabelChat';
import io from 'socket.io-client'


const SERVER_URL = "http://localhost:5000"
var socket, selectedChatCompare;

function SingleChat() {
    const {fetchAgain,setFetchAgain,user,selectedChat,setSelectedChat } = ChatState();
    // console.log(selectedChat);
    const [messages, setMessages] = useState([]);
    const [loading ,setLoading] = useState(false);
    const [newMessage, setNewMessage] = useState();
    const [socketConnected, setSocketConnected] = useState(false)

    const sendMessage= async(event)=>{
      if(event.key === 'Enter' && newMessage){
        try{
          const config = {
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
          setNewMessage('');
          const{data} = await axios.post('/api/message',
          
          {
            content: newMessage,
            chatId: selectedChat._id
          }, config)
          socket.emit('new message', data)
          setMessages([...messages,data])
          // console.log(data);
        }catch(error){
            toast.error('Failed to sent')
        }
      }
    }

    const fetchMessages= async()=>{
      if(!selectedChat){
        return
      }
      try {
        const config ={
          headers: {
            Authorization: `Bearer ${user.token}`
          },
        }
        const {data} = await axios.get(`/api/message/${selectedChat._id}`
        ,config
        )
        setMessages(data)
        setLoading(false)
        socket.emit('join chat', selectedChat._id)
        // console.log(data);
      } catch (error) {
        toast.error('')
      }
    }

    useEffect(()=>{
      socket = io(SERVER_URL);
      socket.emit('setup',user);
      socket.on('connection',()=>{ setSocketConnected(true)})
    },[])

    useEffect(()=>{
      fetchMessages()
      selectedChatCompare = selectedChat;
    },[selectedChat])

    useEffect(()=>{
      socket.on("message recieved",(newMessageRecieved)=>{
        if(!selectedChatCompare || selectedChatCompare._id !== newMessageRecieved.chat._id){
            // notification
        }else{
          setMessages([...messages, newMessageRecieved]);
        }
      })
    })

    const typingHandler=(e)=>{
      setNewMessage(e.target.value);
      // typing indicator
    }

   
  return (
    <>
    {selectedChat ? (
  <>
    <div
      style={{ overflowY: "hidden" }}
      className="d-flex justify-content-between align-items-center w-100 px-2"
    >
      <i
        className="fa-solid fa-arrow-left-long"
        onClick={() => setSelectedChat("")}
      ></i>
      {!selectedChat.isGroupChat ? (
        <>
          {getSender(user, selectedChat.users)}
          <Modalprofile user={getSenderFull(user, selectedChat.users)} />
        </>
      ) : (
        <>
          {selectedChat.chatName}
          <EditGroupModal
          fetchMessages={fetchMessages}
          />
        </>
      )}
    </div>
    <div
      className="flex-column justify-content-end w-100 h-100 p-3 rounded"
      style={{ backgroundColor: "#d1d7db" }}
    >
      {loading ? (
        <div className="h-100 d-flex justify-content-center align-items-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <div style={{overflowY:'scroll'}} className='messages flex-column'>
          <ScrollableChat messages={messages}/>
          </div>
        </>
      )}
    </div>
    <input
      onChange={typingHandler}
      placeholder="Type a message"
      type="text"
      value={newMessage}
      required
      style={{boxShadow:'none'}}
      onKeyDown={sendMessage}
      className="form-control w-100 mb-4 mt-2 p-2"
    />
  </>
) : (
  <div className="d-flex align-items-center justify-content-center">
    <h3 style={{ color: "black" }}>Chatify</h3>
  </div>
)}

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

export default SingleChat
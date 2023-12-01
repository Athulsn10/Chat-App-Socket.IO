import { useEffect, useState } from "react";
import ChatBox from "../components/chatarea/ChatBox";
import MyChats from "../components/chatarea/MyChats";
import SearchBox from "../components/chatarea/SearchBox";
import { ChatState } from "../context/ChatProvider";
import './Chats.css'

function Chats() {
  const { user } = ChatState();
  
  return (
    <div className="chat-bg vh-100 container-fluid" style={{ backgroundColor: '#f5f7fa' }}>
        <div className="row h-100">
          <div className="col-md-4 flex-column vh-100" style={{ overflowY: 'hidden'}}>
            <div className="mb-3">{user && <SearchBox />}</div>
            <div className='h-100' >{user && <MyChats />}</div>
          </div>
          <div className="col-md-8"  >
            <div className="h-100" >{user && <ChatBox />}</div>
          </div>
        </div>
    </div>
  );
}

export default Chats;

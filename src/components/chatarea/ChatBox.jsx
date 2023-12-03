import React from 'react'
import { ChatState } from '../../context/ChatProvider';
import SingleChat from '../SingleChat';

function ChatBox() {
  const { selectedChat,fetchAgain,setFetchAgain } = ChatState();
  return (
    <div className='vh-100 px-4  md-flex flex-column align-items-center' style={{display:selectedChat?'flex':'none',backgroundColor:'black'}}>
      <SingleChat/>
    </div>
  )
}

export default ChatBox
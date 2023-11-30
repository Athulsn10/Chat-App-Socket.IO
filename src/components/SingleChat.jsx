import React from 'react'
import { ChatState } from '../context/ChatProvider';
import {getSender, getSenderFull} from '../config/ChatLogic'
import Modalprofile from './chatarea/Modalprofile'

function SingleChat() {
    const {fetchAgain,setFetchAgain,user,selectedChat,setSelectedChat } = ChatState();
    console.log(selectedChat);

  return (
   <>
   {selectedChat ?(
    <>
    <div className='d-flex justify-content-between align-items-center w-100 px-2'>
    <i className="fa-solid fa-arrow-left-long"
    onClick={()=> setSelectedChat("")}
    ></i>
     {!selectedChat.isGroupChat ? (
        <>
        {getSender(user,selectedChat.users)}
        <Modalprofile user={getSenderFull(user,selectedChat.users)} />
        </>
      ) : (
        <>
          {selectedChat.chatName}
        </>
      )}

    </div>
    </>
   ):(
    <div className='d-flex align-items-center justify-content-center'>
        <h3>Chatify</h3>
    </div>

   )
   }
   </>
  )
}

export default SingleChat
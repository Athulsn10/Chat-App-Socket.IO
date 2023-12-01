import React from 'react'
import { ChatState } from '../context/ChatProvider';
import {getSender, getSenderFull} from '../config/ChatLogic'
import Modalprofile from './chatarea/Modalprofile'
import EditGroupModal from './chatarea/EditGroupModal';

function SingleChat() {
    const {fetchAgain,setFetchAgain,user,selectedChat,setSelectedChat } = ChatState();
    console.log(selectedChat);

  return (
   <>
   {selectedChat ?(
    <>
    <div style={{overflowY:'hidden'}} className='d-flex justify-content-between align-items-center w-100 px-2'>
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
          <EditGroupModal
          
          />
        </>
      )}
      
    </div>
      <div className='flex-column justify-content-end w-100 h-100 p-3 rounded' style={{backgroundColor:'grey'}}>
      </div>
    </>
   ):(
    <div className='d-flex align-items-center justify-content-center'>
        <h3 style={{color:'black'}}>Chatify</h3>
    </div>
   )
   }
   </>
  )
}

export default SingleChat
import React, { useEffect, useState } from 'react'
import { ChatState } from '../../context/ChatProvider';
import Stack from 'react-bootstrap/Stack';
import { getSender } from '../../config/ChatLogic';

function MyChats() {
  const [loggedUser, setLoggedUser] = useState();
  const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();  
  const fetchChats = async ()=>{
    try {
      const config = {
        headers: 
        { 
          Authorization: `Bearer ${user.token}`,
        }
      }
      const {data} = await axios.get('/api/chat',config);
      console.log(data);
      setChats(data);
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")))
    fetchChats();
  },[])
  return (
    <div
    className={`d-${selectedChat ? 'none' : 'flex'} d-md-flex flex-column align-items-center p-3 bg-white w-100 w-md-31 border-radius-lg border-1px`}
  >
    <div className="pb-3 px-3 d-flex w-100 justify-content-between align-items-center">
      My Chats
      
        <button className="btn btn-primary d-flex font-size-17 font-md-size-10 font-lg-size-17">
          New Group <span className="me-2"></span>
        </button>
      
    </div>
    <div className="d-flex flex-column p-2 bg-light w-100 border-radius-lg">
      {chats ? (
        <Stack gap={3} className="overflow-y-scroll">
          {chats.map((chat) => (
            <div
              onClick={() => setSelectedChat(chat)}
              className=" px-3 py-2 border-radius" 
              style={{backgroundColor: selectedChat === chat ? '#FFE8FF' : 'white'}}
              key={chat._id}
            >
              <p>
                {!chat.isGroupChat
                  ? getSender(loggedUser, chat.users)
                  : chat.chatName}
              </p>
              {chat.latestMessage && (
                <p className="font-size-xs">
                  <strong>{chat.latestMessage.sender.name} : </strong>
                  {chat.latestMessage.content.length > 50
                    ? chat.latestMessage.content.substring(0, 51) + '...'
                    : chat.latestMessage.content}
                </p>
              )}
            </div>
          ))}
        </Stack>
      ) : (
       <p> loding..</p>
      )}
    </div>
  </div>
  );
}
export default MyChats
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ChatState } from '../../context/ChatProvider';
import { getSender } from '../../config/ChatLogic';
import Stack from 'react-bootstrap/esm/Stack';

function MyChats() {
  const [loggedUser, setLoggedUser] = useState();
  const { selectedChat, fetchAgain, setSelectedChat, user, chats, setChats } = ChatState();

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get('/api/chat', config);
      setChats(data);
    } catch (error) {
      // Handle error
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem('userInfo')));
    fetchChats();
  }, [fetchAgain]);

  useEffect(() => {
    localStorage.setItem('chats', JSON.stringify(chats));
  }, [chats]);
  

  return (
    <>
      <div style={{display:selectedChat?'none':'flex'}} className="d-md-flex flex-column align-items-center h-100 p-3 bg-white rounded border-1px">
        <div className="pb-3 ps-3 d-flex w-100 justify-content-between align-items-center" style={{overflowY:'hidden'}}>
          My Chats
        </div>
        <div className="flex-column p-2 bg-light h-100 w-100 border-radius-lg overflow-y-scroll">
          {chats ? (
            <Stack gap={2}>
              {chats.map((chat) => (
                <div
                  onClick={() => setSelectedChat(chat)}
                  className=" px-3 py-2 border-radius"
                  style={{ backgroundColor: selectedChat === chat ? '#FFE8FF' : 'white' }}
                  key={chat._id}
                >
                  <p className='m-0 p-0'>
                    {!chat.isGroupChat ? getSender(loggedUser, chat.users) : chat.chatName}
                  </p>
                  {chat.latestMessage && (
                    <p className="p-0 m-0 fw-bolder" style={{fontSize:'12px'}}>
                      {chat.latestMessage.sender.name}:
                      {chat.latestMessage.content.length > 50
                        ? chat.latestMessage.content.substring(0, 51) + '...'
                        : chat.latestMessage.content}
                    </p>
                  )}
                </div>
              ))}
            </Stack>
          ) : (
            <p>loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default MyChats;

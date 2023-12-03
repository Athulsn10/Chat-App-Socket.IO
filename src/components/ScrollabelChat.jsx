import React from 'react';
import ScrollableFeed from 'react-scrollable-feed';
import { isSameSender, isLastMessage, isSameSenderMargin, isSameUser } from '../config/ChatLogic';
import { ChatState } from '../context/ChatProvider';

function ScrollableChat({ messages }) {
  const { user } = ChatState();
  // console.log(messages);

  return (
    <ScrollableFeed>
      {messages.map((m, i) => (
       <div className='flex-column' key={m._id}>
       <p
         className='rounded-pill d-flex align-items-center mb-4 p-2'
         style={{
           width: 'fit-content',
           
           backgroundColor: `${
             m.sender._id === user._id ? '#3797f0' : '#262626'
           }`,
           marginLeft: isSameSenderMargin(messages, m, i, user._id),
           marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
           color: 'white'
         }}
       >
         <span className='mx-3' style={{overflowWrap: 'break-word',}}>{m.content}</span>
       </p>
     </div>
      ))}
    </ScrollableFeed>
  );
}

export default ScrollableChat;

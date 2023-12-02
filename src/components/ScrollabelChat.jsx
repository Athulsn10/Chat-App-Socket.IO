import React from 'react';
import ScrollableFeed from 'react-scrollable-feed';
import { isSameSender, isLastMessage, isSameSenderMargin, isSameUser } from '../config/ChatLogic';
import { ChatState } from '../context/ChatProvider';

function ScrollableChat({ messages }) {
  const { user } = ChatState();
  console.log(messages);

  return (
    <ScrollableFeed>
      {messages.map((m, i) => (
        <div className='flex-column' key={m._id}>
          {(isSameSender(messages, m, i, user._id))}
          <p
            className='rounded-pill w-25 d-flex align-items-center p-2'
            style={{
              backgroundColor: `${
                m.sender._id === user._id ? '#d9fdd3' : '#ffffff'
              }`,
              marginLeft: isSameSenderMargin(messages, m, i, user._id),
              marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
            }}
          >
            <span className='ms-3'>{m.content}</span>
          </p>
        </div>
      ))}
    </ScrollableFeed>
  );
}

export default ScrollableChat;

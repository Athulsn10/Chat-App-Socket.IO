import ChatBox from "../components/chatarea/ChatBox";
import MyChats from "../components/chatarea/MyChats";
import SearchBox from "../components/chatarea/SearchBox";
import { ChatState } from "../context/ChatProvider";

function Chats() {
  const { user } = ChatState();

  
  return (
    <>
      <div className="row chat-bg">
        <div className="col-4">
          <div className="">{user && <SearchBox />}</div> <div> {user && <MyChats />} </div>
        </div>
        <div className="col-8"> {user && <ChatBox />} </div>
      </div>
    </>
  );
}

export default Chats;

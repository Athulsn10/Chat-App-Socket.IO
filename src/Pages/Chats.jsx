import ChatBox from "../components/chatarea/ChatBox";
import MyChats from "../components/chatarea/MyChats";
import SearchBox from "../components/chatarea/SearchBox";
import { ChatState } from "../context/ChatProvider";

function Chats() {
  const { user } = ChatState();

  return (
    <>
      <div className="chat-bg" style={{ backgroundColor: '#f5f7fa', height: '100vh' }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">{user && <SearchBox />}</div>
              <div>{user && <MyChats />}</div>
            </div>
            <div className="col-md-8">
              <div>{user && <ChatBox />}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chats;

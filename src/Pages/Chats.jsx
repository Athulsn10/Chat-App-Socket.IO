import ChatBox from "../components/chatarea/ChatBox";
import MyChats from "../components/chatarea/MyChats";
import SearchBox from "../components/chatarea/SearchBox";
import { ChatState } from "../context/ChatProvider";
import { useNavigate } from 'react-router-dom';


function Chats() {
  const {user} = ChatState();
  const navigate = useNavigate();

  const logout = ()=>{
    localStorage.removeItem("userInfo");
    navigate("/");

  }
  return (
    <>
    {user && <SearchBox/>}
    <div> {user && <MyChats/>} </div>
    <div> {user && <ChatBox/>} </div>
    <button onClick={logout}>logout</button>
    </>
  )
}

export default Chats
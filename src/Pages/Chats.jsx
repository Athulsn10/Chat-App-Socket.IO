import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Chats() {
    const [chats, setChats] = useState([]);
    const fetchChats = async()=>{
        const {data} = await axios.get("/api/chat");
        // console.log(data);
        setChats(data);
    }
    useEffect(()=>{
        fetchChats();
    })
  return (
    <div>Chats</div>
  )
}

export default Chats
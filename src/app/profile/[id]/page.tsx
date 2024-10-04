"use client";
import React, { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { Chat } from "@/components/molecules/ChatComponent/chatComponent";
import { SOCKET_CONNECTION } from "@/constants/allEnv";

const App = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [socket, setSocket] = useState<Socket<any, any>>();

  useEffect(() => {
    console.log({ SOCKET_CONNECTION });
    const socketInstance = io(SOCKET_CONNECTION as string);
    setSocket(socketInstance);
  }, []);

  const joinChat = () => {
    if (username !== "" && room !== "" && socket) {
      socket.emit("joinConversation", room);
      setShowChat(true);
    }
  };

  return (
    <>
      {!showChat && (
        <div className="join_room h-[80vh] flex flex-col justify-center items-center gap-4">
          <h1 className="text-white">Join Chat</h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="h-[35px] w-[300px] bg-black text-white border-2 border-yellow-500 placeholder:text-white placeholder:font-bold placeholder:text-base p-1"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Chat Room"
            className="h-[35px] w-[300px] bg-black text-white border-2 border-yellow-500 placeholder:text-white placeholder:font-bold placeholder:text-base p-1"
            onChange={(e) => setRoom(e.target.value)}
          />
          <button
            onClick={joinChat}
            className="h-[40px] w-[310px] font-bold text-lg bg-[rgb(20,20,178)] text-white border border-yellow-500"
          >
            Join
          </button>
        </div>
      )}
      {showChat && socket && (
        <Chat socket={socket} username={username} room={room} />
      )}

      {/* {!showChat && (
        <div className="join_room">
          <h1>Join Chat</h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Chat Room"
            onChange={(e) => setRoom(e.target.value)}
          />
          <button onClick={joinChat}>Join</button>
        </div>
      )}
      {showChat && socket && (
        <Chat socket={socket} username={username} room={room} />
      )} */}
    </>
  );
};

export default App;

"use client";
import React, { useState, useEffect, useRef } from "react";
import { Socket } from "socket.io-client";

interface IProps {
  socket: Socket<any, any>;
  username: string;
  room: string;
}

export const Chat = ({ socket, username, room }: IProps) => {
  const [currentMessage, setcurrentMessage] = useState("");
  const [messageList, setMessageList] = useState<
    {
      id: number;
      room: string;
      author: string;
      message: string;
      time: string;
    }[]
  >([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        id: Math.random(),
        room: room,
        author: username,
        message: currentMessage,
        time:
          (new Date(Date.now()).getHours() % 12) +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setcurrentMessage("");
    }
  };

  useEffect(() => {
    const handleReceiveMsg = (data: {
      id: number;
      room: string;
      author: string;
      message: string;
      time: string;
    }) => {
      setMessageList((list) => [...list, data]);
    };
    socket.on("receive_message", handleReceiveMsg);

    return () => {
      socket.off("receive_message", handleReceiveMsg);
    };
  }, [socket]);

  const containRef = useRef(null);

  useEffect(() => {
    //@ts-ignore
    containRef.current.scrollTop = containRef.current.scrollHeight;
  }, [messageList]);
  return (
    <>
      <div className="chat_container">
        <h1>Welcome {username}</h1>
        <div className="chat_box">
          <div
            className="auto-scrolling-div flex flex-col"
            ref={containRef}
            style={{
              height: "250px",
              overflowY: "auto",
              border: "2px solid yellow",
            }}
          >
            {messageList.map((data) => {
              const isAuthor = username == data.author;
              return (
                <div
                  key={data.id}
                  className={`message_content ${
                    isAuthor ? "ml-auto" : "w-[max-content]"
                  }`}
                >
                  <div>
                    <div className="msg bg-red-300">
                      <p>{data.message}</p>
                    </div>
                    <div className="msg_detail">
                      <p>{data.author}</p>
                      <p>{data.time}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="chat_body">
            <input
              value={currentMessage}
              type="text"
              placeholder="Type Your Message"
              className=""
              onChange={(e) => setcurrentMessage(e.target.value)}
              onKeyPress={(e) => {
                e.key === "Enter" && sendMessage();
              }}
            />
            <button onClick={sendMessage}>&#9658;</button>
          </div>
        </div>
      </div>
    </>
  );
};

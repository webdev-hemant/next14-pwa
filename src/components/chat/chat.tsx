import { Message, UserData } from "@/app/data";
import ChatTopbar from "./chat-topbar";
import { ChatList } from "./chat-list";
import React, { useEffect, useState } from "react";
import useChatStore from "@/hooks/useChatStore";

interface ChatProps {
  messages?: Message[];
  selectedUser: UserData;
  isMobile: boolean;
  sendMessage: () => void;
}

export function Chat({ messages, selectedUser, isMobile, sendMessage }: ChatProps) {
  const messagesState = useChatStore((state) => state.messages);

  const handleSendMessage = (newMessage: Message) => {
    useChatStore.setState((state) => ({
      messages: [...state.messages, newMessage],
    }));
    sendMessage();
  };

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <ChatTopbar selectedUser={selectedUser} />

      <ChatList
        messages={messagesState}
        selectedUser={selectedUser}
        sendMessage={handleSendMessage}
        isMobile={isMobile}
      />
    </div>
  );
}

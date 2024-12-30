"use client";

import { userData } from "@/app/data";
import React, { useEffect, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import { Sidebar } from "../sidebar";
import { Chat } from "./chat";
import { getAllConversations } from "@/services/servicesApis/chatApis";
import { getCookie } from "@/utils";
import useChatStore from "@/hooks/useChatStore";
import { socketConnection } from "@/utils/socket";

interface ChatLayoutProps {
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}

const roomId = "b1588682-13de-4d7c-86c6-151a2b60d8d7";

export function ChatLayout({
  defaultLayout = [320, 480],
  defaultCollapsed = false,
  navCollapsedSize,
}: ChatLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [selectedUser, setSelectedUser] = useState<any>([]);
  const [apiRes, setApiRes] = useState<any[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const setMessages = useChatStore((state) => state.setMessages);

  const [author, setAuthor] = useState("Hemant");
  const [messages, setMessagesNew] = useState<any[]>([]);
  const [message, setMessage] = useState("Hi cat");

  const sendMessage = () => {
    socketConnection.emit("sendMessage", {
      conversationId: roomId,
      content: message,
    });
    setMessagesNew((prevMessages) => [...prevMessages, { message, author }]);
    setMessage("");
  };

  useEffect(() => {
    socketConnection?.on("newMessage", ({ user, message }) => {
      console.log({ user, message });
      setMessagesNew((prevMessages) => [
        ...prevMessages,
        { message: message, author: user },
      ]);
    });

    // const joinRoom = () => {
    socketConnection?.emit("joinConversation", roomId);
    // };

    return () => {
      socketConnection?.off("newMessage");
    };
  }, []);

  useEffect(() => {
    (async () => {
      const token = getCookie('token');
      const { data } = await getAllConversations(token as string);
      if (!data?.error) {
        setApiRes(data as any);
        setSelectedUser(data?.[0] as any);
        setMessages(() => data?.[0]?.messages || []);
      }
    })();
  }, []);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkScreenWidth();

    // Event listener for screen width changes
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  const handleConversationClick = () => {
    setSelectedUser(apiRes[0]);
  };

  return (
    <ResizablePanelGroup
      direction="horizontal"
      onLayout={(sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(
          sizes
        )}`;
      }}
      className="h-full items-stretch"
    >
      <ResizablePanel
        defaultSize={defaultLayout[0]}
        collapsedSize={navCollapsedSize}
        collapsible={true}
        minSize={isMobile ? 0 : 24}
        maxSize={isMobile ? 8 : 30}
        onCollapse={() => {
          setIsCollapsed(true);
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
            true
          )}`;
        }}
        onExpand={() => {
          setIsCollapsed(false);
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
            false
          )}`;
        }}
        className={cn(
          isCollapsed &&
            "min-w-[50px] md:min-w-[70px] transition-all duration-300 ease-in-out"
        )}
      >
        <Sidebar
          handleConversationClick={handleConversationClick}
          isCollapsed={isCollapsed || isMobile}
          chats={apiRes?.map((user) => ({
            name: user.name,
            messages: user.messages ?? [],
            avatar: user.avatar,
            variant: selectedUser.name === user.name ? "secondary" : "ghost",
          }))}
          isMobile={isMobile}
        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
        <Chat
          messages={selectedUser.messages}
          selectedUser={selectedUser}
          isMobile={isMobile}
          sendMessage={sendMessage}
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

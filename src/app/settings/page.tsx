import { cookies } from "next/headers";
import { ChatLayout } from "@/components/chat/chat-layout";
import { getAllConversations } from "@/services/servicesApis/chatApis";

export default async function Settings() {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  const data = await getAllConversations();

  console.log({ data });

  return (
    <div className="w-full">
      <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Loader from "@/components/ui/loader";
import { Textarea } from "@/components/ui/textarea";
import {
  GetMessagesByChannelQuery,
  useAddChatMessageMutation,
  useGetMessagesByChannelQuery,
  useSubscribeToChannelSubscription,
} from "@/gql/types-and-hooks";
import { Suspense, lazy, useEffect, useState } from "react";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

const Chat = () => {
  const ScrollArea = lazy(() =>
    import("@/components/ui/scroll-area").then((module) => ({
      default: module.ScrollArea,
    }))
  );

  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [gettingHeight, setGettingHeight] = useState(true);
  // const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState<GetMessagesByChannelQuery["chat"]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const { data: chatMessageData } = useSubscribeToChannelSubscription({
    variables: { channel: "test" },
  });

  useEffect(() => {
    if (chatMessageData && chatMessageData.chatMessageAdded) {
      setChat((currentChat) => {
        const updatedChat = [...currentChat, chatMessageData.chatMessageAdded];
        updatedChat.sort(
          (a, b) =>
            new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()
        );
        return updatedChat;
      });
    }
  }, [chatMessageData]);

  const { loading } = useGetMessagesByChannelQuery({
    variables: { channel: "test" },
    fetchPolicy: "network-only", // Fetches from the network and doesn't use the cache for this query
    onCompleted: (data) => {
      console.log(data);
      setChat(data?.chat ?? []);
    },
  });

  const [addChatMessage] = useAddChatMessageMutation();

  useEffect(() => {
    // Function to update the state with the current window height
    let debounce: NodeJS.Timeout = null!;
    const handleResize = () => {
      setGettingHeight(true);
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        setScreenHeight(window.innerHeight);
        setGettingHeight(false);
      }, 300);
    };

    // Add the event listener for the resize event
    window.addEventListener("resize", handleResize);

    setScreenHeight(window.innerHeight);
    setGettingHeight(false);

    // Clean-up function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const postChatMessage = async () => {
    const trimmedName = name.trim();
    if (!trimmedName || !trimmedName.length || trimmedName.length < 3) {
      toast.error("name must be at least 3 characters");
      return;
    }

    if (message && message.trim()) {
      try {
        await addChatMessage({ variables: { channel: "test", name, message } });
        setMessage("");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const loader = (
    <div className="flex-1 flex flex-col justify-center h-full w-full py-6">
      <Loader label="Loading" spinnerSize={100} labelSize="xl" />
    </div>
  );

  const resizeFallback = (
    <div
      className={`flex-1 h-[${
        Math.max(screenHeight, 500) - 250
      }px] w-full border rounded-md overflow-hidden`}
    >
      <Skeleton className="mb-2 mt-6 mx-4 h-4 w-[200px]" />
      <Skeleton className="my-2 mx-4 h-4 w-[310px]" />
      <Skeleton className="my-2 mx-4 h-4 w-[240px]" />
      <Skeleton className="my-2 mx-4 h-4 w-[330px]" />
      <Skeleton className="my-2 mx-4 h-4 w-[320px]" />
      <Skeleton className="my-2 mx-4 h-4 w-[250px]" />
      <Skeleton className="my-2 mx-4 h-4 w-[200px]" />
      <Skeleton className="my-2 mx-4 h-4 w-[290px]" />
      <Skeleton className="my-2 mx-4 h-4 w-[240px]" />
      <Skeleton className="my-2 mx-4 h-4 w-[300px]" />
    </div>
  );

  const chatComp = (
    <>
      <div className="flex-1 flex flex-col h-full w-full py-6">
        <Suspense fallback={resizeFallback}>
          {gettingHeight && resizeFallback}
          {!gettingHeight && (
            <ScrollArea
              style={{ height: `${Math.max(screenHeight, 500) - 250}px` }}
              className={"w-100 rounded-md border"}
            >
              <div className="p-4">
                {chat.map((message) => (
                  <div key={message.id}>
                    {message.name}: {message.message}
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </Suspense>
        <Input
          className="mt-4 max-w-sm"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex 1-full items-start space-x-2 my-4">
          <Textarea
            className=" max-h-[100px]"
            placeholder="Type your message here."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                postChatMessage();
              }
            }}
          />
          <Button type="submit" onClick={() => postChatMessage()}>
            Send
          </Button>
        </div>
      </div>
    </>
  );

  let content = loader;
  if (!loading) content = chatComp;

  return content;
};

export default Chat;

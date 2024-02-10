import { Button } from "@/components/ui/button";
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

const Chat = () => {
  const ScrollArea = lazy(() =>
    import("@/components/ui/scroll-area").then((module) => ({
      default: module.ScrollArea,
    }))
  );

  const Input = lazy(() =>
    import("@/components/ui/input").then((module) => ({
      default: module.Input,
    }))
  );

  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [, setGettingHeight] = useState(true);
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
    const handleResize = () => {
      setGettingHeight(true);
      setTimeout(() => {
        setScreenHeight(window.innerHeight);
        setGettingHeight(false);
      });
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
      <Loader
        label={loading ? "Loading" : "Resizing"}
        spinnerSize={100}
        labelSize="xl"
      />
    </div>
  );

  const chatComp = (
    <>
      <div className="flex-1 h-full w-full py-6">
        {loading && (
          <Loader
            label={loading ? "Loading" : "Resizing"}
            spinnerSize={100}
            labelSize="xl"
          />
        )}
        {!loading && (
          <>
            <div>
              <ScrollArea
                style={{ height: `${screenHeight - 250}px` }}
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
            </div>
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
          </>
        )}
      </div>
    </>
  );

  let content = loader;
  if (!loading) content = chatComp;

  return <Suspense fallback={loader}>{content}</Suspense>;
};

export default Chat;

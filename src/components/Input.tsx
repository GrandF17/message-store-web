import { Button, Flex, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const MessageContainer = () => {
  const [message, setMessage] = useState("");

  const send = async () => {
    try {
      const resp = await fetch(`${process.env.REACT_APP_API_URL}/add_message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      console.log("Responce: ", resp);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    console.log("New message: ", message);
  }, [message]);

  return (
    <Flex flexDirection={"row"}>
      <Input
        width={"200px"}
        variant="flushed"
        placeholder="Input your message here..."
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button ml={"5px"} onClick={send}>
        Send
      </Button>
    </Flex>
  );
};

export default MessageContainer;

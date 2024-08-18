import { Button, Flex, Input } from "@chakra-ui/react";
import { fetchNewMessage } from "../utils/express.api";
import { useState } from "react";

const SmartInput = () => {
  const [message, setMessage] = useState("");

  const send = async () => {
    if (!message) return;
    await fetchNewMessage(message);
    setMessage("");
  };

  return (
    <Flex flexDirection={"row"}>
      <Input
        value={message}
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

export default SmartInput;

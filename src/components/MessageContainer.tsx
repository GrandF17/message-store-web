import { VStack } from "@chakra-ui/react";
import { FC } from "react";
import Message from "./Message";

interface ContainerProps {
  messages: string[];
}

const MessageContainer: FC<ContainerProps> = ({ messages }) => {
  return (
    <VStack
      width={"500px"}
      bgColor={"grey"}
      spacing={3}
      borderRadius={"20px"}
      padding={"20px"}
      alignItems={"flex-start"}
    >
      {messages.map((message, i) => (
        <Message key={i} message={message} />
      ))}
    </VStack>
  );
};

export default MessageContainer;

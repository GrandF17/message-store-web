import { Flex } from "@chakra-ui/react";
import { FC } from "react";

interface ContainerProps {
  message: string;
}

const Message: FC<ContainerProps> = ({ message }) => {
  return (
    <Flex
      justifyContent={"center"}
      maxW={"450px"}
      margin={"10px"}
      borderRadius={"20px"}
      padding={"10px"}
      bgColor={"black"}
    >
      {message}
    </Flex>
  );
};

export default Message;

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
      borderRadius={"10px"}
      padding={"10px"}
      bgColor={"black"}
      overflowWrap={"anywhere"}
    >
      {message}
    </Flex>
  );
};

export default Message;

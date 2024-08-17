import { Container } from "@chakra-ui/react";
import MessageContainer from "./MessageContainer";
import Input from "./Input";

const messages: string[] = [
  "Oh hy mark!",
  "Hello there:)",
  "Please don't erase me... ;(",
];

function Body() {
  return (
    <Container
      as="main"
      minH="70vh"
      maxW="container.xl"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      marginTop={100}
    >
      <Input />
      <MessageContainer messages={messages} />
    </Container>
  );
}

export default Body;

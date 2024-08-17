import { Container, Input } from "@chakra-ui/react";
import MessageContainer from "./MessageContainer";

const messages: string[] = [
  "Oh hy mark!",
  "Hello there:)",
  "Please don't erase me... ;(HHHHHHHHHHHHHudjsfbnvierudfvioedhnvilweruHHHHHHHHHHHHHudjsfbnvierudfvioedhnvilweru",
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
      <Input
        width={"200px"}
        variant="flushed"
        placeholder="Input your message here..."
      />
      <MessageContainer messages={messages} />
    </Container>
  );
}

export default Body;

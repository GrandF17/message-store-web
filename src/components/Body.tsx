import { Container } from "@chakra-ui/react";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";

import MessageContainer from "./MessageContainer";
import SmartInput from "./Input";
import { fetchMessages } from "../utils/express.api";

function Body() {
  const queryClient = useQueryClient();
  const { data: messages = [] } = useQuery("messages", fetchMessages);

  useEffect(() => {
    const ws = new WebSocket(`ws://${process.env.REACT_APP_URL}`);
    console.log("SETUPED!!!");

    ws.onmessage = (event) => {
      const data: { type: string; message: string } = JSON.parse(event.data);

      if (data.type === "new_message") {
        queryClient.invalidateQueries("messages");
        // refetch();
      }
    };

    ws.onopen = function () {
      console.log("WebSocket connection opened");
    };

    ws.onclose = function (event: CloseEvent) {
      if (event.wasClean) console.log("Connection closed");
      else console.log("WebSocket connection's broken");

      console.log("Event code: " + event.code + "; Reason: " + event.reason);
    };

    ws.onerror = function (error: Event) {
      console.log("Error: ", error);
    };

    return () => ws.close();
  }, [queryClient]);

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
      <SmartInput />
      <MessageContainer messages={messages} />
    </Container>
  );
}

export default Body;

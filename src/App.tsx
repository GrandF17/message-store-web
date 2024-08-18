import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Body />
        <Footer />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;

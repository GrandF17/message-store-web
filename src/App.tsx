import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
  return (
    <ChakraProvider>
      <Body />
      <Footer />
    </ChakraProvider>
  );
}

export default App;

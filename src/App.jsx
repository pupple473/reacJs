import { useState } from "react";
import { Button, ChakraProvider, Flex, Spinner } from "@chakra-ui/react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {


  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const handleRemove = () => {
    setCount(count - 1);
  };

  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <ChakraProvider>
      <NavBar />

      <ItemListContainer greeting="Bienvenidos a mi primera entrega de react" />   </ChakraProvider>
  );
}

export default App;
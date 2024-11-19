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
      {loading ? (
        <Flex alignItems={"center"} justify={"center"} height={"90vh"}>
          <Spinner />
        </Flex>
      ) : (
        // <ItemListContainer greeting="Bienvenidos a mi proyecto react" />
        <Flex
          alignItems={"center"}
          justify={"center"}
          height={"90vh"}
          fontSize={"2rem"}
        >
          <Button onClick={handleRemove}>-</Button>
          {count}
          <Button onClick={handleAdd}>+</Button>
        </Flex>
      )}
    </ChakraProvider>
  );
}

export default App;
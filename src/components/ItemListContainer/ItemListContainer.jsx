import { ChakraProvider, Flex, Box, Text, useColorMode } from "@chakra-ui/react";
import NavBar from "../NavBar/NavBar";


const ItemListContainer = ({ greeting }) => {
    const { colorMode } = useColorMode();
    return (
        <Box
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgGradient={colorMode === 'light' ? 'linear(to-r, purple.600, blue.300)' : 'none'}
            bgColor={colorMode === 'dark' ? 'black' : 'transparent'}
        >
            <Text
                fontSize="4xl"
                fontWeight="extrabold"
                fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                bgGradient={colorMode === 'dark' ? 'linear(to-r, teal.400, blue.500)' : 'linear(to-r, white, white)'}
                bgClip="text"
            >
                {greeting}
            </Text>
        </Box>
      );
};

export default ItemListContainer;
import { Flex } from "@chakra-ui/react";

const ItemListContainer = ({ greeting }) => {
    return (
        <Flex
            alignItems={"center"}
            justifyContent={"center"}
            height={"70vh"}
            fontSize={"1.5rem"}
        >
        {greeting}
        </Flex>
    );
};

export default ItemListContainer;
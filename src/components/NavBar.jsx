import React from "react";
import CartWidget from "./CartWidget";
import { Flex, Spacer, Box, Heading, ButtonGroup, Button } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" bg='blue.500' gap="2">
      <Box p="2">
        <Heading size="md">Rizzo E-commerce</Heading>
      </Box>
      <Spacer />
      
      <button>categoria1</button>
        <button>categoria2</button>
        <button>categoria3</button>
      <ButtonGroup gap="1">
        <Button colorScheme="teal"><CartWidget/></Button>
      </ButtonGroup>
    </Flex>
    // <div>
    //   <h3>Rizzo E-commerce</h3>
    //   <div>
        // <button>categoria1</button>
        // <button>categoria2</button>
        // <button>categoria3</button>
    //   </div>
    //   <CartWidget/>
    // </div>
  );
};

export default NavBar;

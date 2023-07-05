import React from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" bg="blue.500" h="80px">
      <Box p="2">
        <Link to="/">
          <Heading size="md" className="brand">
            Rizzo E-commerce
          </Heading>
        </Link>
      </Box>
      <Spacer />
      <Menu>
        <MenuButton
          bg="blue.100"
          as={Button}
          rightIcon={<ChevronDownIcon />}
          _hover={{ bg: "blue.200" }}
        >
          Categorias
        </MenuButton>
        <MenuList>
          <MenuItem as={Link} to="/category/gryffindor">
            Gryffindor
          </MenuItem>
          <MenuItem as={Link} to="/category/hufflepuff">
            Hufflepuff
          </MenuItem>
          <MenuItem as={Link} to="/category/ravenclaw">
            Ravenclaw
          </MenuItem>
          <MenuItem as={Link} to="/category/slytherin">
            Slytherin
          </MenuItem>
        </MenuList>
      </Menu>
      <Spacer />
      <Button colorScheme="teal" as={Link} to="/cart">
        <CartWidget />
      </Button>
    </Flex>
  );
};

export default NavBar;

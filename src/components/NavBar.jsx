import { Link } from "react-router-dom";
import React from "react";
import CartWidget from "./CartWidget";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  ButtonGroup,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" bg="blue.500" gap="2">
      <Box p="2">
        <Link to="/">
          <Heading size="md">Rizzo E-commerce</Heading>
        </Link>
      </Box>
      <Spacer />

      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Categorias
        </MenuButton>
        <MenuList>
          <Link to={`/category/gryffindor`}>
            <MenuItem>Gryffindor</MenuItem>
          </Link>
          <Link to={`/category/hufflepuff`}>
            <MenuItem>Hufflepuff</MenuItem>
          </Link>
          <Link to={`/category/ravenclaw`}>
            <MenuItem>Ravenclaw</MenuItem>
          </Link>
          <Link to={`/category/slytherin`}>
            <MenuItem>Slytherin</MenuItem>
          </Link>
        </MenuList>
      </Menu>
      <Spacer />
      <ButtonGroup gap="1">
        <Button colorScheme="teal">
          <Link to="/cart">
            <CartWidget />
          </Link>
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default NavBar;

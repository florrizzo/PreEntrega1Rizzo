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
        <Heading size="md">Rizzo E-commerce</Heading>
      </Box>
      <Spacer />

      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Categorias
        </MenuButton>
        <MenuList>
          <MenuItem>Categoria1</MenuItem>
          <MenuItem>Categoria2</MenuItem>
          <MenuItem>Categoria3</MenuItem>
        </MenuList>
      </Menu>
      <Spacer />
      <ButtonGroup gap="1">
        <Button colorScheme="teal">
          <CartWidget />
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default NavBar;

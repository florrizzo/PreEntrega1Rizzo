import {
  Center,
  Card,
  CardBody,
  Text,
  Stack,
  Image,
  Button,
  Divider,
  CardFooter,
  Heading,
  ButtonGroup
} from "@chakra-ui/react";

import React from "react";

const Item = ({ id, nombre, categoria, stock }) => {
  return (
    <div className="card-product">
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{nombre}</Heading>
            <Text>
            Categoria: {categoria}
            </Text>
            <Text color="blue.600" fontSize="2xl">
            Stock: {stock}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Detalle
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Item;
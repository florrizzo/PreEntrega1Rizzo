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
import { Link } from "react-router-dom";
import React from "react";

const Item = ({ id, nombre, categoria, stock, imagen }) => {
  return (
    <div className="card-product">
      <Card maxW="sm" h="100%" w="100%">
        <CardBody>
          <Image
            src={imagen}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            height="250px"
            width="100%"
            objectFit="cover"
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
            <Link path to={`/item/${id}`}>
            <Button variant="solid" colorScheme="blue">
              Detalle
            </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Item;

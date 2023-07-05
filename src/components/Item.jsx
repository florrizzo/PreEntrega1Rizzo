import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Text,
  Stack,
  Image,
  Button,
  Divider,
  CardFooter,
  Heading,
  ButtonGroup,
} from "@chakra-ui/react";

const Item = ({ id, nombre, categoria, stock, imagen }) => {
  return (
    <>
      <div className="card-product">
        <Card maxW="sm">
          <CardBody>
            <Image
              src={imagen}
              alt="Imagen del producto"
              borderRadius="lg"
              height="250px"
              width="100%"
              objectFit="cover"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{nombre}</Heading>
              <Text>Categoria: {categoria}</Text>
              <Text color="blue.600" fontSize="2xl">
                Stock: {stock}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Link to={`/item/${id}`}>
                <Button variant="solid" colorScheme="blue">
                  Detalle
                </Button>
              </Link>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Item;

import React from "react";
import useCart from "../hooks/useCart";
import CheckoutButton from "./CheckoutButton";
import GoLoginButton from "./GoLoginButton";
import {
  Table,
  Tr,
  Td,
  Th,
  Box,
  Thead,
  Tbody,
  Tfoot,
  Button,
  Image,
  Stack,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon, DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function Cart() {
  let orderform = JSON.parse(window.localStorage.getItem("orderform"));
  const {
    substractQuantity,
    addOneMoreProduct,
    deleteProductCart,
    totalAmountToPay,
    changes,
  } = useCart();

  React.useEffect(() => {
    orderform = JSON.parse(window.localStorage.getItem("orderform"));
  }, [changes]);

  return (
    <>
      <Flex
        flexDirection="column"
        px={{ base: "5", md: "20", xl: "30" }}
        py={{ base: "5", md: "20", xl: "30" }}
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          fontSize="3xl"
          textAlign="center"
          marginTop="20px"
          color="teal.400"
          pb="10"
        >
          MI CARRITO
        </Heading>
        {orderform.clientProfile ? (
          <Link to="/history">
            <Button
              mt={1}
              position={{ md: "absolute" }}
              top="170"
              right="500"
              bg="teal.500"
              color="gray.50"
              _hover={{ bg: "teal.600" }}
            >
              Historial de compras
            </Button>
          </Link>
        ) : (
          ""
        )}

        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Box display="flex" alignItems="center">
            {orderform ? (
              orderform.items.length > 0 ? (
                <Table>
                  <Thead>
                    <Tr>
                      <Th fontSize="2xl">Producto</Th>
                      <Th></Th>

                      <Th fontSize="2xl">Cantidad</Th>
                      <Th fontSize="2xl">Precio</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    {orderform.items.length > 0
                      ? orderform.items.map((product) => (
                          <Tr key={product.id}>
                            <Td key={product.id}>
                              <Image src={product.image} boxSize="90px" />
                            </Td>
                            <Td fontSize="xl">{product.title}</Td>

                            <Td>
                              <Stack spacing={4} direction="row" align="center">
                                <Button
                                  colorScheme="teal"
                                  size="xs"
                                  onClick={() => substractQuantity(product)}
                                >
                                  <MinusIcon />
                                </Button>
                                <Box fontSize="xl"> {product.quantity} </Box>

                                <Button
                                  colorScheme="teal"
                                  size="xs"
                                  onClick={() => addOneMoreProduct(product)}
                                >
                                  <AddIcon />
                                </Button>
                              </Stack>
                            </Td>
                            <Td fontSize="xl">
                              ${Number(product.price * product.quantity)}
                            </Td>
                            <Td>
                              <Button
                                colorScheme="teal"
                                size="xs"
                                onClick={() => deleteProductCart(product)}
                              >
                                <DeleteIcon />
                              </Button>
                            </Td>
                          </Tr>
                        ))
                      : ""}
                  </Tbody>

                  <Tfoot>
                    <Tr>
                      <Th></Th>
                      <Th></Th>

                      <Th mr="4" color="black" fontSize="2xl" pt="10">
                        TOTAL
                      </Th>

                      <Th mr="4" color="black" fontSize="2xl" pt="10">
                        ${totalAmountToPay}
                      </Th>
                    </Tr>
                  </Tfoot>
                </Table>
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </Box>
          <Box></Box>
          <Box></Box>
          <Box pb="10">
            {orderform.items.length > 0 ? (
              orderform.clientProfile != null ? (
                <CheckoutButton />
              ) : (
                <GoLoginButton />
              )
            ) : (
              <Box>No hay productos en el carrito.</Box>
            )}
          </Box>
        </Stack>
      </Flex>
    </>
  );
}

export default Cart;

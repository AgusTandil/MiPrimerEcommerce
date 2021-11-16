import React, { useEffect } from "react";

import {
  Table,
  Tr,
  Td,
  Th,
  Thead,
  Tbody,
  Button,
  Image,
  Heading,
  Flex,
  Box,
  FormControl,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import axios from "axios";

import { useSelector } from "react-redux";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function ShoppingHistory() {
  const [shoppingHistory, setShoppingHistory] = React.useState([]);
  let orderform = JSON.parse(window.localStorage.getItem("orderform"));

  const setOneProduct = (e) => {
    localStorage.setItem("product", e);
  };

  useEffect(() => {
    axios
      .get(`/api/cart/history/${orderform.clientProfile.id}`)
      .then((res) => res.data)
      .then((history) => {
        return setShoppingHistory(history);
      });
  }, []);

  return (
    <>
      <Box mt="10">
        <Heading
          fontSize="3xl"
          textAlign="center"
          marginTop="-20px"
          color="teal.400"
          pb="5"
        >
          Historial de Compras
        </Heading>
        {console.log(shoppingHistory)}
        <Flex
          flexDirection="column"
          backgroundColor="gray.200"
          justifyContent="center"
          alignItems="center"
        >
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Fecha de compra</Th>
                <Th>Productos</Th>
                <Th>Forma de Pago</Th>
                <Th>Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {shoppingHistory.map((shop) => (
                <Tr key={shop.id}>
                  <Td> {shop.orderDate.slice(0, 10)} </Td>

                  <FormControl id="producto">
                    <Td isNumeric>
                      <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                          Ver Productos
                        </MenuButton>
                        <MenuList>
                          {shop.order_details.map((products) => (
                            <Link
                              key={products.id}
                              onClick={() => setOneProduct(products.title)}
                              to={`/products/${products.title}`}
                            >
                              <MenuItem minH="48px">
                                <Image
                                  boxSize="2rem"
                                  borderRadius="full"
                                  src={products.image}
                                  alt="Fluffybuns the destroyer"
                                  mr="12px"
                                />
                                <span>{products.title}</span>
                              </MenuItem>
                            </Link>
                          ))}
                        </MenuList>
                      </Menu>
                    </Td>
                  </FormControl>

                  <Td> {shop.orderPaymentType} </Td>
                  <Td> ${shop.totalAmmount} </Td>
                </Tr>
              ))}

              <Tr></Tr>
            </Tbody>
          </Table>
        </Flex>
      </Box>
    </>
  );
}

export default ShoppingHistory;

import React from "react";
import { useToast } from "@chakra-ui/toast";

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

import axios from "axios";
import { useHistory } from "react-router";

function Checkout() {
  const history = useHistory();
  const toast = useToast();
  let sendOrder = JSON.parse(window.localStorage.getItem("orderform"));
  console.log(sendOrder);

  let submitToBack = async () => {
    console.log("send", sendOrder);
    await axios.post("/api/cart/createOrder", sendOrder).then((data) => {
      console.log(`dasodsaodsadosad`, data);
      toast({
        title: "Compra realizada con Exito!",
        status: "success",
        duration: 5000,
        position: "bottom",
        isClosable: true,
      });
    });
    await axios
      .post("/api/mails/sendEmail", { email: sendOrder.clientProfile.email })
      .then((data) => {
        console.log("Email enviado con exito");
      });
    sendOrder.items = [];
    window.localStorage.setItem("orderform", JSON.stringify(sendOrder));
    history.push(`/history`);
  };

  return (
    <>
      <Flex
        flexDirection="column"
        backgroundColor="gray.200"
        px={{ base: "5", md: "20", xl: "30" }}
        py={{ base: "5", md: "20", xl: "30" }}
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          fontSize="2xl"
          textAlign="center"
          marginTop="20px"
          color="teal.400"
          backgroundColor="gray.200"
        >
          Envío
        </Heading>
        <Box
          display="flex"
          alignItems="center"
          paddingTop="10px"
          backgroundColor="gray.200"
        >
          <Table>
            <Thead>
              <Tr>
                <Th fontSize="lg" color="black">
                  Domicilio de envío
                </Th>
                <Td textTransform="uppercase" fontSize="lg" color="black">
                  {sendOrder.order.orderAddress}
                </Td>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Th fontSize="lg" color="black">
                  Medio de pago
                </Th>
                <Td textTransform="uppercase" fontSize="lg" color="black">
                  {sendOrder.order.orderPaymentType}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        <Heading
          fontSize="3xl"
          paddingLeft="30px"
          paddingTop="50px"
          color="teal.400"
          backgroundColor="gray.200"
          paddingBottom="50px"
        >
          Resumen de compra
        </Heading>
        <Box display="flex" alignItems="center">
          {sendOrder ? (
            sendOrder.items.length > 0 ? (
              <Table>
                <Thead>
                  <Tr>
                    <Th fontSize="xl" color="black">
                      Producto
                    </Th>
                    <Th></Th>

                    <Th fontSize="xl" color="black">
                      Cantidad
                    </Th>
                    <Th fontSize="xl" color="black">
                      Precio
                    </Th>
                    <Th></Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {sendOrder
                    ? sendOrder.items.map((product) => (
                        <Tr key={product.id}>
                          <Td>
                            <Image src={product.image} boxSize="50px" />
                          </Td>
                          <Td alignSelf="center" fontSize="xl">
                            {product.title}
                          </Td>
                          <Td>
                            <Stack spacing={4} direction="row" align="center">
                              <Box></Box>
                              <Box></Box>
                              <Box></Box>
                              <Box fontSize="xl" align="center">
                                {" "}
                                {product.quantity}{" "}
                              </Box>
                            </Stack>
                          </Td>
                          <Td fontSize="xl">
                            ${Number(product.price * product.quantity)}
                          </Td>
                        </Tr>
                      ))
                    : ""}
                </Tbody>

                <Tfoot>
                  <Tr>
                    <Th></Th>
                    <Th></Th>

                    <Th mr="4" color="black" fontSize="2xl">
                      TOTAL
                    </Th>

                    <Th mr="4" color="black" fontSize="2xl">
                      ${sendOrder.order.totalAmmount}
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

        <Box paddingBottom="70px" paddingTop="50px" align="center">
          <Button
            colorScheme="teal"
            fontSize="xl"
            onClick={() => submitToBack()}
          >
            FINALIZAR COMPRA
          </Button>
        </Box>
      </Flex>
    </>
  );
}

export default Checkout;

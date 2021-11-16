import { useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import {
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
import React from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Registro() {
  const [registro, setRegistro] = React.useState([]);
  useEffect(() => {
    axios
    .get(`/api/cart/orderList`)
    .then((res) => res.data)
    .then((registro) => {
    /* console.log(registro[0]) */
    return setRegistro(registro);
    });
    }, []);
  return (
    <>
      <br />
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Registro de ventas</TableCaption>
        <Thead>
          <Tr>
            <Th>Número de orden</Th>
            <Th>Fecha de compra</Th>
            <Th>Forma de pago</Th>
            <Th isNumeric>Total</Th>
            <Th isNumeric>Estado de orden</Th>
          </Tr>
        </Thead>
        <Tbody>
        {registro.map((item) => { 
        return <Tr>
            <Td paddingLeft="75px">{item.id}</Td>
            <Td>{item.orderDate.slice(0,10)}</Td>
            <Td>{item.orderPaymentType}</Td>
            <Td isNumeric> $ {item.totalAmmount}</Td>
            <Td paddingRight="75px" isNumeric>{item.orderStatus == "closed" ? "Cerrada": "Activa"} </Td>
          </Tr>
        })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Número de orden</Th>
            <Th>Fecha de compra</Th>
            <Th>Forma de pago</Th>
            <Th isNumeric>Total</Th>
            <Th isNumeric>Estado de orden</Th>
          </Tr>
        </Tfoot>
      </Table>
    </>
  );
}


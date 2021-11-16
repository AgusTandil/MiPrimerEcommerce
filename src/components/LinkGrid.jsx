import * as React from "react";
import { FooterHeading } from "./FooterHeading";
import {
  Box,
  Link,
  SimpleGrid,
  Stack,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

export const LinkGrid = () => (
  <SimpleGrid columns={2}>
    <Box minW="130px">
      <Heading
        mb="4"
        as="h4"
        color={useColorModeValue("gray.600", "gray.400")}
        fontSize="sm"
        fontWeight="semibold"
        textTransform="uppercase"
        letterSpacing="wider"
      >
        Producto
      </Heading>
      <Stack>
        <Link to="/#">¿Cómo funciona?</Link>
        <Link to="/#">¿Quiénes somos?</Link>
        <Link to="/#">Trabajá con nosotros</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <Heading
        mb="4"
        as="h4"
        color={useColorModeValue("gray.600", "gray.400")}
        fontSize="sm"
        fontWeight="semibold"
        textTransform="uppercase"
        letterSpacing="wider"
      >
        Legal
      </Heading>
      <Stack>
        <Link to="/#">Privacidad</Link>
        <Link to="/#">Términos y condiciones</Link>
        <Link to="/#">Licencias</Link>
      </Stack>
    </Box>
  </SimpleGrid>
);

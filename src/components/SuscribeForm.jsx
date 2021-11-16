import {
  Button,
  Heading,
  chakra,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";

export const SubscribeForm = () => {
  return (
    <chakra.form onSubmit={(e) => e.preventDefault()}>
      <Stack spacing="4">
        <Heading
          mb="4"
          as="h4"
          color={useColorModeValue("gray.600", "gray.400")}
          fontSize="sm"
          fontWeight="semibold"
          textTransform="uppercase"
          letterSpacing="wider"
        >
          Subscribite
        </Heading>
        <Text>¡Enterate de todas nuestras novedades!</Text>
        <Stack spacing="4" direction={{ base: "column", md: "row" }}>
          <Input
            bg={useColorModeValue("white", "inherit")}
            placeholder="Ingresá tu mail"
            type="email"
            required
            focusBorderColor={useColorModeValue("blue.500", "blue.300")}
            _placeholder={{
              opacity: 1,
              color: useColorModeValue("gray.500", "whiteAlpha.700"),
            }}
          />
          <Button
            type="submit"
            colorScheme="teal"
            flexShrink={0}
            width={{ base: "full", md: "auto" }}
          >
            Suscribirme
          </Button>
        </Stack>
      </Stack>
    </chakra.form>
  );
};

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import useCreateCategory from "../../hooks/useCreateCategory";

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";

export default function NewCategoryForm() {
  const params = useCreateCategory();
  const { onSubmit, name, setName, sex, setSex } = params;

  return (
    <>
      <br />
      <Flex
        maxH={"92vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <form onSubmit={(e) => onSubmit(e)}>
          <Stack
            spacing={4}
            w={"full"}
            maxW={"md"}
            bg={useColorModeValue("white", "gray.700")}
            rounded={"xl"}
            boxShadow={"lg"}
            p={6}
            my={12}
          >
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
              Nueva categoría
            </Heading>
            <FormControl id="name">
              <FormLabel>Nombre de la categoría</FormLabel>
              <Input
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="sex">
              <FormLabel>Género de la categoría</FormLabel>
              <Select
                placeholder="Seleccione el género del producto"
                size="md"
                id="sex"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              >
                <option value="Men">Hombre</option>
                <option value="Women">Mujer</option>
              </Select>
            </FormControl>

            <Stack spacing={6}>
              <Button
                bg={"teal"}
                color={"white"}
                _hover={{
                  bg: "black",
                }}
                type="submit"
              >
                Aceptar
              </Button>
            </Stack>
          </Stack>
        </form>
      </Flex>
    </>
  );
}

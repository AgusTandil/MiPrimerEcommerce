import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import useEditUser from "../../hooks/useEditUser";

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
import { Text } from "@chakra-ui/layout";

export default function EditUserForm() {
  const selectedUserName = localStorage.getItem("userName");
  const selectedUserAccess = localStorage.getItem("userAccess");
  const selectedUserId = localStorage.getItem("userId");

  const params = useEditUser();
  const { onSubmit, name, setName, id, setId, access, setAccess } = params;

  useEffect(() => {
    setName(selectedUserName);
    setAccess(selectedUserAccess);
    setId(selectedUserId);
  }, []);

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
              Editar permisos de usuario
            </Heading>
            <FormControl id="name">
              <FormLabel>Nombre del usuario</FormLabel>
              <Text type="name">{name}</Text>
            </FormControl>
            <FormControl id="sex">
              <FormLabel>Permisos</FormLabel>
              <Select
                placeholder="Seleccione los permisos del usuario"
                size="md"
                id="sex"
                value={access}
                onChange={(e) => setAccess(e.target.value)}
              >
                <option value="user">Usuario</option>
                <option value="admin">Administrador</option>
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

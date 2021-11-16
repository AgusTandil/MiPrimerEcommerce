import React, { useState } from "react";

//DESIGN
import { Avatar, Flex, Stack, Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/layout";
import {} from "react-icons/fa";
import { useSelector } from "react-redux";

const Home = () => {
  const loggedUser = useSelector((state) => state.user);
  const nombre = loggedUser.fullName;
  return (
    <>
      <Flex
        mt="100px"
        flexDirection="column"
        width="90%"
        height="90%"
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="teal.500" />
          <Heading color="teal.400">¡Bienvenid@, {nombre}!</Heading>
          <Text>
            Utiliza la sidebar para navegar por el sitio como administrador
          </Text>
        </Stack>
      </Flex>
    </>
  );
};

export default Home;

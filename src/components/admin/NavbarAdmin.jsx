import React from "react";
import { useHistory } from "react-router";
import logo from "../../utils/Manfia.png";

import {
  Box,
  Flex,
  Stack,
  Image,
  Button,
  Text,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";

const NavbarAdmin = () => {
  const history = useHistory();
  const redireccionamientoAshe = (e) => {
    e.preventDefault();
    history.push("/");
    history.go(0);
  };

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"8vh"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        ></Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            Manfia Administrador
          </Text>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {/*           <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
          >
            Sign In
          </Button> */}

          <Button
            onClick={(e) => redireccionamientoAshe(e)}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            colorScheme="teal"
            href={"/"}
            _hover={{
              bg: "black",
            }}
          >
            Volver a la Web
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default NavbarAdmin;

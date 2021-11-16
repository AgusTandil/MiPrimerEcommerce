import React, { useState } from "react";
import useLogin from "../hooks/useLogin";

//DESIGN
import {
  Avatar,
  chakra,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Box,
  Flex,
  SimpleGrid,
  VisuallyHidden,
  Stack,
  Divider,
  Text,
  useColorModeValue,
  Link,
  Heading,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";
import {
  FaUserAlt,
  FaLock,
  FaFacebook,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  const params = useLogin();
  const {
    handleSubmit,
    loginEmail,
    loginPassword,
    setLoginEmail,
    setLoginPassword,
  } = params;

  return (
    <>
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
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
          <Heading color="teal.400">Iniciar sesión</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form onSubmit={handleSubmit}>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input
                      type="email"
                      placeholder="Correo electrónico"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<CFaLock color="gray.300" />}
                    />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Contraseña"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                    <InputRightElement width="5.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Ocultar" : "Mostrar"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText textAlign="right">
                    <Link to="/#">¿olvidaste tu contraseña?</Link>
                  </FormHelperText>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                >
                  Ingresar
                </Button>
                <Flex align="center" color="gray.300">
                  <Box flex="1">
                    <Divider borderColor="currentcolor" />
                  </Box>
                  <Text
                    as="span"
                    px="3"
                    color={useColorModeValue("gray.600", "gray.400")}
                    fontWeight="medium"
                  >
                    o continuar con
                  </Text>
                  <Box flex="1">
                    <Divider borderColor="currentcolor" />
                  </Box>
                </Flex>{" "}
                //acá termina el divisor
                <SimpleGrid mt="6" columns={2} spacing="4">
                  <Button color="currentColor" variant="outline">
                    <VisuallyHidden>Login with Facebook</VisuallyHidden>
                    <FaFacebook />
                  </Button>
                  <Button color="currentColor" variant="outline">
                    <VisuallyHidden>Login with Google</VisuallyHidden>
                    <FaGoogle />
                  </Button>
                </SimpleGrid>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Login;

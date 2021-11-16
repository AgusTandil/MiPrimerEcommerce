import React, { useState } from "react";
import useRegister from "../hooks/useRegister";

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
  Heading,
  FormControl,
} from "@chakra-ui/react";
import {
  FaUserAlt,
  FaLock,
  FaFacebook,
  FaEnvelope,
  FaAddressCard,
  FaGlobeAmericas,
  FaGoogle,
  FaPhone,
} from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaEnvelope = chakra(FaEnvelope);
const CFaLock = chakra(FaLock);
const CFaAddressCard = chakra(FaAddressCard);
const CFaGlobeAmericas = chakra(FaGlobeAmericas);
const CFaPhone = chakra(FaPhone);

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  const params = useRegister();
  const {
    onSignUp,
    name,
    setName,
    setEmail,
    country,
    setCountry,
    phone,
    setPhone,
    address,
    setAddress,
    email,
    setPassword,
    password,
    nameValidation,
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
          <Heading color="teal.400">Registrarse</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form onSubmit={(e) => onSignUp(e)}>
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
                      type="fullName"
                      placeholder="Nombre completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaAddressCard color="gray.300" />}
                    />
                    <Input
                      type="address"
                      placeholder="Dirección"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaGlobeAmericas color="gray.300" />}
                    />
                    <Input
                      type="country"
                      placeholder="País"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaPhone color="gray.300" />}
                    />
                    <Input
                      type="phone"
                      placeholder="Número de teléfono"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaEnvelope color="gray.300" />}
                    />
                    <Input
                      type="email"
                      placeholder="Correo electrónico"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width="5.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Ocultar" : "Mostrar"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                >
                  Crear cuenta
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

export default Register;

import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Select,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import useCheckoutForm from "../hooks/useCheckoutForm";
function CheckoutButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const { handleSubmit, setNameValue, setAdressValue, setPaymentValue } =
    useCheckoutForm();

  return (
    <>
      <Button colorScheme="teal" fontSize="xl" onClick={onOpen}>Finalizar Compra</Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogCloseButton />
            <AlertDialogBody>

              <Stack
                spacing={4}
                w={"full"}
                maxW={"md"}
                // bg={useColorModeValue("white", "gray.700")}
                backgroundColor="gray.50"
                rounded={"xl"}
                boxShadow={"lg"}
                p={6}
                my={12}
              >
                <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
                  Detalles de compra
                </Heading>
                <FormControl id="nombreApellido">
                  <FormLabel>Nombre y Apellido</FormLabel>
                  <Input
                    type="title"
                    onChange={(e) => setNameValue(e.target.value)}
                    required
                  />
                </FormControl>
                <FormControl id="Domicilio">
                  <FormLabel>Domicilio</FormLabel>
                  <Input
                    type="title"
                    onChange={(e) => setAdressValue(e.target.value)}
                    required
                  />
                </FormControl>

                <FormControl
                  id="pago"
                  onChange={(e) => setPaymentValue(e.target.value)}
                  required
                >
                  <FormLabel>Medio de Pago</FormLabel>
                  <Select
                    placeholder="Seleccione el medio de pago"
                    size="md"
                    id="mediosdepago"
                  >
                    <option value="Mercado Pago">Mercado Pago</option>
                    <option value="Tarjeta de Crédito">
                      Tarjeta de Crédito
                    </option>
                    <option value="Tarjeta de Débito">Tarjeta de Débito</option>
                  </Select>
                </FormControl>

                {/* <Stack spacing={6}></Stack> */}
              <Button
                onClick={handleSubmit}
                bg={"teal"}
                color={"white"}
                _hover={{
                  bg: "black",
                }}
              >
                Aceptar
              </Button>
              </Stack>


            </AlertDialogBody>
          
          </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default CheckoutButton;

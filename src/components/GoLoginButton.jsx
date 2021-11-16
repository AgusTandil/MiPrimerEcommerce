import {
  Button,
  Flex,
  Heading,
  Stack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link, useHistory } from "react-router-dom";
function GoLoginButton() {
  const history = useHistory();
  const cancelRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Finalizar Compra</Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <Flex maxH={"92vh"} align={"center"} justify={"center"}>
          <AlertDialogContent>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              <Stack
                spacing={4}
                w={"full"}
                maxW={"md"}
                rounded={"xl"}
                boxShadow={"lg"}
                p={6}
                my={12}
              >
                <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "2xl" }}>
                  Debe loguearse para seguir con la compra
                </Heading>
                <Stack spacing={6}></Stack>
              </Stack>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Link to="/login">
                <Button
                  bg={"teal"}
                  color={"white"}
                  _hover={{
                    bg: "black",
                  }}
                >
                  Login
                </Button>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
        </Flex>
      </AlertDialog>
    </>
  );
}

export default GoLoginButton;

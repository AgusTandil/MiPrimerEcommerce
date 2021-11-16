import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Box,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import React from "react";
import axios from "axios";
import { useHistory } from "react-router";

function AlertDeleteCat({ catId }) {
  const history = useHistory();

  const onDelete = (id) => {
    axios.delete(`/api/categories/${id}`).then((data) => {
      console.log(data);
      history.go(0); //NASHEEEE
    });
  };

  return (
    <Popover placement="bottom" closeOnBlur={false}>
      <PopoverTrigger>
        <Button colorScheme="red">
          <AiOutlineDelete />
        </Button>
      </PopoverTrigger>
      <PopoverContent bg="gray.100" borderColor="teal.500">
        <PopoverHeader pt={4} fontWeight="bold" border="0" color="black">
          Confirmar eliminación
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody color="black">
          ¿Estás seguro que querés eliminar la categoría?
          <br></br>
          Si no eliminaste todos los productos asociados a ella, quedarán sin
          categoría asociada.
          <br></br> Asegurate de eliminar todos los productos de esta categoría
          antes de eliminarla.
        </PopoverBody>
        <PopoverFooter
          border="0"
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4}
        >
          <ButtonGroup size="sm">
            <Button bg="gray.700" color="gray.50" onClick={() => history.go(0)}>
              Salir
            </Button>
            <Button
              bg="red.600"
              color="gray.50"
              onClick={() => onDelete(catId)}
            >
              Sí, eliminar
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

export default AlertDeleteCat;

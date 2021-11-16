import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Textarea,
  Input,
  Stack,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import useCreateProduct from "../../hooks/useCreateProduct";

export default function Productos() {
  const [categories, setCategories] = useState([]);
  const params = useCreateProduct();
  const {
    onSubmit,
    title,
    setTitle,
    price,
    setPrice,
    description,
    setDescription,
    sex,
    setSex,
    category,
    setCategory,
    stock,
    setStock,
    imageLink,
    setImageLink,
  } = params;
  useEffect(() => {
    axios
      .get("/api/categories/getCategories")
      .then((res) => res.data)
      .then((data) => setCategories(data));
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
              Añadir producto
            </Heading>
            <FormControl id="title">
              <FormLabel>Nombre del producto</FormLabel>
              <Input
                type="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl id="price">
              <FormLabel>Precio</FormLabel>
              <Input
                type="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormControl>
            <FormControl id="description">
              <FormLabel>Descripción</FormLabel>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Textarea>
            </FormControl>
            <FormControl id="sex">
              <FormLabel>Género</FormLabel>
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

            <FormControl id="category">
              <FormLabel>Categoría</FormLabel>
              <Select
                placeholder="Seleccione el tipo de producto"
                size="md"
                id="sex"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories
                  ? categories.map((cat) =>
                      cat.sex == sex ? (
                        <option value={`${cat.name}`}>{cat.name}</option>
                      ) : null
                    )
                  : null}
              </Select>
            </FormControl>
            <FormControl id="stock">
              <FormLabel>Stock o cantidad de producto</FormLabel>
              <Input
                type="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </FormControl>
            <FormControl id="image">
              <FormLabel>Imagen</FormLabel>
              <Input
                type="imageLink"
                placeholder="Inserte el link a la imagen"
                value={imageLink}
                onChange={(e) => setImageLink(e.target.value)}
              />
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
                Añadir
              </Button>
            </Stack>
          </Stack>
        </form>
        {/*       <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
        minH={"57vh"}
        maxH={"92vh"}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Editar o eliminar productos
        </Heading>
      </Stack> */}
      </Flex>
    </>
  );
}

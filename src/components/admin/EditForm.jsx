import React, { useState } from "react";
import { useSelector } from "react-redux";
import useEditProduct from "../../hooks/useEditProduct";

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Textarea,
  Input,
  HStack,
  Stack,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";

export default function EditForm() {
  const [categories, setCategories] = useState([]);
  /*   const product = useSelector((state) => {
    return state.product;
  }); */

  const product = localStorage.getItem("product");

  const params = useEditProduct();
  const {
    onSubmit,
    id,
    setId,
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

  React.useEffect(async () => {
    console.log(product);
    await axios
      .get("/api/categories/getCategories")
      .then((res) => res.data)
      .then((data) => setCategories(data));
    await axios
      .get(`/api/products/${product}`)
      .then((res) => {
        console.log("RES DATA prod", res.data);
        return res.data;
      })
      .then((product) => {
        setTitle(product.title);
        setId(product.id);
        setPrice(product.price);
        setDescription(product.description);
        setSex(product.sex);
        setCategory(product.category);
        setStock(product.stock);
        setImageLink(product.image);
      })
      .catch((e) => console.log(e));
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
              Editar producto
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
                Aceptar
              </Button>
            </Stack>
          </Stack>
        </form>
      </Flex>
    </>
  );
}
